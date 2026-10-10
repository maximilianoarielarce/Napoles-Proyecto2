export interface GoogleReview {
    author_name: string;
    author_avatar_image: string | null;
    quote: string;
    rating: number;
    relative_time: string | null;
}

export interface GoogleReviewsResult {
    reviews: GoogleReview[];
    rating: number | null;
    total_ratings: number | null;
    google_maps_url: string | null;
}

interface PlacesApiReview {
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: {
        displayName?: string;
        photoUri?: string;
    };
}

interface PlacesApiResponse {
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    reviews?: PlacesApiReview[];
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function toQuoteHtml(text: string): string {
    return `<p>${escapeHtml(text)}</p>`;
}

export async function fetchGoogleReviews(): Promise<GoogleReviewsResult> {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    const minRating = Number(process.env.GOOGLE_REVIEWS_MIN_RATING ?? '4');

    if (!apiKey || !placeId) {
        throw new Error('Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID');
    }

    const fieldMask = [
        'reviews',
        'rating',
        'userRatingCount',
        'googleMapsUri',
    ].join(',');

    const response = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}?languageCode=es`,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask': fieldMask,
            },
            next: { revalidate: 3600 },
        },
    );

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
            `Google Places API error (${response.status}): ${errorBody}`,
        );
    }

    const data = (await response.json()) as PlacesApiResponse;

    const reviews = (data.reviews ?? [])
        .filter((review) => {
            const rating = review.rating ?? 0;
            return rating >= minRating && rating <= 5;
        })
        .map((review) => {
            const text =
                review.originalText?.text ??
                review.text?.text ??
                '';

            return {
                author_name: review.authorAttribution?.displayName ?? 'Cliente',
                author_avatar_image:
                    review.authorAttribution?.photoUri ?? null,
                quote: text ? toQuoteHtml(text) : '<p></p>',
                rating: review.rating ?? 0,
                relative_time: review.relativePublishTimeDescription ?? null,
            };
        });

    return {
        reviews,
        rating: data.rating ?? null,
        total_ratings: data.userRatingCount ?? null,
        google_maps_url: data.googleMapsUri ?? null,
    };
}
