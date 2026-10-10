import type { MenuCategory } from '@/data/menu';

/**
 * URL pública del sitio. Definir NEXT_PUBLIC_SITE_URL en producción
 * (ej. https://tu-dominio.com). Sin esa variable se usa localhost.
 */
export const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
).replace(/\/$/, '');

export const restaurantInfo = {
    name: 'Nápoles Cucina Italiana',
    telephone: '+5491163616346',
    instagram: 'https://www.instagram.com/napolescucinaitaliana',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. 21 n° 5312',
        addressLocality: 'Berazategui',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
    },
};

/** Datos tomados solo de lo que ya publica el sitio (dirección, teléfono, horario). */
export const restaurantJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteUrl}/#restaurant`,
    name: restaurantInfo.name,
    url: siteUrl,
    image: `${siteUrl}/thumbnail.jpg`,
    telephone: restaurantInfo.telephone,
    servesCuisine: 'Italiana',
    address: restaurantInfo.address,
    sameAs: [restaurantInfo.instagram],
    hasMenu: `${siteUrl}/menu`,
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '09:00',
            closes: '01:00',
        },
    ],
};

/**
 * Menú estructurado. No incluye precios a propósito: la carta muestra dos
 * precios por plato y todavía no está confirmado qué significa cada uno.
 */
export const menuJsonLd = (categories: MenuCategory[]) => ({
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `Menú de ${restaurantInfo.name}`,
    inLanguage: 'es-AR',
    url: `${siteUrl}/menu`,
    mainEntityOfPage: `${siteUrl}/menu`,
    provider: { '@id': `${siteUrl}/#restaurant` },
    hasMenuSection: categories.map((category) => ({
        '@type': 'MenuSection',
        name: category.title,
        url: `${siteUrl}/menu#${category.slug}`,
        hasMenuItem: category.sections.flatMap((section) =>
            section.items.map((item) => ({
                '@type': 'MenuItem',
                name: item.name,
                ...(item.description ? { description: item.description } : {}),
            })),
        ),
    })),
});
