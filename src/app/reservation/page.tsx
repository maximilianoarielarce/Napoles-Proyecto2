import 'swiper/css';
import { Metadata } from 'next';
import ReservationForm from '@/components/reservation-page/Form';
import { reservationData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${reservationData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        description: 'Reservá tu mesa en Nápoles Cucina Italiana, Berazategui, por WhatsApp.',
        alternates: { canonical: '/reservation' },
        openGraph: { title: pageTitle, description: 'Reservá tu mesa en Nápoles Cucina Italiana, Berazategui, por WhatsApp.' },
        twitter: { title: pageTitle },
    };
}

const ReservationPage: React.FC = () => {
    return (
        <div>
            <ReservationForm title={reservationData.title} />
        </div>
    );
};

export default ReservationPage;
