import React from 'react';
import {
    MenuCategory,
    MenuItem,
    PRICE_LEGEND,
    formatPrice,
    menuCategories,
} from '@/data/menu';
import CategoryNav from '@/components/menu-page/CategoryNav';
import Reveal from '@/components/motion/Reveal';
import { ParallaxImage } from '@/components/motion/Parallax';
import HomePageDivider from '@/components/home-page/Divider';
import LocalImage from '@/components/LocalImage';

const Price: React.FC<{ item: MenuItem }> = ({ item }) => {
    if (item.price === undefined) return null;

    return (
        <p className="shrink-0 whitespace-nowrap text-right text-sm leading-none tracking-[-0.2px] lg:text-lg lg:leading-none">
            <span className="sr-only">Precio: </span>
            <span className="font-medium">{formatPrice(item.price)}</span>
            {item.priceAlt !== undefined && (
                <>
                    <span aria-hidden="true" className="mx-1 text-appGray-400">
                        /
                    </span>
                    <span className="sr-only"> o </span>
                    <span className="text-appGray-300">
                        {formatPrice(item.priceAlt)}
                    </span>
                </>
            )}
        </p>
    );
};

const Dish: React.FC<{ item: MenuItem; heading: 'h3' | 'h4' }> = ({
    item,
    heading: Heading,
}) => (
    <li className="flex items-start gap-4 py-4 lg:gap-6 lg:py-5">
        {item.image && (
            <LocalImage
                src={item.image}
                alt={item.imageAlt ?? item.name}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 shrink-0 rounded-xl object-cover lg:h-24 lg:w-24"
            />
        )}
        <div className="min-w-0 flex-1">
            <Heading className="text-base leading-tight lg:text-xl lg:leading-tight">
                {item.name}
                {item.isNew && (
                    <span className="ml-2 inline-block -translate-y-px rounded-full bg-appAccent px-2 py-1 align-middle text-[10px] uppercase leading-none tracking-[0.08em] text-white">
                        Nuevo
                    </span>
                )}
            </Heading>
            {item.description && (
                <p className="mt-1 text-sm leading-[1.35] text-appGray-300 lg:text-base lg:leading-[1.35]">
                    {item.description}
                </p>
            )}
        </div>
        <Price item={item} />
    </li>
);

const Category: React.FC<{ category: MenuCategory; index: number }> = ({
    category,
    index,
}) => (
    <section
        id={category.slug}
        aria-labelledby={`${category.slug}-title`}
        className="scroll-mt-20 py-10 lg:scroll-mt-36 lg:py-16"
    >
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
                <Reveal>
                    <div className="mb-2.5 text-xs leading-none lg:mb-[14px] lg:text-base lg:leading-none">
                        [ {String(index + 1).padStart(2, '0')} ]
                    </div>
                    <h2
                        id={`${category.slug}-title`}
                        className="mb-3 font-Gloock text-3xl uppercase leading-none lg:mb-4 lg:text-5xl lg:leading-none"
                    >
                        {category.title}
                    </h2>
                    <p className="mb-5 max-w-[420px] text-sm leading-[1.35] tracking-[-0.2px] text-appGray-300 lg:text-base">
                        {category.summary}
                    </p>
                </Reveal>
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-[#EDEBE1]">
                    <ParallaxImage
                        src={category.image}
                        alt={category.imageAlt}
                        distance={22}
                    />
                </div>
                <a
                    href={category.pdf}
                    download
                    className="inline-flex items-center rounded-[32px] border border-appText px-5 py-3 text-xs uppercase leading-none transition-[transform,background-color,color] duration-300 hover:bg-appText hover:text-appBody active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appText lg:text-sm"
                >
                    Descargar {category.title} en PDF
                </a>
            </div>
            <div>
                {category.note && (
                    <p className="mb-2 rounded-xl bg-[#EDEBE1] px-4 py-3 text-sm leading-[1.35] text-appGray-700">
                        {category.note}
                    </p>
                )}
                {category.sections.map((section, i) => (
                    <div key={i} className={i > 0 ? 'mt-8' : undefined}>
                        {section.title && (
                            <h3 className="mb-1 mt-2 border-b border-appAccent pb-2 font-Gloock text-xl leading-none text-appAccent lg:text-2xl lg:leading-none">
                                {section.title}
                            </h3>
                        )}
                        {section.note && (
                            <p className="mt-2 text-sm italic leading-[1.35] text-appGray-300">
                                {section.note}
                            </p>
                        )}
                        <ul className="divide-y divide-appText/10">
                            {section.items.map((item) => (
                                <Dish
                                    key={item.name}
                                    item={item}
                                    heading={section.title ? 'h4' : 'h3'}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const MenuCatalog: React.FC = () => (
    <>
        <header className="container pb-10 pt-10 text-center lg:pb-14 lg:pt-20">
            <Reveal onScroll={false}>
                <h1 className="mb-4 font-Gloock text-4xl uppercase leading-none lg:mb-6 lg:text-7xl lg:leading-none">
                    Menú
                </h1>
                <p className="mx-auto max-w-[745px] text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 lg:text-base lg:leading-[1.3]">
                    La carta completa de Nápoles Cucina Italiana en Berazategui:
                    entradas, pastas artesanales, pizzas napolitanas, risotto,
                    carnes, pescados, postres y vinos. Elegí una categoría o
                    descargá la carta original en PDF.
                </p>
                {PRICE_LEGEND && (
                    <p className="mx-auto mt-4 max-w-[745px] text-sm text-appGray-700">
                        {PRICE_LEGEND}
                    </p>
                )}
            </Reveal>
        </header>
        <CategoryNav
            items={menuCategories.map((c) => ({
                slug: c.slug,
                title: c.title,
            }))}
        />
        {menuCategories.map((category, index) => (
            <Category key={category.slug} category={category} index={index} />
        ))}
        <HomePageDivider />
    </>
);

export default MenuCatalog;
