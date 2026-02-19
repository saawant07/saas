"use client";

import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function CTA() {
    return (
        <section className="py-32 bg-white dark:bg-black relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-100 dark:border-gray-800">
            {/* Background Beams */}
            <BackgroundBeams className="opacity-40" />

            {/* Subtle radial gradient background - Restored for theme */}
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 bg-brand-500/20 dark:bg-brand-900/10 -z-10 rounded-full blur-[100px] w-[600px] h-[600px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                    Stop Chasing Leads. <br />
                    <span className="text-brand-600 dark:text-brand-500">Let Them Find You.</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join the 500+ SaaS founders automating their Reddit growth with HardCoded.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <MagneticButton className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95 group">
                        Start Growth Engine
                    </MagneticButton>

                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors px-6 py-4">
                        View Live Demo
                    </button>
                </div>

                <p className="mt-12 text-sm text-gray-400 dark:text-gray-500 font-medium">
                    No credit card required • 14-day free trial • Cancel anytime
                </p>
            </div>
        </section>
    );
}
