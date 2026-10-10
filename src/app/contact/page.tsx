import 'swiper/css';
import { Metadata } from 'next';
import ArchWithStar from '@/components/ArchWithStar';
import RichText from '@/components/RichText';
import LocalImage from '@/components/LocalImage';
import Btn from '@/components/Btn';
import { contactData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${contactData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        description: 'Cómo llegar a Nápoles Cucina Italiana: Av. 21 n° 5312, Berazategui. Teléfono, WhatsApp e Instagram.',
        alternates: { canonical: '/contact' },
        openGraph: { title: pageTitle, description: 'Cómo llegar a Nápoles Cucina Italiana: Av. 21 n° 5312, Berazategui. Teléfono, WhatsApp e Instagram.' },
        twitter: { title: pageTitle },
    };
}

const ContactPage: React.FC = () => {
    return (
        <div>
            <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px]">
                <div className="container max-w-[1198px]">
                    <ArchWithStar />
                    <div className="relative px-4 max-w-[400px] mx-auto lg:max-w-[560px] xl:px-0">
                        <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-8 lg:text-5xl lg:leading-none lg:mb-20">
                            {contactData.title}
                        </h1>
                        <RichText
                            html={contactData.description}
                            className="text-sm leading-[1.3] tracking-[-0.41px] uppercase text-center text-appGray-700 mb-8 lg:text-base lg:leading-[1.3] lg:mb-12"
                        />
                        <div className="bg-[#E5E4DA] rounded-2xl p-4 mb-8 lg:mb-10">
                            <LocalImage
                                src={contactData.map_image}
                                alt="Map"
                                className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
                            />
                        </div>
                        <Btn
                            to={contactData.maps_url}
                            className="uppercase max-w-max mx-auto"
                        >
                            <span>Ver en Google Maps</span>
                        </Btn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
