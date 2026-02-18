"use client";

import { Search, Sparkles, TrendingUp, BarChart, Users, Share2, Activity } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-20 bg-transparent dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* Row 1: The Core Value Props (3 Cols) */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute w-[90%] bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 top-8 left-1/2 -translate-x-1/2">
                                <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-gray-800 pb-2 mb-2">
                                    <Search className="h-4 w-4 text-gray-400" />
                                    <div className="h-2 w-32 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-8 bg-blue-50 dark:bg-blue-900/20 rounded w-full"></div>
                                    <div className="h-2 bg-gray-50 dark:bg-gray-800 rounded w-3/4"></div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            High-Authority Thread Scout
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Don't guess where your customers are. Our engine identifies high-ranking threads that are already pulling in qualified search traffic.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute w-[80%] bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">r/</div>
                                        <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </div>
                                    <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full font-bold">Positive</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Real-Time Sentiment Radar
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Instantly detect when your brand or competitors are mentioned. Jump into the conversation precisely when purchase intent is highest.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden">
                            <div className="relative">
                                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 relative">
                                    <Sparkles className="h-8 w-8 text-brand-500" />
                                </div>
                                <div className="absolute inset-0 bg-brand-400 blur-xl opacity-40"></div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Opportunity Discovery Engine
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Uncover fresh discussions where users are actively asking for a solution like yours, before your competitors even know they exist.
                        </p>
                    </div>
                </div>

                {/* Row 2: Analytics & Insights (3 Cols) */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 4: Analytics */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="h-48 bg-orange-50 dark:bg-gray-800 rounded-2xl mb-8 p-4 relative overflow-hidden">
                            <div className="grid grid-cols-2 gap-3 h-full">
                                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm flex flex-col justify-center">
                                    <div className="text-xs text-gray-500 mb-1">Total Upvotes</div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">487</div>
                                    <div className="text-[10px] text-green-500 font-bold">▲ +4.6%</div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm flex flex-col justify-center">
                                    <div className="text-xs text-gray-500 mb-1">Total Impressions</div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">261k</div>
                                    <div className="text-[10px] text-green-500 font-bold">▲ +12.3%</div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Deep-Dive Analytics
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Stop guessing. Track exact metrics on comment visibility, upvote velocity, and traffic conversion in one dashboard.
                        </p>
                    </div>

                    {/* Card 5: Subreddit Insights */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="h-48 bg-orange-50 dark:bg-gray-800 rounded-2xl mb-8 p-4 relative overflow-hidden flex flex-col">
                            <div className="bg-white dark:bg-gray-900 rounded-t-lg p-2 border-b border-gray-100 text-[10px] font-bold text-gray-400 flex justify-between">
                                <span>Subreddit</span>
                                <span>Upvotes</span>
                            </div>
                            <div className="bg-white dark:bg-gray-900 flex-1 p-2 space-y-2">
                                {['r/SEO', 'r/Marketing', 'r/SaaS'].map((sub, i) => (
                                    <div key={i} className="flex justify-between items-center text-[10px]">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{sub}</span>
                                        <span className="font-mono text-gray-500">{1000 - i * 200}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Community Intelligence
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Navigate subreddit rules with confidence. Know exactly where your links are welcome and how to engage without being flagged.
                        </p>
                    </div>

                    {/* Card 6: Unlimited Onboarding */}
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden text-white relative">
                        <div className="h-48 relative mb-8 flex items-center justify-center">
                            {/* Visual node graph */}
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <Share2 className="h-6 w-6 text-orange-500" />
                                </div>
                                {/* Orbiting nodes */}
                                <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                                    <div className="absolute -top-8 -left-8 bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 text-xs">Client 1</div>
                                    <div className="absolute -bottom-8 -right-8 bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 text-xs">Client 2</div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-150"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Multi-Client Command Center
                        </h3>
                        <p className="text-orange-50 text-sm leading-relaxed">
                            Built for scale. Manage unlimited client profiles and campaigns from a centralized, streamlined interface.
                        </p>
                    </div>
                </div>

                {/* Row 3: Deep Dives (2 Cols) */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Card 7: Smart Comment Boosting */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                                Organic Visibility
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            Precision Engagement Algorithm
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Our algorithm helps your contributions rise naturally to the top, ensuring maximum visibility without tripping spam filters.
                        </p>
                        <div className="w-full h-32 bg-orange-50 dark:bg-gray-800 rounded-xl relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent"></div>
                            <div className="p-4 flex items-center space-x-3">
                                <div className="bg-white p-2 rounded shadow-sm">
                                    <TrendingUp className="h-5 w-5 text-green-500" />
                                </div>
                                <div className="h-2 bg-gray-200 w-24 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 8: Rank on AI LLMs */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">
                                AI SEO
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            Dominate AI Search Results
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Secure your place in the future of search. By ranking on Reddit, you automatically become a trusted source for ChatGPT and Gemini.
                        </p>
                        <div className="w-full h-32 bg-purple-50 dark:bg-gray-800 rounded-xl relative overflow-hidden p-4">
                            <div className="flex space-x-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">AI</div>
                                <div className="space-y-2 flex-1 pt-1">
                                    <div className="h-2 bg-purple-200 dark:bg-purple-900 w-full rounded"></div>
                                    <div className="h-2 bg-purple-200 dark:bg-purple-900 w-3/4 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
