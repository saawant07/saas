"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, X } from "lucide-react";

export function DarkModePrompt() {
    const [isVisible, setIsVisible] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Only show if currently in light mode
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");

        if (!isDark) {
            // Show after 3 seconds to let them settle in
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const enableDarkMode = () => {
        setIsVisible(false);
        setTheme("dark");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");

        // Dispatch custom event if ThemeToggle wants to listen
        window.dispatchEvent(new Event("theme-changed"));
    };

    return (
        <AnimatePresence>
            {isVisible && theme === "light" && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 max-w-sm"
                >
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-5 relative overflow-hidden ring-1 ring-black/5">
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/20 to-purple-500/20 blur-xl -z-10 rounded-3xl opacity-50"></div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 border border-brand-100 dark:border-brand-900">
                                <Moon className="w-5 h-5 text-brand-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Better in Dark Mode</h4>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
                                    Experience the 3D graphics and glowing effects the way they were meant to be seen.
                                </p>
                                <button
                                    onClick={enableDarkMode}
                                    className="w-full bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
                                >
                                    Switch to Dark Mode
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
