'use client';

import { motion, useReducedMotion } from 'motion/react';
import { PropsWithChildren } from 'react';

interface Props {
    className?: string;
    delay?: number;
    /** Desplazamiento vertical inicial en px (solo transform + opacity). */
    y?: number;
    variant?: 'rise' | 'fade' | 'scale';
    /** Si es false, anima al montar en vez de al entrar en pantalla. */
    onScroll?: boolean;
}

/**
 * Aparición suave al hacer scroll. Solo anima `transform` y `opacity`.
 * Con movimiento reducido el contenido se muestra sin animación.
 */
const Reveal: React.FC<PropsWithChildren<Props>> = ({
    children,
    className,
    delay = 0,
    y = 24,
    variant = 'rise',
    onScroll = true,
}) => {
    const reduce = useReducedMotion();

    const hidden =
        variant === 'fade'
            ? { opacity: 0 }
            : variant === 'scale'
              ? { opacity: 0, scale: 0.96 }
              : { opacity: 0, y };
    const shown = { opacity: 1, y: 0, scale: 1 };
    const transition = {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
    };

    return (
        <motion.div
            className={className}
            initial={reduce ? false : hidden}
            {...(onScroll
                ? {
                      whileInView: shown,
                      viewport: { once: true, margin: '0px 0px -60px 0px' },
                  }
                : { animate: shown })}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
