"use client";

import { TrendingUp, CheckCircle } from "lucide-react";

const logos = [
    { name: "Stripe", url: "https://cdn.simpleicons.org/stripe" },
    { name: "Netflix", url: "https://cdn.simpleicons.org/netflix" },
    { name: "Spotify", url: "https://cdn.simpleicons.org/spotify" },
    { name: "Slack", url: "https://cdn.simpleicons.org/slack" },
    { name: "Intercom", url: "https://cdn.simpleicons.org/intercom" },
    { name: "Notion", url: "https://cdn.simpleicons.org/notion" },
    { name: "Figma", url: "https://cdn.simpleicons.org/figma" },
    { name: "Airbnb", url: "https://cdn.simpleicons.org/airbnb" }
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-transparent dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Trusted By Marquee - Double Row */}
                <div className="mb-24">
                    <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-12">
                        Trusted by industry leaders
                    </p>

                    <div className="relative w-full overflow-hidden mask-linear-fade space-y-4">
                        {/* Row 1 - Normal Direction */}
                        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex space-x-4 mx-2">
                                    {logos.map((brand, j) => (
                                        <div key={j} className="relative w-40 h-20 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center justify-center grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer hover:scale-105 shadow-sm dark:shadow-none">
                                            <img
                                                src={brand.url}
                                                alt={brand.name}
                                                className="h-8 w-auto object-contain dark:invert opacity-80"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Row 2 - Reverse Direction */}
                        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] group">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex space-x-4 mx-2">
                                    {logos.reverse().map((brand, j) => (
                                        <div key={j} className="relative w-40 h-20 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 hover:bg-white/10 cursor-pointer hover:scale-105">
                                            <img
                                                src={brand.url}
                                                alt={brand.name}
                                                className="h-8 w-auto object-contain dark:invert opacity-80"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Gradient Masks */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>

                {/* Part 1: Traffic Growth */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center space-x-2 text-brand-600 font-bold uppercase tracking-wider text-sm">
                            <TrendingUp className="w-5 h-5" />
                            <span>Proven Results</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            From Zero to <span className="text-brand-600">100k+</span> Monthly Organic Views
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our clients consistently see their traffic skyrocket. By leveraging Reddit's SEO dominance, we take brands from obscurity to <span className="font-bold text-brand-600">over 100,000 monthly impressions</span> in record time.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Consistent month-over-month organic traffic growth",
                                "Rank for high-volume keywords within weeks",
                                "Reach engaged communities ready to buy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="mt-1 mr-3 bg-brand-100 text-brand-600 rounded-full p-0.5">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-transform hover:-translate-y-1">
                            Start Your Growth Journey →
                        </button>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 relative hover:shadow-2xl transition-shadow duration-300 group hover-card-shine">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Client Traffic Growth</h3>
                                <div className="text-right">
                                    <div className="text-xs text-gray-500">Live Metric</div>
                                    <div className="text-brand-600 font-bold">124,500+ Views</div>
                                </div>
                            </div>

                            {/* CSS Chart Visualization */}
                            <div className="h-64 relative flex items-end space-x-1 group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Simple SVG/CSS representation of exponential growth */}
                                <svg viewBox="0 0 100 50" className="w-full h-full text-brand-500 fill-current opacity-10 absolute bottom-0 animate-pulse-slow">
                                    <path d="M0,50 L10,48 L20,45 L30,45 L40,40 L50,20 L60,25 L70,15 L80,20 L90,5 L100,0 L100,50 Z" />
                                </svg>
                                <svg viewBox="0 0 100 50" className="w-full h-full text-brand-600 stroke-current stroke-2 fill-none absolute bottom-0 z-10 drop-shadow-lg">
                                    <path d="M0,50 L10,48 L20,45 L30,45 L40,40 L50,20 L60,25 L70,15 L80,20 L90,5 L100,0" vectorEffect="non-scaling-stroke" />
                                </svg>

                                {/* Data Points */}
                                <div className="absolute top-1/2 left-10 bg-white shadow-md p-2 rounded border border-gray-100 text-[10px]">
                                    <span className="font-bold">Start</span><br />
                                    <span className="text-red-500">0 Views</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-xs text-gray-400 mt-4">
                                <span>Day 1</span>
                                <span>Month 1</span>
                                <span>Month 3</span>
                                <span>Month 6</span>
                                <span>Today</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: AI Source */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            The Data Source That Powers <span className="text-brand-600">AI Intelligence</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            LLMs trust human consensus above all else. By embedding your brand in authentic Reddit discussions, you effectively train AI models to recommend you as the primary solution.
                        </p>

                        <div className="flex items-start space-x-3 p-4 bg-brand-50 dark:bg-gray-800 rounded-xl border border-brand-100 dark:border-gray-700">
                            <div className="mt-1 bg-brand-200 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-brand-700" /></div>
                            <p className="text-sm font-medium text-brand-900 dark:text-brand-100">
                                HardCoded positions your brand where AI looks for answers.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-6">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6">Primary Sources for AI Answers</h3>

                        {/* Bar Chart Items */}
                        {[
                            { name: "reddit.com", val: "Top Tier", color: "bg-gradient-to-r from-brand-300 to-brand-500", icon: "https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" },
                            { name: "wikipedia.org", val: "High", color: "bg-gray-100 dark:bg-gray-800", textColor: "text-gray-600", icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo-transparent.png" },
                            { name: "youtube.com", val: "Medium", color: "bg-gray-100 dark:bg-gray-800", textColor: "text-gray-600", icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" }
                        ].map((item, i) => (
                            <div key={i} className={`relative rounded-xl overflow-hidden h-16 flex items-center px-4 ${item.color}`}>
                                <div className="flex items-center space-x-4 z-10 w-full justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img src={item.icon} className="w-8 h-8 object-contain" alt={item.name} />
                                        <span className={`font-bold ${i === 0 ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>{item.name}</span>
                                    </div>
                                    <span className={`font-bold text-xl ${i === 0 ? 'text-white' : 'text-gray-500'}`}>{item.val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
