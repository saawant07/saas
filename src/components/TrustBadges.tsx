"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Globe, Server, BadgeCheck } from "lucide-react";

const badges = [
    { icon: Shield, label: "SOC 2 Compliant" },
    { icon: Lock, label: "256-bit Encryption" },
    { icon: Globe, label: "GDPR Ready" },
    { icon: Server, label: "99.9% Uptime" },
    { icon: BadgeCheck, label: "ISO 27001" },
];

export default function TrustBadges() {
    return (
        <section className="py-12 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all group cursor-default"
                        >
                            <badge.icon className="w-4 h-4 text-brand-500 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">{badge.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
