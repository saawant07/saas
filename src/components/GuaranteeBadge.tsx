"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 py-8"
        >
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                    <p className="text-sm font-bold text-green-800 dark:text-green-300">30-Day Money-Back Guarantee</p>
                    <p className="text-xs text-green-600 dark:text-green-500">No questions asked. Full refund if you&apos;re not satisfied.</p>
                </div>
            </div>
        </motion.div>
    );
}
