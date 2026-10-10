import React from 'react';
import RichText from '@/components/RichText';
import HomePageDivider from '@/components/home-page/Divider';
import StarIcon from '@/assets/icons/star.svg';
import Btn from '@/components/Btn';
import HomePageMap from '@/components/home-page/Map';
import LocalImage from '@/components/LocalImage';
import Reveal from '@/components/motion/Reveal';
import { ParallaxBlock } from '@/components/motion/Parallax';

interface InlineItem {
    type: string;
    content?: string;
    src?: string;
    width?: number;
    alt?: string;
}

interface Props {
    title: string;
    open_time: string;
    address: string;
    map_image: string;
    description: InlineItem[];
}

const HomeHero: React.FC<Props> = ({
    title,
    open_time,
    address,
    map_image,
    description,
}) => {
    return (
        <section className="pt-10 md:pt-20 lg:pt-[200px]">
            <div className="container">
                <div className="relative mb-[14px] lg:mb-12">
                    <ParallaxBlock distance={26}>
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 1376 986"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="w-full"
                    >
                        <path
                            d="M0 238.786C403.766 -78.5849 972.234 -78.5849 1376 238.786V986H0V238.786Z"
                            fill="url(#pattern0)"
                        />
                        <defs>
                            <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlinkHref="#image0_560_272"
                                    transform="matrix(0.000558036 0 0 0.000596162 0 -0.301242)"
                                />
                            </pattern>
                            <image
                                id="image0_560_272"
                                width="1792"
                                height="2688"
                                xlinkHref="/images/home-cover.webp"
                            />
                        </defs>
                    </svg>
                    </ParallaxBlock>
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between xl:top-10 xl:w-full">
                        <div className="flex flex-col items-end max-xl:hidden">
                            <div className="text-lg leading-none mb-1.5">
                                {address}
                            </div>
                            <HomePageMap map_image={map_image} />
                        </div>
                        <div className="h-px flex-1 bg-[#D9D9D9] mx-4 max-xl:hidden" />
                        <div className="bg-white px-4 py-[14px] rounded-[128px] max-w-max lg:px-20 lg:py-14">
                            <Reveal variant="scale" onScroll={false} delay={0.15} className="flex items-center">
                                <StarIcon className="starSpin w-2 h-2 lg:w-12 lg:h-12" />
                                <h1 className="text-xl leading-none font-Gloock mx-2.5 lg:text-[80px] lg:leading-none lg:mx-12 2xl:text-[112px] 2xl:leading-none">
                                    {title}
                                </h1>
                                <StarIcon className="starSpin w-2 h-2 lg:w-12 lg:h-12" />
                            </Reveal>
                        </div>
                        <div className="h-px flex-1 bg-[#D9D9D9] mx-4 max-xl:hidden" />
                        <RichText
                            html={open_time}
                            className="text-sm leading-none text-[#8F8E88] text-right [&_strong]:inline-block [&_strong]:leading-none [&_strong]:font-normal [&_strong]:text-base [&_strong]:text-[#1e293b] [&_strong]:mb-1.5 max-xl:hidden md:[&_strong]:text-lg md:[&_strong]:leading-none lg:text-left"
                        />
                    </div>
                </div>
                <div className="flex items-start justify-between mb-6 xl:hidden">
                    <div>
                        <div className="text-sm leading-none mb-1.5 lg:text-lg lg:leading-none">
                            {address}
                        </div>
                        <HomePageMap map_image={map_image} />
                    </div>
                    <RichText
                        html={open_time}
                        className="text-sm leading-none text-[#8F8E88] text-right [&_strong]:inline-block [&_strong]:leading-none [&_strong]:font-normal [&_strong]:text-base [&_strong]:text-[#1e293b] [&_strong]:mb-1.5 md:[&_strong]:text-lg md:[&_strong]:leading-none lg:text-left"
                    />
                </div>
                <Reveal className="homeHero--description mb-6 lg:mb-14">
                    {description.map((item, index) => {
                        if (item.type === 'text' && item.content) {
                            return (
                                <RichText
                                    key={index}
                                    html={item.content}
                                    className="text-sm leading-[1.3] tracking-[-0.41px] uppercase text-appGray-700 lg:text-[40px] lg:leading-none"
                                    /* className="font-Gloock lowercase text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 lg:text-[40px] lg:leading-none" */
                                />
                            );
                        }
                        if (item.type === 'image' && item.src) {
                            return (
                                <React.Fragment key={index}>
                                    <LocalImage
                                        src={item.src}
                                        alt={item.alt || ''}
                                        className="h-4 flex-shrink-0 mx-2 bg-center bg-cover lg:hidden"
                                        style={{
                                            width: `${(item.width || 100) / 5}px`,
                                        }}
                                    />
                                    <LocalImage
                                        src={item.src}
                                        alt={item.alt || ''}
                                        className="h-10 flex-shrink-0 mx-4 -translate-y-2 bg-center bg-cover max-lg:hidden"
                                        style={{
                                            width: `${(item.width || 100) / 2}px`,
                                        }}
                                    />
                                </React.Fragment>
                            );
                        }
                        return null;
                    })}
                </Reveal>
                <Btn to="/about-us" className="uppercase max-w-max mx-auto">
                    <span>
                        Leer más <span className="sr-only">sobre nosotros</span>
                    </span>
                </Btn>
                <HomePageDivider />
            </div>
        </section>
    );
};

export default HomeHero;
