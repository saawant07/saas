"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

function AnimatedNumber({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const increment = value / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    { icon: TrendingUp, value: 10847, suffix: "+", label: "Campaigns Run", color: "from-brand-600 to-brand-400" },
    { icon: Users, value: 3200000, suffix: "+", label: "Impressions Generated", displayValue: "3.2M+", color: "from-brand-500 to-orange-400" },
    { icon: Target, value: 142, suffix: "%", label: "Average ROI Increase", color: "from-orange-500 to-amber-400" },
    { icon: Zap, value: 500, suffix: "+", label: "SaaS Founders Served", color: "from-brand-400 to-yellow-500" },
];

export default function StatsCounter() {
    return (
        <section className="py-16 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-center group"
                        >
                            <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">
                                {stat.displayValue ? (
                                    <span>{stat.displayValue}</span>
                                ) : (
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
