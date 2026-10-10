'use client';

import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '@/assets/icons/menu.svg';
import XIcon from '@/assets/icons/x.svg';
import Logo from '@/assets/icons/logo.svg';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import Btn from '../Btn';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface NavItem {
    label: string;
    href: string;
    external?: boolean;
}

const navLinkClass =
    'text-lg leading-none tracking-[-0.41px] uppercase md:text-sm';

const MENU_HREF = '/#menu';
const EVENTOS_HREF = '/#eventos';

const scrollToMenu = (): void => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToEventos = (): void => {
    document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' });
};

const Header: React.FC = () => {
    const navItemsDOM = useRef<HTMLUListElement | null>(null);
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
        external = false,
    ): void => {
        if (href === MENU_HREF && pathname === '/') {
            e.preventDefault();
            setShowMobileMenu(false);
            scrollToMenu();
            return;
        }

        if (href === EVENTOS_HREF && pathname === '/') {
            e.preventDefault();
            setShowMobileMenu(false);
            scrollToEventos();
            return;
        }

        if (!showMobileMenu) return;

        e.preventDefault();
        setShowMobileMenu(false);

        if (external) {
            window.open(href, '_blank', 'noopener,noreferrer');
            return;
        }

        if (pathname === href) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        router.push(href);
    };

    const nav: NavItem[] = [
        { label: 'Inicio', href: '/' },
        { label: 'Menú', href: '/#menu' },
        { label: 'Eventos', href: '/#eventos' },
        { label: 'Reservas', href: getWhatsAppUrl(), external: true },
    ];

    useEffect(() => {
        const handleMobileNavClickOutside = (event: MouseEvent) => {
            const navItemsEl = navItemsDOM.current;

            if (navItemsEl && !navItemsEl.contains(event.target as Node)) {
                setShowMobileMenu(false);
            }
        };

        if (showMobileMenu) {
            document.addEventListener('click', handleMobileNavClickOutside);
        } else {
            document.removeEventListener('click', handleMobileNavClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleMobileNavClickOutside);
        };
    }, [showMobileMenu]);

    return (
        <header className="relative z-50">
            <div className="relative z-10 container">
                <nav className="relative flex items-center justify-between pt-6 lg:pt-8">
                    <Link
                        href="/"
                        className="flex md:flex-1"
                        aria-label="Home page"
                    >
                        <Logo className="w-[200px] md:w-[240px]" />
                    </Link>
                    <ul
                        ref={navItemsDOM}
                        className={classNames(
                            'flex flex-col gap-4 max-md:absolute max-md:left-0 max-md:-bottom-9 max-md:translate-y-full max-md:w-full md:flex-row md:flex-1 md:justify-center lg:gap-8',
                            {
                                'flex flex-co': showMobileMenu,
                                'max-md:hidden': !showMobileMenu,
                            },
                        )}
                    >
                        {nav.map((item, index) => (
                            <li key={index}>
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) =>
                                            handleNavClick(
                                                e,
                                                item.href,
                                                true,
                                            )
                                        }
                                        className={navLinkClass}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={(e) =>
                                            handleNavClick(e, item.href)
                                        }
                                        className={navLinkClass}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/contact"
                                onClick={(e) =>
                                    handleNavClick(e, '/contact')
                                }
                                className={`${navLinkClass} md:hidden`}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <div className="flex justify-end max-md:hidden md:flex-1">
                        <Btn to="/contact" className="uppercase">
                            <span>Contacto</span>
                        </Btn>
                    </div>
                    <button
                        className="flex md:hidden"
                        aria-label="Toggle mobile menu"
                        onClick={() => setShowMobileMenu((prev) => !prev)}
                    >
                        {showMobileMenu ? (
                            <XIcon className="w-6 h-6" />
                        ) : (
                            <MenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </nav>
            </div>
            {showMobileMenu && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-appAccent md:hidden" />
            )}
        </header>
    );
};

export default Header;
