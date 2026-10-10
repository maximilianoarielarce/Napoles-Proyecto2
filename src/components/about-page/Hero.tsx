import React from 'react';
import ArchWithStar from '@/components/ArchWithStar';
import RichText from '@/components/RichText';
import Btn from '@/components/Btn';
import LocalImage from '@/components/LocalImage';
import AboutUsOutline from '@/assets/icons/about-us-outline.svg';

interface Props {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    description: string;
    cover: string;
}

const AboutHero: React.FC<Props> = ({
    titleLine1,
    titleLine2,
    subtitle,
    description,
    cover,
}) => {
    return (
        <section className="pt-[108px] pb-10 overflow-hidden md:pb-14 lg:pt-[218px]">
            <div className="container max-w-[1198px]">
                <ArchWithStar />
                <div className="aboutHero__headline px-4 max-w-[400px] mx-auto lg:max-w-[962px] xl:px-0">
                    <div className="aboutHero__titleBlock mb-2 lg:mb-3">
                        <AboutUsOutline
                            className="aboutHero__watermark w-[220px] right-[30px] top-[55%] lg:w-full lg:max-w-[822px] lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:top-1/2"
                            aria-hidden
                        />
                        <p className="aboutHero__line1 text-xl lg:text-[56px]">
                            {titleLine1}
                        </p>
                        <p className="aboutHero__line2 text-xl lg:text-[56px]">
                            {titleLine2}
                        </p>
                    </div>
                    <RichText
                        html={subtitle}
                        className="relative z-10 text-[10px] leading-[1.2] uppercase max-w-max ml-auto mb-10 lg:text-base lg:leading-[1.2] lg:mb-[120px]"
                    />
                </div>
                <LocalImage
                    src={cover}
                    alt=""
                    className="w-full object-cover aspect-[1.635] mb-4 lg:aspect-[2.67] lg:mb-10"
                />
                <RichText
                    html={description}
                    className="text-sm leading-[1.3] tracking-[-0.41px] uppercase text-appGray-700 mb-6 lg:text-[32px] lg:leading-[1.3] lg:mb-14"
                />
            {/*     <Btn to="/menu" className="uppercase max-w-max mx-auto">
                    <span>Browse menu</span>
                </Btn> */}
            </div>
        </section>
    );
};

export default AboutHero;
