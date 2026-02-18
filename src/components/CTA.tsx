"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-transparent dark:bg-black relative overflow-hidden">
            {/* Subtle radial gradient background */}
            <div className="absolute inset-0 top-1/2 bg-brand-50/50 dark:bg-brand-900/10 -z-10 rounded-full blur-3xl scale-150"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                    Stop Chasing Leads. <span className="text-brand-600">Let Them Find You.</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    Join the 500+ SaaS founders automating their Reddit growth with HardCoded.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                        Start Your Free Growth Engine
                    </button>
                    <button className="w-full sm:w-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-gray-50 dark:hover:bg-gray-800">
                        View Live Demo
                    </button>
                </div>

                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                    No credit card required • 14-day free trial • Cancel anytime
                </p>
            </div>
        </section>
    );
}
