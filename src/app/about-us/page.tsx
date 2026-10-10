import 'swiper/css';
import { Metadata } from 'next';
import AboutHero from '@/components/about-page/Hero';
import AboutTextImage from '@/components/about-page/TextImage';
import { aboutData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${aboutData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        description: 'Conocé la historia de Nápoles Cucina Italiana: recetas de las abuelas tanas, pastas artesanales y pizza napolitana en Berazategui.',
        alternates: { canonical: '/about-us' },
        openGraph: { title: pageTitle, description: 'Conocé la historia de Nápoles Cucina Italiana: recetas de las abuelas tanas, pastas artesanales y pizza napolitana en Berazategui.' },
        twitter: { title: pageTitle },
    };
}

const AboutUsPage: React.FC = () => {
    return (
        <div>
            <AboutHero {...aboutData.hero} />
            <AboutTextImage sections={aboutData.sections} />
        </div>
    );
};

export default AboutUsPage;
