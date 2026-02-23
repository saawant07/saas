"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const notifications = [
    { name: "Sarah K.", company: "TechFlow", action: "just signed up", plan: "Professional", time: "2 min ago" },
    { name: "James R.", company: "StartupX", action: "started a trial", plan: "Starter", time: "4 min ago" },
    { name: "Emily C.", company: "DataPeak", action: "upgraded to", plan: "Enterprise", time: "7 min ago" },
    { name: "Michael T.", company: "CloudSync", action: "just signed up", plan: "Professional", time: "11 min ago" },
    { name: "Lisa W.", company: "MarketPro", action: "started a trial", plan: "Starter", time: "15 min ago" },
    { name: "David H.", company: "ScaleAI", action: "upgraded to", plan: "Enterprise", time: "18 min ago" },
    { name: "Anna M.", company: "GrowthLab", action: "just signed up", plan: "Professional", time: "22 min ago" },
];

const colors = [
    "bg-blue-500", "bg-purple-500", "bg-green-500", "bg-brand-500",
    "bg-pink-500", "bg-indigo-500", "bg-teal-500",
];

export default function SocialProofToasts() {
    const [currentToast, setCurrentToast] = useState<number | null>(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        // Show first toast after 5 seconds
        const initialDelay = setTimeout(() => {
            setCurrentToast(0);
        }, 5000);

        return () => clearTimeout(initialDelay);
    }, [dismissed]);

    useEffect(() => {
        if (currentToast === null || dismissed) return;

        // Hide toast after 4 seconds
        const hideTimer = setTimeout(() => {
            setCurrentToast(null);
        }, 4000);

        // Show next toast after 8 seconds
        const showTimer = setTimeout(() => {
            setCurrentToast((prev) =>
                prev !== null ? (prev + 1) % notifications.length : 0
            );
        }, 8000);

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(showTimer);
        };
    }, [currentToast, dismissed]);

    if (dismissed) return null;

    const notification = currentToast !== null ? notifications[currentToast] : null;
    const color = currentToast !== null ? colors[currentToast % colors.length] : "";

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <AnimatePresence>
                {notification && (
                    <motion.div
                        key={currentToast}
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-4 pr-10 max-w-xs relative overflow-hidden"
                    >
                        {/* Orange accent line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-400 to-brand-600" />

                        <button
                            onClick={() => setDismissed(true)}
                            className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition-colors"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}>
                                {notification.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div>
                                <p className="text-sm text-gray-900 dark:text-white leading-snug">
                                    <span className="font-bold">{notification.name}</span>
                                    {" from "}
                                    <span className="font-semibold text-brand-600">{notification.company}</span>
                                    {" " + notification.action + " "}
                                    <span className="font-semibold">{notification.plan}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{notification.time}</p>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-brand-500/30"
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 4, ease: "linear" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
