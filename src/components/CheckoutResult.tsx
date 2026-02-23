"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function CheckoutResult() {
    const searchParams = useSearchParams();
    const checkout = searchParams.get("checkout");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (checkout === "success" || checkout === "cancel") {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 6000);
            return () => clearTimeout(timer);
        }
    }, [checkout]);

    if (!checkout || (checkout !== "success" && checkout !== "cancel")) return null;

    const isSuccess = checkout === "success";

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md"
                >
                    <div
                        className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${isSuccess
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                            }`}
                    >
                        {/* Glow effect */}
                        <div
                            className={`absolute inset-0 rounded-2xl blur-xl opacity-20 -z-10 ${isSuccess ? "bg-emerald-500" : "bg-amber-500"
                                }`}
                        />

                        {isSuccess ? (
                            <CheckCircle className="w-6 h-6 shrink-0 animate-bounce [animation-duration:2s]" />
                        ) : (
                            <XCircle className="w-6 h-6 shrink-0" />
                        )}

                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm">
                                {isSuccess ? "Payment Successful! 🎉" : "Checkout Cancelled"}
                            </p>
                            <p className="text-xs opacity-70 mt-0.5">
                                {isSuccess
                                    ? "Welcome aboard! Your subscription is now active."
                                    : "No worries — you can try again anytime."}
                            </p>
                        </div>

                        <button
                            onClick={() => setVisible(false)}
                            className="p-1 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
