"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "HardCoded completely transformed our organic acquisition. We went from zero Reddit presence to 40% of our leads coming from organic Reddit threads in just 3 months.",
        author: "Sarah Chen",
        role: "CTO at TechFlow",
        initials: "SC",
        color: "from-blue-500 to-cyan-500",
        metric: "40% leads from Reddit",
    },
    {
        quote: "I was skeptical about Reddit marketing, but the ROI speaks for itself. Our CAC dropped by 60% compared to paid ads. The threads keep generating traffic months later.",
        author: "Michael Ross",
        role: "Founder of StartupX",
        initials: "MR",
        color: "from-purple-500 to-pink-500",
        metric: "60% lower CAC",
    },
    {
        quote: "The AI targeting is incredible. It finds threads I would never have found manually, and the responses feel genuinely helpful — not spammy. Our brand reputation actually improved.",
        author: "Jessica Lee",
        role: "VP Marketing at DataSystems",
        initials: "JL",
        color: "from-green-500 to-emerald-500",
        metric: "Brand reputation improved",
    },
    {
        quote: "We tried doing Reddit marketing manually for months. HardCoded automates everything and does it 10x better. The aged account network is a game-changer for credibility.",
        author: "Alex Thompson",
        role: "Growth Lead at CloudScale",
        initials: "AT",
        color: "from-brand-500 to-orange-500",
        metric: "10x more efficient",
    },
    {
        quote: "Within 2 weeks, three of our Reddit-sourced comments ranked on page 1 of Google. The compounding effect of SEO + Reddit is exactly what HardCoded promises.",
        author: "Priya Sharma",
        role: "CEO at NeuralPath",
        initials: "PS",
        color: "from-indigo-500 to-violet-500",
        metric: "Page 1 Google rankings",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-32 bg-gray-50/50 dark:bg-black overflow-hidden relative border-t border-gray-200 dark:border-white/10">
            {/* Background ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/20 dark:bg-brand-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cyan-500">Growth Teams</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. See the results SaaS founders are achieving with HardCoded.
                    </motion.p>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative h-[450px] w-full flex items-center justify-center perspective-[1200px]">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => {
                            // Determine relative position (-2, -1, 0, 1, 2)
                            let offset = index - currentIndex;
                            if (offset > 2) offset -= testimonials.length;
                            if (offset < -2) offset += testimonials.length;

                            if (Math.abs(offset) > 2) return null; // Hide elements too far away

                            const isCenter = offset === 0;
                            const zIndex = 10 - Math.abs(offset);
                            const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.15);
                            const x = offset * 250; // Horizontal spread
                            const rotateY = offset * -15; // Rotate towards center
                            const opacity = Math.max(0, 1 - Math.abs(offset) * 0.3);

                            return (
                                <motion.div
                                    key={testimonial.author}
                                    initial={false}
                                    animate={{
                                        x,
                                        scale,
                                        zIndex,
                                        opacity,
                                        rotateY,
                                        filter: isCenter ? 'blur(0px)' : 'blur(4px)'
                                    }}
                                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                                    className="absolute w-full max-w-lg cursor-grab active:cursor-grabbing pb-8"
                                    onClick={() => setCurrentIndex(index)}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(e, { offset: dragOffset }) => {
                                        if (dragOffset.x < -50) next();
                                        else if (dragOffset.x > 50) prev();
                                    }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className={`relative p-8 md:p-10 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl transition-all duration-300
                                        ${isCenter
                                            ? 'bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-white/20'
                                            : 'bg-white/50 dark:bg-gray-900/40 border-gray-100 dark:border-white/5'
                                        }`}
                                    >
                                        <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-100 dark:text-brand-900/20 z-0" />

                                        <div className="relative z-10">
                                            <div className="flex space-x-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-5 w-5 ${isCenter ? 'text-brand-500 fill-brand-500' : 'text-gray-300 dark:text-gray-700 fill-current'}`} />
                                                ))}
                                            </div>

                                            <p className={`text-lg md:text-xl font-medium leading-relaxed mb-8 ${isCenter ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-lg border border-white/20`}>
                                                        {testimonial.initials}
                                                    </div>
                                                    <div>
                                                        <h4 className={`font-bold ${isCenter ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-500'}`}>
                                                            {testimonial.author}
                                                        </h4>
                                                        <p className={`text-sm ${isCenter ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-600'}`}>
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Metric floating badge */}
                                            {isCenter && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="absolute -bottom-5 right-4 sm:-right-4 px-5 py-2.5 rounded-xl text-sm font-bold shadow-xl bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-black border border-gray-700 dark:border-white"
                                                >
                                                    📈 {testimonial.metric}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Pulse Glow Behind Active Card */}
                                    {isCenter && (
                                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-brand-500 to-cyan-500 opacity-20 blur-2xl -z-10 mix-blend-screen pulse-slow"></div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-8 mt-4 relative z-20">
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-brand-500 hover:text-brand-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all shadow-lg hover:scale-110 active:scale-95 group"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${i === currentIndex
                                    ? "w-10 bg-gradient-to-r from-brand-500 to-brand-400"
                                    : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-brand-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-brand-500 hover:text-brand-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all shadow-lg hover:scale-110 active:scale-95 group"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
