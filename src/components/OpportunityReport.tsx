"use client";

import { FileText } from "lucide-react";

export default function OpportunityReport() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Top Section: Header & Description */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                        Free Reddit
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Opportunity Report
                    </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed text-left md:text-right">
                    Enter your website and HardCoded will provide you a free report showing you Reddit threads that get traffic and where we could mention your brand using our trusted accounts.
                </p>
            </div>

            {/* Orange Banner Section */}
            <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl relative overflow-hidden shadow-2xl">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 pt-12 pb-0 px-8 md:px-12 flex flex-col items-center">

                    {/* Centered Heading */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 max-w-2xl leading-tight">
                        See Which Reddit Threads Are Already <br />
                        <span className="text-brand-100">Ranking in Your Niche</span>
                    </h3>

                    {/* Centered Input Form */}
                    <div className="w-full max-w-xl bg-white rounded-2xl p-1.5 flex flex-col sm:flex-row gap-2 shadow-2xl mb-8 transform hover:scale-[1.01] transition-transform duration-300 relative z-20">
                        <div className="flex-1 flex items-center px-4 relative">
                            {/* Globe Icon */}
                            <svg className="w-5 h-5 text-gray-400 mr-3 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 9-9s9 9 9 9z"></path></svg>
                            <input
                                type="url"
                                placeholder="Enter your website URL"
                                className="w-full py-2.5 text-gray-900 border-none outline-none bg-transparent placeholder-gray-500 text-sm"
                            />
                        </div>
                        <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md text-sm whitespace-nowrap">
                            Generate Free Report
                        </button>
                    </div>

                    {/* Trust Text */}
                    <div className="flex items-center space-x-2 text-xs text-white/90 font-medium mb-8">
                        <FileText className="w-3.5 h-3.5" />
                        <span>No credit card required. Takes less than 30 seconds.</span>
                    </div>

                    {/* Visual Mockups Container */}
                    <div className="relative w-full h-[200px] md:h-[280px] flex justify-between items-end pointer-events-none overflow-hidden md:overflow-visible">

                        {/* Left Mockup: Detailed Desktop Card */}
                        <div className="hidden md:block absolute -bottom-12 left-0 w-72 bg-white rounded-t-xl shadow-2xl border border-gray-100 p-4 transform transition-transform duration-500 origin-bottom-left z-10 hover:-translate-y-2">
                            <div className="flex items-center space-x-1.5 mb-3 border-b border-gray-100 pb-2">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-500 shadow-sm flex-shrink-0"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-2.5 bg-gray-100 rounded w-3/4"></div>
                                        <div className="h-2 bg-gray-50 rounded w-full"></div>
                                        <div className="h-2 bg-gray-50 rounded w-5/6"></div>
                                    </div>
                                </div>
                                <div className="bg-red-50 p-2.5 rounded-lg border border-red-100 mt-2">
                                    <div className="text-[10px] text-red-800 font-bold mb-1">What's the best marketing agency?</div>
                                    <div className="h-1.5 bg-red-200 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Mockup: Detailed Phone */}
                        <div className="absolute -bottom-24 -right-8 md:-right-4 w-60 bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl p-1.5 transform transition-transform duration-500 origin-bottom-right z-10 hover:-translate-y-2">
                            <div className="w-full h-[350px] bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20"></div>
                                <div className="px-4 py-3 border-b border-gray-200 bg-white pt-8">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-black rounded-full text-white flex items-center justify-center text-[10px] font-bold">GPT</div>
                                        <div className="text-[10px] font-bold">ChatGPT</div>
                                    </div>
                                </div>
                                <div className="p-3 space-y-3 bg-gray-50 flex-1">
                                    <div className="bg-brand-500 text-white p-3 rounded-2xl rounded-tr-none text-[10px] ml-auto max-w-[90%] shadow-sm">
                                        Hey, do you know any tool that can help with Reddit marketing?
                                    </div>
                                    <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-none text-[10px] mr-auto max-w-[90%] shadow-sm border border-gray-100">
                                        Reddit is great but hard to manage manually. Check out <span className="font-bold text-brand-600">HardCoded</span>. It automates everything...
                                    </div>
                                    <div className="bg-brand-50 text-brand-700 p-2 rounded-xl text-[10px] text-center text-xs font-medium">
                                        ✨ Recommended Solution
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
