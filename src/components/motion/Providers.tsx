'use client';

import { MotionConfig } from 'motion/react';
import { PropsWithChildren } from 'react';

/**
 * Respeta `prefers-reduced-motion` en todas las animaciones de `motion`:
 * con "user", se desactivan los movimientos (transform/layout) y solo
 * quedan los cambios de opacidad.
 */
const MotionProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
