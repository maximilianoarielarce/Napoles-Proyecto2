'use client';

import { motion, useReducedMotion } from 'motion/react';
import { PropsWithChildren } from 'react';

/** Transición de entrada entre páginas: solo opacidad, nunca bloquea la lectura. */
const Template: React.FC<PropsWithChildren> = ({ children }) => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default Template;
