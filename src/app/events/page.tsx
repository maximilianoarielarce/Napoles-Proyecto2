import 'swiper/css';
import { Metadata } from 'next';
import ArchWithStar from '@/components/ArchWithStar';
import RichText from '@/components/RichText';
import { EventCard } from '@/components/events-page/EventCard';
import { eventsData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${eventsData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        description: 'Música en vivo, noches de pizza libre y celebraciones en Nápoles Cucina Italiana, Berazategui. Reservá tu mesa por WhatsApp.',
        alternates: { canonical: '/events' },
        openGraph: { title: pageTitle, description: 'Música en vivo, noches de pizza libre y celebraciones en Nápoles Cucina Italiana, Berazategui. Reservá tu mesa por WhatsApp.' },
        twitter: { title: pageTitle },
    };
}

const EventsPage: React.FC = () => {
    return (
        <div>
            <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px]">
                <div className="container max-w-[1198px]">
                    <ArchWithStar />
                    <div className="relative px-4 max-w-[400px] mx-auto mb-10 lg:max-w-[745px] lg:mb-20 xl:px-0">
                        <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-6 lg:text-5xl lg:leading-none">
                            {eventsData.title}
                        </h1>
                        <RichText
                            html={eventsData.description}
                            className="text-sm leading-[1.3] tracking-[-0.41px] uppercase text-appGray-700 lg:text-base lg:leading-[1.3]"
                        />
                    </div>
                </div>
                <div className="container">
                    {eventsData.events.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                            {eventsData.events.map((item, index) => (
                                <EventCard key={index} card={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-sm leading-none tracking-[-0.41px] text-center text-appGray-700 my-20">
                            No events
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
