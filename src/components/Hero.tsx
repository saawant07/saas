"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Star, TrendingUp, Activity, BarChart3, Eye, MousePointerClick, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

function AnimatedCounter({ target, duration = 2000, prefix = "", suffix = "" }: { target: number; duration?: number; prefix?: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration]);
    return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

function MiniBarChart() {
    const bars = [35, 58, 42, 72, 55, 88, 65];
    return (
        <div className="flex items-end gap-1.5 h-20">
            {bars.map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-600 to-brand-400 relative group cursor-pointer"
                >
                    <motion.div
                        className="absolute inset-0 bg-white/20 rounded-t-sm"
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ delay: 2 + i * 0.3, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    }, [mouseX, mouseY]);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    const liveThreads = [
        { r: "r/SaaS", title: "Best organic marketing tools?", intent: "High", time: "2m ago", score: 94 },
        { r: "r/Entrepreneur", title: "How to validate my idea?", intent: "Medium", time: "5m ago", score: 78 },
        { r: "r/Marketing", title: "Reddit vs FB Ads for B2B?", intent: "High", time: "12m ago", score: 91 },
    ];

    const subredditData = [
        { name: "r/SaaS", posts: "2.4k", growth: "+18%" },
        { name: "r/startups", posts: "1.8k", growth: "+12%" },
        { name: "r/marketing", posts: "3.1k", growth: "+24%" },
    ];

    const bgX1 = useTransform(springX, [-0.5, 0.5], ["5%", "-5%"]);
    const bgY1 = useTransform(springY, [-0.5, 0.5], ["5%", "-5%"]);
    const bgX2 = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]);
    const bgY2 = useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]);

    const floatY1 = useTransform(springY, [-0.5, 0.5], [-20, 20]);
    const floatX1 = useTransform(springX, [-0.5, 0.5], [-10, 10]);
    const floatY2 = useTransform(springY, [-0.5, 0.5], [-15, 15]);
    const floatX2 = useTransform(springX, [-0.5, 0.5], [-8, 8]);

    return (
        <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    style={{ x: bgX1, y: bgY1 }}
                    className="absolute top-0 right-0 w-3/4 h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50/50 via-transparent to-transparent dark:from-brand-900/10 opacity-70"
                />
                <motion.div
                    style={{ x: bgX2, y: bgY2 }}
                    className="absolute bottom-0 left-0 w-1/2 h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-50/30 via-transparent to-transparent dark:from-brand-900/5 opacity-50"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Content */}
                    <div className="flex-1 space-y-8 text-left">
                        {/* Trusted Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-1.5 shadow-sm transition-all hover:bg-white/80 dark:hover:bg-gray-900/80 cursor-default">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-sm text-[8px] font-bold text-white">H</div>
                                <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-sm">
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                </div>
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Powering growth for <span className="font-bold text-gray-900 dark:text-white">200+ SaaS Companies</span>
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] text-balance">
                            Turn Reddit Conversations into <span className="text-brand-600">High-Intent Customers</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                            Stop shouting into the void. HardCoded intelligently places your product in relevant Reddit discussions that rank on Google, driving qualified organic traffic on autopilot.
                        </p>

                        <ul className="space-y-3 pt-2">
                            {[
                                "Identify high-value threads ranking on Google Search",
                                "Seamlessly integrate your brand with authentic comments",
                                "Leverage our network of established, aged accounts",
                                "Influence AI overview results (LLMs) organically",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start group">
                                    <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
                                        <CheckCircle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-500" />
                                    </div>
                                    <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                            <Link
                                href="#get-started"
                                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1 text-center"
                            >
                                Start Your Growth Engine
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="w-full sm:w-auto bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center group backdrop-blur-sm"
                            >
                                <span>See how it works</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-500" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Live Campaign Engine */}
                    <div className="flex-1 w-full max-w-md lg:max-w-[560px] relative" style={{ perspective: "1200px" }}>
                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-brand-500/10 rounded-full blur-[100px] -z-10 dark:bg-brand-900/20"></div>

                        {/* ====== MAIN DASHBOARD PANEL ====== */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateX: 12 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/30 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Scanning Beam */}
                            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-3xl">
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-[2px]"
                                    style={{
                                        background: "linear-gradient(90deg, transparent 0%, #f97316 30%, #fb923c 50%, #f97316 70%, transparent 100%)",
                                        boxShadow: "0 0 20px 4px rgba(249, 115, 22, 0.4), 0 0 60px 10px rgba(249, 115, 22, 0.15)",
                                    }}
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>

                            {/* Dashboard Header */}
                            <div className="px-5 py-3.5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white/50 dark:bg-black/20">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                    </span>
                                    Live Campaign Engine
                                </div>
                            </div>

                            {/* Subreddit Analytics Section */}
                            <div className="px-5 pt-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                                            <BarChart3 className="w-4 h-4 text-brand-600" />
                                        </div>
                                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Subreddit Analytics</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono">Last 7 days</span>
                                </div>
                                <MiniBarChart />
                                <div className="flex justify-between mt-2 text-[9px] text-gray-400 font-mono">
                                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                                        <span key={day}>{day}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Live Threads Feed */}
                            <div className="px-5 pt-4 pb-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-7 h-7 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                        <Activity className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Live Thread Feed</span>
                                </div>
                                <div className="space-y-2.5">
                                    {liveThreads.map((thread, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.15 }}
                                            className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/40 hover:border-brand-200 dark:hover:border-brand-800/50 transition-all cursor-pointer"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 text-brand-600">
                                                <span className="font-bold text-[10px]">r/</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center mb-0.5">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase">{thread.r} • {thread.time}</span>
                                                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${thread.intent === 'High' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                                                        {thread.score}% match
                                                    </span>
                                                </div>
                                                <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate group-hover:text-brand-600 transition-colors">
                                                    {thread.title}
                                                </h4>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* ====== FLOATING AD PERFORMANCE CARD ====== */}
                        <motion.div
                            style={{ y: floatY1, x: floatX1 }}
                            className="absolute -right-4 md:-right-8 top-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/60 w-44 z-30 hidden md:block"
                        >
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Eye className="w-3.5 h-3.5 text-brand-500" />
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Ad Performance</span>
                                </div>
                                <div className="space-y-2.5">
                                    <div>
                                        <div className="text-[9px] text-gray-400 font-medium">Impressions</div>
                                        <div className="text-lg font-black text-gray-900 dark:text-white leading-tight">
                                            <AnimatedCounter target={847200} prefix="" suffix="" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div>
                                            <div className="text-[9px] text-gray-400 font-medium">CTR</div>
                                            <div className="text-sm font-bold text-green-600">4.8%</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] text-gray-400 font-medium">Conv.</div>
                                            <div className="text-sm font-bold text-brand-600">12.3%</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ====== FLOATING ROI CARD ====== */}
                        <motion.div
                            style={{ y: floatY2, x: floatX2 }}
                            className="absolute -left-4 md:-left-6 bottom-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/60 w-52 z-30 hidden md:block"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-2 mb-2.5">
                                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Subreddit Reach</span>
                                </div>
                                <div className="space-y-2">
                                    {subredditData.map((sub, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">{sub.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] text-gray-400">{sub.posts}</span>
                                                <span className="text-[10px] font-bold text-green-600">{sub.growth}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ====== FLOATING QUICK STAT PILL ====== */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 hidden md:flex"
                        >
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-full shadow-2xl text-xs font-bold"
                            >
                                <Zap className="w-3.5 h-3.5 text-brand-500" />
                                <span><AnimatedCounter target={142} suffix="%" prefix="+" /> ROI this month</span>
                                <MousePointerClick className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
