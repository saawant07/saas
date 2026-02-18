"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "This platform completely changed how we ship software. The speed and reliability are unmatched in the industry.",
        author: "Sarah Chen",
        role: "CTO at TechFlow",
        initials: "SC",
        color: "bg-blue-500",
    },
    {
        quote: "I was skeptical at first, but the onboarding was seamless. We migrated our entire infrastructure in less than a day.",
        author: "Michael Ross",
        role: "Founder of StartupX",
        initials: "MR",
        color: "bg-purple-500",
    },
    {
        quote: "The best developer experience I've had in years. Everything just works, and the support team is incredible.",
        author: "Jessica Lee",
        role: "Lead Engineer at DataSystems",
        initials: "JL",
        color: "bg-green-500",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Trusted by thousands
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Don't just take our word for it. Here's what our customers have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
