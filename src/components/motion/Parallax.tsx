'use client';

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'motion/react';
import { PropsWithChildren, useRef } from 'react';

interface BlockProps {
    className?: string;
    /** Desplazamiento total en px mientras el bloque cruza la pantalla. */
    distance?: number;
}

/** Mueve un bloque ligeramente más lento que el scroll (solo transform). */
export const ParallaxBlock: React.FC<PropsWithChildren<BlockProps>> = ({
    children,
    className,
    distance = 30,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
        </div>
    );
};

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    distance?: number;
    /** Pasar true si la imagen está en el primer pantallazo. */
    priority?: boolean;
}

/**
 * Imagen que llena su contenedor (position: relative) con parallax sutil.
 * La imagen se agranda un 14 % para que el movimiento nunca deje bordes.
 */
export const ParallaxImage: React.FC<ImageProps> = ({
    src,
    alt,
    className = '',
    distance = 28,
    priority = false,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

    return (
        <div ref={ref} className="absolute inset-0 overflow-hidden">
            <motion.img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                className={`h-full w-full object-cover ${className}`}
                style={reduce ? undefined : { y, scale: 1.14 }}
            />
        </div>
    );
};
