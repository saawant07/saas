"use client";

import Link from "next/link";
import { MessageCircle, Twitter, Github, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Process", href: "#how-it-works" },
            { label: "Case Studies", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ]
    }
];

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black pt-24 pb-12 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4">
                        <Link href="/" className="flex items-center space-x-2 mb-6 group">
                            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
                                <MessageCircle size={18} fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">
                                HardCoded
                            </span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            The automated growth engine for modern SaaS. Turn Reddit conversations into customers.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-2 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {footerLinks.map((column, i) => (
                            <div key={i}>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
                                    {column.title}
                                </h4>
                                <ul className="space-y-3">
                                    {column.links.map((link, j) => (
                                        <li key={j}>
                                            <Link href={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors flex items-center group">
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400 dark:text-gray-600">
                        © {new Date().getFullYear()} HardCoded Inc. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
