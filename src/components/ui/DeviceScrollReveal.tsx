"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function DeviceScrollReveal({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 1. Rotation: starts tilted 40deg, flattens to 0deg smoothly over most of the scroll
    const rotateX = useTransform(scrollYProgress, [0, 0.8], [40, 0]);

    // 2. Scale: starts smaller, grows to actual size
    const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 1, 1]);

    // 3. Move down slightly initially to match perspective, then center
    const y = useTransform(scrollYProgress, [0, 0.8], ["15%", "0%"]);

    // 4. Glow/Reflection opacity: starts strong, fades out as it flattens
    const glareOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} className="h-[200vh] relative w-full">
            {/* Sticky viewport container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center perspective-[2000px] overflow-hidden bg-transparent">

                {/* 3D Motion Container */}
                <motion.div
                    style={{
                        rotateX,
                        scale,
                        y,
                        transformStyle: "preserve-3d",
                    }}
                    className="w-full max-w-6xl px-4 md:px-8 relative z-10"
                >
                    {/* The "Device" Frame */}
                    <div className="relative bg-white dark:bg-black rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 dark:shadow-[0_0_80px_rgba(255,255,255,0.05)]">

                        {/* Device Top Bar (like a macbook menu) */}
                        <div className="h-8 bg-[#e5e5e5] dark:bg-[#1a1a1a] border-b border-gray-300/50 dark:border-gray-800 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>

                        {/* Device Screen Content */}
                        <div className="w-full h-full relative overflow-hidden bg-[#fafafa] dark:bg-gray-950">
                            {children}

                            {/* Glare overlay reflecting light */}
                            <motion.div
                                style={{ opacity: glareOpacity }}
                                className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent pointer-events-none mix-blend-overlay"
                            />
                        </div>
                    </div>

                    {/* Massive shadow beneath the device when tilted */}
                    <motion.div
                        style={{ opacity: glareOpacity }}
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-black/40 blur-[100px] rounded-full pointer-events-none dark:bg-brand-500/10"
                    />
                </motion.div>
            </div>
        </div>
    );
}
