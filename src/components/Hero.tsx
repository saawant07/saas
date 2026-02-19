"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Star, TrendingUp, AlertCircle } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Simulated "Live" Threads Data
    const liveThreads = [
        { r: "r/SaaS", title: "Best organic marketing tools?", intent: "High", time: "2m ago" },
        { r: "r/Entrepreneur", title: "How to validate my idea?", intent: "Medium", time: "5m ago" },
        { r: "r/Marketing", title: "Reddit vs FB Ads for B2B?", intent: "High", time: "12m ago" },
    ];

    return (
        <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden">
            {/* Restored Background Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], ["5%", "-5%"]), y: useTransform(springY, [-0.5, 0.5], ["5%", "-5%"]) }}
                    className="absolute top-0 right-0 w-3/4 h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50/50 via-transparent to-transparent dark:from-brand-900/10 opacity-70"
                />
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]), y: useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]) }}
                    className="absolute bottom-0 left-0 w-1/2 h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-50/30 via-transparent to-transparent dark:from-brand-900/5 opacity-50"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Original Content & Layout */}
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

                    {/* Right Column: New "Amazing" Product Visual */}
                    <div className="flex-1 w-full max-w-md lg:max-w-full relative perspective-1000">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/10 rounded-full blur-[80px] -z-10 dark:bg-brand-900/20"></div>

                        {/* Main Glass Dashboard Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotateX: 10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white/50 dark:bg-black/20">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                    Scanner Active
                                </div>
                            </div>

                            {/* Content: List of "Detected" Threads */}
                            <div className="p-4 space-y-3 pb-20">
                                {liveThreads.map((thread, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.2 }}
                                        className="group flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 hover:border-brand-200 dark:hover:border-brand-900 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-brand-50 dark:bg-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        {/* Icon */}
                                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 z-10 text-orange-600">
                                            <span className="font-bold text-xs">r/</span>
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0 z-10">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-[10px] font-bold text-gray-500 uppercase">{thread.r} • {thread.time}</span>
                                                <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold border ${thread.intent === 'High' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-yellow-50 text-yellow-700 border-yellow-100'}`}>
                                                    {thread.intent} Intent
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate group-hover:text-brand-600 transition-colors">
                                                {thread.title}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Simulated "New Match" Toast */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 4, duration: 4 }}
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold z-30 w-max max-w-[90%]"
                                >
                                    <AlertCircle className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                                    <span className="truncate">New High-Intent Opportunity Found!</span>
                                </motion.div>
                            </div>

                            {/* Faded bottom to imply scroll */}
                            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
                        </motion.div>

                        {/* Floating Stats Card - Parallax Element */}
                        <motion.div
                            style={{
                                y: useTransform(springY, [-0.5, 0.5], [-20, 20]),
                                x: useTransform(springX, [-0.5, 0.5], [-10, 10])
                            }}
                            className="absolute -right-6 -bottom-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 w-48 z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span className="text-xs font-bold text-gray-500">Traffic Potential</span>
                            </div>
                            <div className="text-2xl font-black text-gray-900 dark:text-white">12.5k</div>
                            <div className="text-[10px] text-green-600 font-medium">+142% vs last week</div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
