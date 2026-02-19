"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlugZap, ScanSearch, MessageSquareText } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Integrate",
        description: "One-click secure connection via official Reddit API.",
        icon: PlugZap,
    },
    {
        id: "02",
        title: "Monitor",
        description: "Track high-intent keywords across thousands of communities.",
        icon: ScanSearch,
    },
    {
        id: "03",
        title: "Engage",
        description: "AI-drafted replies that drive traffic naturally.",
        icon: MessageSquareText,
    }
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="how-it-works" className="py-24 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Turn conversations into customers in three simple steps.
                    </p>
                </div>

                <div ref={containerRef} className="relative">
                    {/* Desktop Connector Line (Horizontal) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 dark:bg-gray-800 z-0">
                        <motion.div
                            style={{ scaleX: lineWidth }}
                            className="absolute top-0 left-0 h-full w-full bg-brand-500 origin-left"
                        />
                    </div>

                    {/* Mobile Connector Line (Vertical) */}
                    <div className="md:hidden absolute top-12 bottom-12 left-8 w-0.5 bg-gray-100 dark:bg-gray-800 z-0">
                        <motion.div
                            style={{ scaleY: lineHeight }}
                            className="absolute top-0 left-0 w-full h-full bg-brand-500 origin-top"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col md:items-center text-left md:text-center group">

                                {/* Step Number/Icon Container */}
                                <div className="relative mb-6 flex-shrink-0">
                                    <div className="ml-4 md:ml-0 w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm z-10 relative group-hover:scale-110 transition-transform duration-300 group-hover:border-brand-500/50 group-hover:shadow-[0_0_20px_rgba(234,88,12,0.15)]">
                                        <step.icon className="w-8 h-8 text-gray-400 dark:text-gray-600 group-hover:text-brand-600 transition-colors duration-300" />

                                        {/* Pulse Effect behind active step */}
                                        <div className="absolute inset-0 bg-brand-500/10 rounded-2xl animate-ping opacity-0 group-hover:opacity-100 duration-1000"></div>
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 md:-right-4 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-mono font-bold px-2 py-1 rounded-full border border-white dark:border-black z-20">
                                        {step.id}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors pl-16 md:pl-0 -mt-[4.5rem] md:mt-0">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed pl-16 md:pl-0 relative md:static -top-1">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
