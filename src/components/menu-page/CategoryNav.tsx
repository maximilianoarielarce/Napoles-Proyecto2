'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

interface Item {
    slug: string;
    title: string;
}

interface Props {
    items: Item[];
}

/**
 * Navegación por categorías (anclas reales, funciona sin JS).
 * Con JS resalta la categoría visible y mantiene el chip activo a la vista.
 */
const CategoryNav: React.FC<Props> = ({ items }) => {
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        const sections = items
            .map((i) => document.getElementById(i.slug))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-20% 0px -65% 0px' },
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [items]);

    return (
        <nav
            aria-label="Categorías del menú"
            className="border-y border-appText/10 bg-appBody/95 backdrop-blur lg:sticky lg:top-0 lg:z-40"
        >
            <ul className="container grid grid-cols-2 gap-2 py-3 lg:flex lg:flex-wrap lg:justify-center">
                {items.map((item) => (
                    <li key={item.slug} className="min-w-0">
                        <a
                            href={`#${item.slug}`}
                            data-chip={item.slug}
                            aria-current={active === item.slug ? 'true' : undefined}
                            className={classNames(
                                'flex min-h-10 items-center justify-center rounded-[32px] border px-2 py-2 text-center text-[10px] uppercase leading-tight tracking-[0.04em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appText sm:text-xs lg:min-h-0 lg:px-4 lg:py-2 lg:text-sm lg:leading-none',
                                active === item.slug
                                    ? 'border-appText bg-appText text-appBody'
                                    : 'border-appText/30 text-appText hover:border-appText',
                            )}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryNav;
