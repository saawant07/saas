"use client";

import Link from "next/link";
import { MessageCircle, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white/30 backdrop-blur-md dark:bg-gray-900/80 pt-16 pb-12 border-t border-gray-200/50 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <MessageCircle className="h-8 w-8 text-brand-500" />
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
                                HardCoded
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
                            The automated growth engine for modern SaaS. Unlock organic traffic from Reddit and AI search results.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="#features" className="hover:text-brand-600">Growth Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-brand-600">Pricing</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-brand-600">Process</Link></li>
                            <li><Link href="#resources" className="hover:text-brand-600">Resources</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-brand-600">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-brand-600">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
                        © {new Date().getFullYear()} HardCoded. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
