"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.button
            ref={ref}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ x: springX, y: springY }}
        >
            <span className="relative z-10 block">{children}</span>
        </motion.button>
    );
}
