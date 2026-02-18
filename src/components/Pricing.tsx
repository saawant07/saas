"use client";

import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for individuals and small projects.",
        features: ["Up to 5 projects", "10GB storage", "Basic analytics", "Community support"],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$99",
        period: "/month",
        description: "For growing teams that need more power.",
        features: [
            "Unlimited projects",
            "100GB storage",
            "Advanced analytics",
            "Priority email support",
            "Team collaboration",
            "Custom domains",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "$299",
        period: "/month",
        description: "Advanced features for large scale operations.",
        features: [
            "Unlimited everything",
            "DEDICATED infrastructure",
            "24/7 phone support",
            "SLA guarantee",
            "SSO & Audit logs",
            "Custom integration",
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-transparent dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        No hidden fees. Start for free, cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 group ${plan.highlighted
                                ? "border-brand-500 shadow-2xl scale-105 z-10 bg-white dark:bg-gray-900 hover:scale-110 hover:shadow-brand-500/20"
                                : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:bg-white dark:hover:bg-gray-900 hover:scale-105 hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-800"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce [animation-duration:3s]">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{plan.description}</p>

                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-brand-600">{plan.price}</span>
                                <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                            </div>

                            <button
                                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 mb-8 transform group-hover:-translate-y-1 ${plan.highlighted
                                    ? "bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-brand-500/25"
                                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-brand-500 hover:text-brand-600 text-gray-900 dark:text-white"
                                    }`}
                            >
                                Get Started
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <div className="bg-brand-100 dark:bg-brand-900/30 rounded-full p-1 mr-3 group-hover:scale-110 transition-transform">
                                            <Check className="h-3 w-3 text-brand-600" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
