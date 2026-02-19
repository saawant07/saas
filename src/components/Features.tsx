"use client";

import { Search, Sparkles, TrendingUp, BarChart, Users, Share2, Activity, ShieldCheck, Zap } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

export default function Features() {
    return (
        <section id="features" className="py-24 bg-transparent dark:bg-black relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Deep-Scan <span className="text-brand-600">Intelligence Matrix</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Beyond basic listening. We build a complete operational map of your niche's ecosystem.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Subreddit Heatmap (Large, Col-span-4) */}
                    <SpotlightCard className="md:col-span-4 rounded-3xl p-8 bg-white dark:bg-white/5 backdrop-blur-xl border-gray-200 dark:border-white/10 group overflow-hidden shadow-sm dark:shadow-none">
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <Activity className="h-5 w-5 text-brand-500" />
                                    <span className="text-sm font-mono text-brand-600 dark:text-brand-400 uppercase tracking-widest">Live Traffic Heatmap</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Community Intelligence</h3>
                                <p className="text-gray-600 dark:text-gray-400 max-w-md">Identify high-velocity discussions across 50,000+ niche communities in real-time.</p>
                            </div>

                            {/* Visual Grid */}
                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {['r/SaaS', 'r/Marketing', 'r/Entrepreneur', 'r/Startups', 'r/TechSEO', 'r/Growth', 'r/SideProject', 'r/SmallBiz'].map((sub, i) => (
                                    <div key={i} className="bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-100 dark:border-white/5 rounded-lg p-3 transition-colors flex flex-col justify-between group/item cursor-default">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{sub}</span>
                                            <div className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-green-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                                        </div>
                                        <div className="text-[10px] text-gray-500 flex justify-between">
                                            <span>Active</span>
                                            <span className="text-brand-600 dark:text-brand-400 group-hover/item:text-brand-500 dark:group-hover/item:text-brand-300 transition-colors">{850 - i * 80}+</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Background Gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
                    </SpotlightCard>

                    {/* Card 2: Aged Account Status (Col-span-2) */}
                    <SpotlightCard className="md:col-span-2 rounded-3xl p-8 bg-white dark:bg-white/5 backdrop-blur-xl border-gray-200 dark:border-white/10 flex flex-col justify-between group shadow-sm dark:shadow-none">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <ShieldCheck className="h-5 w-5 text-brand-500" />
                                <span className="text-sm font-mono text-brand-600 dark:text-brand-400 uppercase tracking-widest">Authority</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Aged Account Access</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Skip the "Account Too New" filter.</p>
                        </div>

                        <div className="mt-6 bg-gray-50 dark:bg-black/40 rounded-xl p-4 border border-gray-100 dark:border-white/5 relative overflow-hidden">
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 border border-white/50 dark:border-white/10"></div>
                                <div>
                                    <div className="h-2.5 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-1.5"></div>
                                    <div className="h-2 w-12 bg-gray-300 dark:bg-gray-800 rounded"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <div className="px-2 py-1 bg-brand-50 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 rounded border border-brand-200 dark:border-brand-500/20">Top 1% Karma</div>
                                <span className="text-gray-500">5y 2m</span>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Card 3: LLM Citation Score (Col-span-2) */}
                    <SpotlightCard className="md:col-span-2 rounded-3xl p-8 bg-white dark:bg-white/5 backdrop-blur-xl border-gray-200 dark:border-white/10 flex flex-col justify-between shadow-sm dark:shadow-none">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                <span className="text-sm font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest">AI SEO</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">LLM Trust Score</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Rank where ChatGPT looks.</p>
                        </div>

                        <div className="mt-6 flex items-center justify-center relative">
                            <div className="text-5xl font-bold text-gray-900 dark:text-white tracking-tighter">98<span className="text-2xl text-gray-400 dark:text-gray-500">%</span></div>
                            <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 blur-2xl rounded-full"></div>
                        </div>
                        <div className="text-center text-xs text-purple-700 dark:text-purple-300 mt-2 font-mono">High Confidence Verification</div>
                    </SpotlightCard>

                    {/* Card 4: Opportunity Discovery (Large, Col-span-4) */}
                    <SpotlightCard className="md:col-span-4 rounded-3xl p-8 bg-white dark:bg-white/5 backdrop-blur-xl border-gray-200 dark:border-white/10 relative overflow-hidden shadow-sm dark:shadow-none">
                        <div className="grid md:grid-cols-2 gap-8 h-full items-center relative z-10">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <Zap className="h-5 w-5 text-yellow-500" />
                                    <span className="text-sm font-mono text-yellow-600 dark:text-yellow-500 uppercase tracking-widest">Instant Alerts</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Opportunity Discovery Engine</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">Uncover fresh discussions where users are actively asking for a solution like yours, before your competitors even know they exist.</p>
                                <div className="flex items-center text-sm text-gray-500 space-x-4">
                                    <span className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>Real-time</span>
                                    <span className="flex items-center"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></div>High Intent</span>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-black/40 rounded-xl border border-gray-100 dark:border-white/5 p-4 relative">
                                {/* Simulated Chat Items */}
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3 opacity-50">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                        <div className="space-y-1">
                                            <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-2 w-48 bg-gray-300 dark:bg-gray-800 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 bg-white dark:bg-white/5 p-3 rounded-lg border border-brand-200 dark:border-brand-500/30 relative shadow-sm dark:shadow-none">
                                        <div className="absolute -left-1 top-4 w-1 h-8 bg-brand-500 rounded-full"></div>
                                        <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                                        <div className="space-y-1.5">
                                            <div className="h-2 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
                                            <div className="text-xs text-gray-600 dark:text-gray-300">"Does anyone know an alternative to [Competitor] that supports..."</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 opacity-50">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                        <div className="space-y-1">
                                            <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-2 w-40 bg-gray-300 dark:bg-gray-800 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                </div>
            </div>
        </section>
    );
}
