import React from 'react';
import HomePageDivider from '@/components/home-page/Divider';
import RichText from '@/components/RichText';
import Reveal from '@/components/motion/Reveal';
import { ParallaxImage } from '@/components/motion/Parallax';

const stripTags = (html: string): string =>
    html.replace(/<[^>]*>/g, '').trim();

interface AmbienceItem {
    text: string;
    image: string;
}

interface Props {
    title: string;
    description: string;
    items: AmbienceItem[];
}

const HomeAmbience: React.FC<Props> = ({ title, description, items }) => {
    return (
        <section>
            <div className="container">
                <Reveal className="flex flex-col items-center">
                    <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
                        [ 2 ]
                    </div>
                    <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
                        {title}
                    </h2>
                    <RichText
                        html={description}
                        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto mb-8 lg:text-base lg:leading-[1.3] lg:mb-[88px]"
                    />
                </Reveal>
                <div className="grid grid-cols-2 gap-4 auto-rows-fr lg:gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="homeAmbience--gridItem w-full h-full relative lg:min-h-[360px]"
                        >
                            <div className="flex absolute z-10 top-5 left-5 bg-appBody rounded-[32px] px-[14px] py-2.5 max-w-[calc(100%-28px)] lg:top-8 lg:left-8 lg:px-6 lg:py-4">
                                <RichText
                                    html={item.text}
                                    className="text-xs leading-none uppercase truncate lg:text-base lg:leading-none"
                                />
                            </div>
                            <ParallaxImage
                                src={item.image}
                                alt={`Nápoles Cucina Italiana, ${stripTags(item.text).toLowerCase()}`}
                                distance={20}
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
                        </div>
                    ))}
                </div>
            </div>
            <HomePageDivider />
        </section>
    );
};

export default HomeAmbience;
