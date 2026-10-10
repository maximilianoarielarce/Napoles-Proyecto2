import { Metadata } from 'next';
import MenuCatalog from '@/components/menu-page/MenuCatalog';
import { siteName } from '@/data/content';
import { menuCategories } from '@/data/menu';
import { menuJsonLd } from '@/lib/seo';

const title = 'Menú: pastas, pizzas, risotto, carnes y postres';
const description =
    'Carta de Nápoles Cucina Italiana en Berazategui: entradas, pastas artesanales, pizzas napolitanas, risotto, carnes, pescados, postres, vinos y bebidas.';

export const metadata: Metadata = {
    title: `${title} - ${siteName}`,
    description,
    alternates: { canonical: '/menu' },
    openGraph: { title: `${title} - ${siteName}`, description, url: '/menu' },
    twitter: { title: `${title} - ${siteName}`, description },
};

const MenuPage: React.FC = () => (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(menuJsonLd(menuCategories)).replace(
                    /</g,
                    '\\u003c',
                ),
            }}
        />
        <MenuCatalog />
    </>
);

export default MenuPage;
