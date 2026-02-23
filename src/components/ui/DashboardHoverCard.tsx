"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Users, TrendingUp } from "lucide-react";

export function DashboardHoverCard() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full h-80 rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-200 dark:from-white/5 dark:to-transparent border border-gray-200 dark:border-white/10 shadow-2xl relative flex items-center justify-center cursor-crosshair group perspective-1000"
        >
            {/* Glare effect overlay */}
            <motion.div
                className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-50 rounded-[2rem] overflow-hidden"
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([mx, my]: any[]) => `radial-gradient(circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgba(255,255,255,0.8) 0%, transparent 60%)`
                    )
                }}
            />

            {/* Inner SaaS UI Simulation */}
            <div
                style={{ transform: "translateZ(50px)" }}
                className="w-[85%] h-[75%] bg-white dark:bg-[#0a0a0a] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 p-5 flex flex-col relative overflow-hidden ring-1 ring-black/5 dark:ring-white/5"
            >
                {/* Top Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[10px] font-bold text-brand-600 dark:text-brand-500 bg-brand-50 dark:bg-brand-900/30 px-2 py-1 rounded-full border border-brand-100 dark:border-brand-800 tracking-wider">LIVE DATA</div>
                </div>

                {/* High-Tech Chart Bars */}
                <div className="flex-1 flex items-end justify-between space-x-2 border-b border-gray-100 dark:border-gray-800 pb-2 relative z-10">
                    {[15, 25, 20, 55, 30, 80, 50, 95, 70, 100].map((h, i) => (
                        <div key={i} className="w-full h-full relative group/bar flex items-end justify-center">
                            <div style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-sm opacity-80 group-hover/bar:opacity-100 transition-opacity"></div>
                            {/* Hover tooltip for chart bar */}
                            <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] py-1 px-2 rounded whitespace-nowrap z-50 transition-opacity font-bold shadow-lg pointer-events-none">
                                {Math.floor(h * 1.2)}k Views
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="flex justify-between mt-4 relative z-10">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-medium">100k+ Visitors</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-500">
                        <Activity className="w-4 h-4" />
                        <span className="text-xs font-bold">+412% MoM</span>
                    </div>
                </div>
            </div>

            {/* Floating 3D Badge breaking the container */}
            <motion.div
                style={{ transform: "translateZ(90px)" }}
                className="absolute -right-4 -top-4 bg-brand-600 text-white font-bold px-4 py-2 rounded-xl shadow-2xl border border-white/20 flex items-center space-x-2 shadow-brand-500/40"
            >
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Top 1% Indexing</span>
            </motion.div>

            {/* Floating UI Element 2 */}
            <motion.div
                style={{ transform: "translateZ(70px)" }}
                className="absolute -left-6 bottom-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold px-4 py-3 rounded-xl shadow-2xl border border-gray-200 dark:border-white/10 flex items-center space-x-3"
            >
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Authority</span>
                    <span className="text-sm">Domain Rank 92</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
