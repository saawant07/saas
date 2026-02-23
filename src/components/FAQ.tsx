"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question: "How does HardCoded find relevant Reddit threads?",
        answer: "Our AI engine continuously monitors thousands of subreddits, analyzing thread context, intent signals, and Google Search rankings. We identify threads where your product naturally fits the conversation, ensuring authentic engagement that drives real traffic.",
    },
    {
        question: "Is this considered spam or against Reddit's terms?",
        answer: "Absolutely not. We focus on genuine, value-adding responses using established, aged accounts. Our comments provide real insights and recommendations — they just happen to include your product when relevant. Reddit users actually appreciate helpful answers.",
    },
    {
        question: "How quickly will I see results?",
        answer: "Most clients see their first qualified leads within the first week. However, the real compounding effect kicks in at 30-60 days as comments gain upvotes, threads rank higher on Google, and the organic traffic flywheel accelerates. Average ROI increase is 142% within 90 days.",
    },
    {
        question: "Can I choose which subreddits to target?",
        answer: "Yes! You can specify target subreddits, or let our AI recommend the highest-intent communities for your product. We also allow you to set keyword filters, intent thresholds, and exclude specific subreddits to ensure precise targeting.",
    },
    {
        question: "What's the difference between Starter and Professional plans?",
        answer: "The Starter plan includes up to 5 projects with basic analytics — perfect for solo founders. The Professional plan unlocks unlimited projects, advanced analytics dashboards, priority support, team collaboration, and custom domains for your campaign reports.",
    },
    {
        question: "Do you offer a free trial or money-back guarantee?",
        answer: "Yes to both! We offer a 14-day free trial with no credit card required. If you're not satisfied within the first 30 days of your paid plan, we'll refund you in full — no questions asked. We're that confident in our results.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="resources" className="py-24 bg-white dark:bg-black">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        Everything you need to know about HardCoded.
                    </motion.p>
                </div>

                <div className="space-y-3">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${openIndex === index
                                        ? "bg-brand-50/50 dark:bg-brand-900/10 border-brand-200 dark:border-brand-800/50 shadow-lg shadow-brand-500/5"
                                        : "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800/50 hover:bg-white dark:hover:bg-gray-900"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className={`font-semibold text-base pr-8 transition-colors ${openIndex === index
                                            ? "text-brand-700 dark:text-brand-400"
                                            : "text-gray-900 dark:text-white group-hover:text-brand-600"
                                        }`}>
                                        {item.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? "text-brand-500" : "text-gray-400"
                                            }`} />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
