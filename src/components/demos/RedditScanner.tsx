"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, ArrowRight, MessageSquare, ThumbsUp, TrendingUp, AlertCircle, CheckCircle2, Radar } from "lucide-react";
import { MOCK_DATA, RedditThread } from "@/lib/mock-data";

export default function RedditScanner() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState<'idle' | 'scanning' | 'results'>('idle');
    const [results, setResults] = useState<RedditThread[]>([]);

    const handleScan = () => {
        if (!query.trim()) return;

        setStatus('scanning');
        setResults([]); // Clear previous results

        // Simulate API delay
        setTimeout(() => {
            const lowerQuery = query.toLowerCase();
            // Simple keyword matching from mock data keys
            const key = Object.keys(MOCK_DATA).find(k => lowerQuery.includes(k)) || "default";
            setResults(MOCK_DATA[key]);
            setStatus('results');
        }, 2000);
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">

            {/* Background Decoration: Grid & Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl"></div>
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-900 dark:text-gray-100" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Live Demo</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    See What You're <span className="text-brand-600">Missing</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Enter your niche to instantly scan Reddit for high-intent discussions happening right now.
                </motion.p>
            </div>

            {/* Interactive Scanner Card */}
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-800 overflow-hidden ring-1 ring-black/5"
                >

                    {/* Search Bar Area */}
                    <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/20">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1 group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                                    placeholder="Try 'SaaS', 'Crypto', 'Fitness', 'Marketing'..."
                                    className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm text-lg outline-none"
                                />
                            </div>
                            <button
                                onClick={handleScan}
                                disabled={status === 'scanning' || !query}
                                className={`px-8 py-4 rounded-xl font-bold text-white shadow-xl transition-all flex items-center justify-center space-x-2 min-w-[160px] relative overflow-hidden group
                                    ${status === 'scanning' || !query
                                        ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed shadow-none'
                                        : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:to-brand-600 hover:-translate-y-0.5 shadow-brand-500/30'
                                    }`}
                            >
                                {status === 'scanning' ? (
                                    <>
                                        <Loader2 className="animate-spin h-5 w-5" />
                                        <span>Scanning...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="relative z-10">Scan Now</span>
                                        <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                        {/* Dynamic shine effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="min-h-[450px] bg-gray-50/30 dark:bg-gray-900/50 relative p-1">
                        <AnimatePresence mode="wait">

                            {/* State: Idle with Pulsing Radar */}
                            {status === 'idle' && (
                                <motion.div
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 overflow-hidden"
                                >
                                    {/* Pulsing Radar Effect */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                                        <motion.div
                                            animate={{ scale: [0.8, 1.2], opacity: [0.3, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                                            className="absolute w-[300px] h-[300px] border border-brand-500 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ scale: [0.8, 1.5], opacity: [0.3, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                            className="absolute w-[300px] h-[300px] border border-brand-500 rounded-full"
                                        />
                                    </div>

                                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-brand-500/10 z-10 relative">
                                        <Radar className="h-10 w-10 text-brand-500 animate-pulse" />
                                        <div className="absolute inset-0 bg-brand-500/10 rounded-full animate-ping opacity-20"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">Ready to Scan</h3>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-sm relative z-10">
                                        Our engine analyzes thousands of subreddits in real-time to find your customers.
                                    </p>
                                </motion.div>
                            )}

                            {/* State: Scanning Animation */}
                            {status === 'scanning' && (
                                <motion.div
                                    key="scanning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                            className="absolute inset-0 bg-brand-500 rounded-full opacity-20"
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                            className="absolute inset-0 bg-brand-400 rounded-full opacity-20"
                                        />
                                        <div className="relative w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center z-10 ring-4 ring-white dark:ring-gray-900">
                                            <Loader2 className="h-10 w-10 text-brand-600 animate-spin" />
                                        </div>
                                    </div>
                                    <div className="mt-10 space-y-3 text-center z-10">
                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="text-brand-600 font-mono text-sm font-bold tracking-widest"
                                        >
                                            CONNECTING TO REDDIT API...
                                        </motion.div>
                                        <p className="text-gray-400 text-sm">Analyzing thread velocity and sentiment...</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* State: Results */}
                            {status === 'results' && (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 space-y-4"
                                >
                                    <div className="flex justify-between items-center mb-6 px-2">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            <span>Scan Complete</span>
                                        </div>
                                        <div className="text-xs font-mono text-gray-400 uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                            Found {results.length} High-Intent Threads
                                        </div>
                                    </div>

                                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
                                        {results.map((thread, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl p-5 hover:shadow-lg hover:border-brand-200 dark:hover:border-brand-800 transition-all cursor-pointer group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                                <div className="flex justify-between items-start mb-3 relative z-10">
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-[10px] font-bold px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                                                            {thread.subreddit}
                                                        </span>
                                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1.5
                                                            ${thread.status === 'Hot' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                                            <TrendingUp className="h-3 w-3" />
                                                            <span>{thread.status}</span>
                                                        </span>
                                                    </div>
                                                    <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border flex items-center
                                                        ${thread.intent === 'High'
                                                            ? 'bg-green-50 text-green-700 border-green-200'
                                                            : 'bg-yellow-50 text-yellow-700 border-yellow-200'}`}>
                                                        {thread.intent} Intent
                                                    </div>
                                                </div>

                                                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-3 group-hover:text-brand-600 transition-colors line-clamp-1 relative z-10">
                                                    {thread.title}
                                                </h4>

                                                <div className="flex items-center justify-between text-sm text-gray-500 relative z-10">
                                                    <div className="flex space-x-5">
                                                        <div className="flex items-center space-x-1.5">
                                                            <ThumbsUp className="h-4 w-4 text-gray-400 group-hover:text-brand-500 transition-colors" />
                                                            <span className="font-medium">{thread.upvotes}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1.5">
                                                            <MessageSquare className="h-4 w-4 text-gray-400 group-hover:text-brand-500 transition-colors" />
                                                            <span className="font-medium">{thread.comments}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-brand-600 font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 flex items-center text-xs uppercase tracking-wide">
                                                        Generate Reply <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                                        <button className="text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline inline-flex items-center">
                                            Unlock full analysis & automation <ArrowRight className="ml-1 h-3 w-3" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex justify-center space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">Trusted by modern growth teams</p>
                </motion.div>
            </div>
        </section>
    );
}
