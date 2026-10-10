import { NextResponse } from 'next/server';
import { fetchGoogleReviews } from '@/lib/google-reviews';

export const revalidate = 3600;

export async function GET() {
    try {
        const data = await fetchGoogleReviews();

        return NextResponse.json(data, {
            headers: {
                'Cache-Control':
                    'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json({ error: message, reviews: [] }, { status: 500 });
    }
}
