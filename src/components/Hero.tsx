"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Play, Star } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Subtle parallax for background blobs
    const backgroundX = useTransform(springX, [-0.5, 0.5], ["2%", "-2%"]);
    const backgroundY = useTransform(springY, [-0.5, 0.5], ["2%", "-2%"]);

    // Subtle parallax for the main content card to give it depth
    const cardRotateX = useTransform(springY, [-0.5, 0.5], [1, -1]);
    const cardRotateY = useTransform(springX, [-0.5, 0.5], [-1, 1]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position to -0.5 to 0.5 based on window center
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden">
            {/* Background Gradients with Parallax */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], ["5%", "-5%"]), y: useTransform(springY, [-0.5, 0.5], ["5%", "-5%"]) }}
                    className="absolute top-0 right-0 w-3/4 h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50/50 via-transparent to-transparent dark:from-brand-900/10 opacity-70"
                ></motion.div>
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]), y: useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]) }}
                    className="absolute bottom-0 left-0 w-1/2 h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-50/30 via-transparent to-transparent dark:from-brand-900/5 opacity-50"
                ></motion.div>
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

                        {/* Trusted Logos Strip */}
                        <div className="pt-10 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Trusted By</p>
                            <div className="flex items-center space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Using text for now to match style, but styled more professionally */}
                                <span className="text-lg font-black font-sans text-gray-400 hover:text-indigo-600">Acme</span>
                                <span className="text-lg font-bold font-serif text-gray-400 hover:text-emerald-600">Globex</span>
                                <span className="text-lg font-extrabold font-mono text-gray-400 hover:text-blue-600">Soylent</span>
                                <span className="text-lg font-bold text-gray-400 hover:text-brand-600 italic">Initech</span>
                                <span className="text-lg font-semibold font-sans text-gray-400 hover:text-purple-600 tracking-tighter">Umbrella</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Visual/Video */}
                    <motion.div
                        className="flex-1 relative perspective-1000"
                        style={{
                            rotateX: cardRotateX,
                            rotateY: cardRotateY,
                        }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group cursor-pointer aspect-video bg-gray-900 hover:shadow-brand-500/20 transition-all duration-500">
                            {/* Placeholder for Video Thumbnail */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/90 via-gray-900/80 to-black/60 z-10"></div>

                            {/* Texture/Pattern Overlay */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10 mix-blend-overlay"></div>

                            {/* Simulated Video Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center p-6">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-2xl ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-600/90 group-hover:ring-brand-400">
                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                </div>
                                <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter drop-shadow-2xl">
                                    Scale Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-500">Organic Growth</span>
                                </h3>
                                <p className="text-white/70 mt-3 font-medium tracking-wide text-sm">See the engine in action</p>
                            </div>

                            {/* Decorative Floating Nodes */}
                            <div className="absolute bottom-10 left-10 flex space-x-4 z-10">
                                {/* Icon 1: GPT */}
                                <motion.div
                                    animate={{ y: [-5, 5] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                    }}
                                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg"
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" className="w-6 h-6" alt="GPT" />
                                </motion.div>

                                {/* Icon 2: Brand Node */}
                                <motion.div
                                    animate={{ y: [-8, 8] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    }}
                                    className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center shadow-lg"
                                >
                                    <div className="w-6 h-6 rounded-full bg-brand-500"></div>
                                </motion.div>

                                {/* Icon 3: Reddit */}
                                <motion.div
                                    animate={{ y: [-6, 6] }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shadow-lg"
                                >
                                    <img src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" className="w-6 h-6" alt="Reddit" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Arrow pointing to video - Keep CSS animation for simplicity here as it's separate */}
                        <div className="absolute -bottom-12 -left-12 hidden lg:block animate-fade-in [animation-delay:800ms]">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-400 transform rotate-12">
                                <path d="M10 90 Q 50 10 90 50" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" fill="none" />
                                <path d="M90 50 L 80 45 M 90 50 L 85 60" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded shadow-sm text-xs text-brand-600 font-bold -rotate-12 border border-brand-100">
                                Watch this<br />quick video
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
