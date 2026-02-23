"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function WorldGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const r = useRef(0);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Initialize theme state
        setIsDark(document.documentElement.classList.contains("dark"));

        // Watch for theme changes applied to the <html> tag
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let phi = 0;
        let width = 0;

        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener("resize", onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: isDark ? 1 : 0,
            diffuse: 1.2,
            mapSamples: 24000,
            mapBrightness: isDark ? 6 : 2.5,
            baseColor: isDark ? [1, 1, 1] : [0.3, 0.3, 0.3],
            markerColor: [249 / 255, 115 / 255, 22 / 255], // brand-500
            glowColor: isDark ? [0.2, 0.2, 0.2] : [0.8, 0.8, 0.8],
            markers: [
                // San Francisco
                { location: [37.7595, -122.4367], size: 0.05 },
                // New York
                { location: [40.7128, -74.0060], size: 0.08 },
                // London
                { location: [51.5074, -0.1278], size: 0.06 },
                // Tokyo
                { location: [35.6895, 139.6917], size: 0.09 },
                // Sydney
                { location: [-33.8688, 151.2093], size: 0.04 },
                // Bangalore
                { location: [12.9716, 77.5946], size: 0.07 },
            ],
            onRender: (state) => {
                // Determine rotation: auto-rotate if not interacting, else use drag
                if (!pointerInteracting.current) {
                    phi += 0.005;
                }
                state.phi = phi + r.current;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        });

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [isDark]);

    return (
        <div className="relative w-full max-w-lg aspect-square mx-auto">
            {/* Soft Glow Behind Globe */}
            <div className="absolute inset-0 bg-brand-500/20 blur-[80px] rounded-full" />

            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-0 transition-opacity duration-1000 cursor-grab active:cursor-grabbing relative z-10"
                style={{ contain: "layout paint size" }}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        r.current += delta / 200;
                        pointerInteracting.current = e.clientX;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        r.current += delta / 100;
                        pointerInteracting.current = e.touches[0].clientX;
                    }
                }}
            />

            {/* Absolute overlay stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 top-12 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-gray-800 rounded-xl p-3 shadow-xl pointer-events-none z-20"
            >
                <div className="text-[10px] text-gray-400 font-mono uppercase">Live Threads Analyzed</div>
                <div className="text-xl font-bold text-white flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    2.4M+
                </div>
            </motion.div>
        </div>
    );
}
