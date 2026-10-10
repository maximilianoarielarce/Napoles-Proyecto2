import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/menu', '/about-us', '/events', '/contact', '/reservation', '/legal'];

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        changeFrequency: route === '/menu' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/menu' ? 0.9 : 0.6,
    }));
}
