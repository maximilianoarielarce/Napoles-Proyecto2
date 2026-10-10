import { PropsWithChildren } from 'react';
import '@/styles/_main.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Gloock, Inter } from 'next/font/google';
import { Metadata } from 'next';
import { siteName } from '@/data/content';
import MotionProvider from '@/components/motion/Providers';
import { restaurantJsonLd, siteUrl } from '@/lib/seo';

const gloock = Gloock({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-gloock',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const metaTitle = 'Nápoles Cucina Italiana | Restaurante italiano en Berazategui';
const metaDescription =
    'Nápoles Cucina Italiana — cocina italiana en Berazategui. Pastas artesanales, pizza napolitana y un ambiente cálido en Zona Sur.';
const metaImage = '/thumbnail.jpg';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    title: metaTitle,
    description: metaDescription,
    openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: 'website',
        images: [metaImage],
        siteName: siteName,
        locale: 'es_AR',
        url: '/',
    },
    twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: [metaImage],
    },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="es">
            <body
                /* className={`${gloock.variable} font-Helvetica overflow-x-hidden bg-appBody text-appText`} */
                className={`${gloock.variable} ${inter.variable} font-sans overflow-x-hidden bg-appBody text-appText`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(restaurantJsonLd).replace(
                            /</g,
                            '\\u003c',
                        ),
                    }}
                />
                <noscript>
                    <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
                </noscript>
                <MotionProvider>
                    <a
                        href="#contenido"
                        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-appText focus:px-4 focus:py-2 focus:text-appBody"
                    >
                        Saltar al contenido
                    </a>
                    <div className="overflow-x-clip flex flex-col min-h-screen">
                        <Header />
                        <main id="contenido" className="flex flex-col flex-1">
                            {children}
                        </main>
                        <Footer />
                        <WhatsAppFloat />
                    </div>
                </MotionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
