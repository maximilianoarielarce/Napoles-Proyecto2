import 'swiper/css';
import { Metadata } from 'next';
import { Seasons } from '@/components/seasonal-menu-page/Seasons';
import { Suspense } from 'react';
import { foodItemsData, seasonalData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `Menú de temporada - ${siteName}`;

    return {
        title: pageTitle,
        robots: { index: false, follow: false },
        openGraph: { title: pageTitle },
        twitter: { title: pageTitle },
    };
}

const SeasonalMenuPage: React.FC = () => {
    return (
        <div>
            <Suspense>
                <Seasons
                    seasons={seasonalData.seasons}
                    foodItems={foodItemsData}
                />
            </Suspense>
        </div>
    );
};

export default SeasonalMenuPage;
