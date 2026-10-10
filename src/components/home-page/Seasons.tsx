import React from 'react';
import Link from 'next/link';
import RichText from '@/components/RichText';
import HomePageDivider from '@/components/home-page/Divider';
import Reveal from '@/components/motion/Reveal';
import { ParallaxImage } from '@/components/motion/Parallax';
import { menuCategories } from '@/data/menu';

interface Props {
    title: string;
    description: string;
}

/** Tarjetas de categorías del menú: cada una lleva a su sección en /menu. */
const HomeSeasons: React.FC<Props> = ({ title, description }) => {
    return (
        <section id="menu">
            <div className="container">
                <Reveal className="flex flex-col items-center mb-8 lg:mb-[88px]">
                    <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
                        [ 1 ]
                    </div>
                    <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
                        {title}
                    </h2>
                    <RichText
                        html={description}
                        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto lg:text-base lg:leading-[1.3]"
                    />
                    <Link
                        href="/menu"
                        className="mt-6 rounded-[32px] border border-appText px-6 py-4 text-sm uppercase leading-none transition-[transform,background-color,color] duration-300 hover:bg-appText hover:text-appBody active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appText lg:text-base"
                    >
                        Ver el menú completo
                    </Link>
                </Reveal>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-2">
                {menuCategories.map((category) => (
                    <li
                        key={category.slug}
                        className="group relative flex overflow-hidden lg:[&:last-child:nth-child(odd)]:col-span-2"
                    >
                        <div className="container">
                            <div className="relative z-10 flex min-h-[200px] flex-col items-center justify-center py-12 text-center lg:aspect-[1.73]">
                                <h3 className="font-Gloock text-xl uppercase leading-none text-white transition-transform duration-500 group-hover:-translate-y-1 lg:text-[32px] lg:leading-none">
                                    {category.title}
                                </h3>
                                <span className="mt-2 max-w-[280px] text-xs leading-[1.2] text-white/90 lg:text-sm">
                                    {category.summary}
                                </span>
                            </div>
                            <ParallaxImage
                                src={category.image}
                                alt={category.imageAlt}
                                distance={26}
                            />
                            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/25" />
                            <Link
                                href={`/menu#${category.slug}`}
                                aria-label={`Ver ${category.title} en el menú`}
                                className="absolute inset-0 z-20 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white"
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <HomePageDivider />
        </section>
    );
};

export default HomeSeasons;
