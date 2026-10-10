'use client';

import React, { useEffect, useState } from 'react';
import RichText from '@/components/RichText';
import SwiperCore from 'swiper';
import { A11y, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import type { GoogleReview, GoogleReviewsResult } from '@/lib/google-reviews';

interface Props {
    title: string;
    description: string;
    google_maps_url?: string;
}

SwiperCore.use([A11y, Navigation]);

function StarRating({ rating }: { rating: number }) {
    return (
        <div
            className="flex justify-center gap-0.5 mb-3 lg:mb-4"
            aria-label={`${rating} de 5 estrellas`}
        >
            {Array.from({ length: 5 }, (_, i) => (
                <span
                    key={i}
                    className={
                        i < rating ? 'text-[#FBBC04]' : 'text-appGray-400'
                    }
                    aria-hidden="true"
                >
                    ★
                </span>
            ))}
        </div>
    );
}

function AuthorAvatar({
    name,
    src,
}: {
    name: string;
    src: string | null;
}) {
    if (src) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={src}
                alt={name}
                className="w-10 h-10 rounded-full overflow-hidden object-cover mb-3 mx-auto lg:w-16 lg:h-16 lg:mb-6"
                referrerPolicy="no-referrer"
            />
        );
    }

    const initial = name.charAt(0).toUpperCase();

    return (
        <div
            className="w-10 h-10 rounded-full bg-appGray-400 text-white flex items-center justify-center text-sm font-medium mb-3 mx-auto lg:w-16 lg:h-16 lg:mb-6 lg:text-xl"
            aria-hidden="true"
        >
            {initial}
        </div>
    );
}

const HomeTestimonials: React.FC<Props> = ({
    title,
    description,
    google_maps_url,
}) => {
    const [reviews, setReviews] = useState<GoogleReview[]>([]);
    const [summary, setSummary] = useState<{
        rating: number | null;
        total_ratings: number | null;
        google_maps_url: string | null;
    }>({ rating: null, total_ratings: null, google_maps_url: null });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadReviews() {
            try {
                const response = await fetch('/api/reviews');
                const data = (await response.json()) as GoogleReviewsResult & {
                    error?: string;
                };

                if (!response.ok) {
                    throw new Error(data.error ?? 'Error al cargar reseñas');
                }

                if (!cancelled) {
                    setReviews(data.reviews);
                    setSummary({
                        rating: data.rating,
                        total_ratings: data.total_ratings,
                        google_maps_url: data.google_maps_url,
                    });
                }
            } catch (err) {
                if (!cancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : 'Error al cargar reseñas',
                    );
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadReviews();

        return () => {
            cancelled = true;
        };
    }, []);

    const mapsUrl = summary.google_maps_url ?? google_maps_url ?? null;

    return (
        <section className="overflow-hidden pb-14 md:pb-20 lg:pb-[120px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
                        [ 4 ]
                    </div>
                    <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
                        {title}
                    </h2>
                    <RichText
                        html={description}
                        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto mb-6 lg:text-base lg:leading-[1.3] lg:mb-8"
                    />

                    {summary.rating !== null && summary.total_ratings !== null && (
                        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-8 text-sm text-appGray-700 lg:text-base">
                            <span className="flex gap-0.5 text-[#FBBC04]">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span
                                        key={i}
                                        className={
                                            i < Math.round(summary.rating!)
                                                ? 'text-[#FBBC04]'
                                                : 'text-appGray-400'
                                        }
                                        aria-hidden="true"
                                    >
                                        ★
                                    </span>
                                ))}
                            </span>
                            <span>
                                {summary.rating.toFixed(1)} ·{' '}
                                {summary.total_ratings} reseñas en Google
                            </span>
                        </div>
                    )}

                    {loading && (
                        <p className="text-sm text-appGray-700 uppercase tracking-[-0.41px]">
                            Cargando reseñas...
                        </p>
                    )}

                    {error && !loading && (
                        <p className="text-sm text-appGray-700 text-center max-w-md">
                            No pudimos cargar las reseñas en este momento.
                        </p>
                    )}

                    {!loading && !error && reviews.length === 0 && (
                        <p className="text-sm text-appGray-700 text-center max-w-md">
                            Aún no hay reseñas para mostrar.
                        </p>
                    )}

                    {!loading && reviews.length > 0 && (
                        <div className="grid grid-cols-[auto,1fr,auto] gap-5 w-full lg:gap-24">
                            <button
                                type="button"
                                className="homeTestimonials--swiperPrev flex translate-y-[60px]"
                                aria-label="Reseña anterior"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-4 h-4 flex-shrink-0 lg:w-12 lg:h-12"
                                >
                                    <mask
                                        id="testimonials-prev"
                                        width="48"
                                        height="48"
                                        x="0"
                                        y="0"
                                        maskUnits="userSpaceOnUse"
                                        style={{ maskType: 'alpha' }}
                                    >
                                        <path
                                            fill="#D9D9D9"
                                            d="M48 0H0v48h48z"
                                        />
                                    </mask>
                                    <g mask="url(#testimonials-prev)">
                                        <path
                                            fill="currentColor"
                                            d="m24 40 2.85-2.8L15.65 26H40v-4H15.65l11.2-11.2L24 8 8 24l16 16Z"
                                        />
                                    </g>
                                </svg>
                            </button>
                            <Swiper
                                slidesPerView={1}
                                watchOverflow
                                grabCursor
                                spaceBetween={12}
                                navigation={{
                                    prevEl: '.homeTestimonials--swiperPrev',
                                    nextEl: '.homeTestimonials--swiperNext',
                                }}
                                className="w-full"
                            >
                                {reviews.map((testimonial, index) => (
                                    <SwiperSlide
                                        key={`${testimonial.author_name}-${index}`}
                                        className="flex flex-col items-center justify-center text-center"
                                    >
                                        <StarRating rating={testimonial.rating} />
                                        <RichText
                                            html={testimonial.quote}
                                            className="text-sm leading-[1.4] font-Gloock text-appGray-700 mb-4 lg:text-[32px] lg:leading-[1.4] lg:mb-8"
                                        />
                                        <AuthorAvatar
                                            name={testimonial.author_name}
                                            src={testimonial.author_avatar_image}
                                        />
                                        <div className="text-xs leading-none tracking-[-0.41px] text-appGray-700 uppercase lg:text-xl lg:leading-none">
                                            {testimonial.author_name}
                                        </div>
                                        {testimonial.relative_time && (
                                            <div className="text-xs text-appGray-400 mt-2 lg:text-sm">
                                                {testimonial.relative_time}
                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button
                                type="button"
                                className="homeTestimonials--swiperNext flex translate-y-[60px]"
                                aria-label="Reseña siguiente"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-4 h-4 flex-shrink-0 lg:w-12 lg:h-12"
                                >
                                    <mask
                                        id="testimonials-next"
                                        width="48"
                                        height="48"
                                        x="0"
                                        y="0"
                                        maskUnits="userSpaceOnUse"
                                        style={{ maskType: 'alpha' }}
                                    >
                                        <path
                                            fill="#D9D9D9"
                                            d="M0 0h48v48H0z"
                                        />
                                    </mask>
                                    <g mask="url(#testimonials-next)">
                                        <path
                                            fill="currentColor"
                                            d="m24 40-2.85-2.8L32.35 26H8v-4h24.35l-11.2-11.2L24 8l16 16-16 16Z"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    )}

                    {mapsUrl && (
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 text-xs leading-none tracking-[-0.41px] text-appGray-700 uppercase underline hover:no-underline lg:text-sm"
                        >
                            Ver todas en Google Maps
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
