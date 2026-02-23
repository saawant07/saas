"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Growth Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Process", href: "#process" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_30px_rgba(249,115,22,0.12)] border-b border-brand-500/10 dark:border-brand-500/15 py-2"
        : "bg-transparent py-4 border-b border-transparent"
        }`}
    >
      {/* Orange glow line at top of navbar when scrolled */}
      <div
        className={`absolute top-0 left-0 w-full h-[1px] transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.4) 30%, rgba(249,115,22,0.6) 50%, rgba(249,115,22,0.4) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
              <div className="relative bg-gradient-to-tr from-brand-600 to-brand-400 p-2 rounded-xl text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <MessageCircle className="h-5 w-5 fill-white/20" />
              </div>
            </div>
            <span className="font-bold text-2xl tracking-tighter text-gray-900 dark:text-white">
              HardCoded<span className="text-brand-600">.io</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-600 group-hover:w-1/2 transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-600 transition-colors cursor-pointer">
                  Login
                </button>
              </SignInButton>
              <Link
                href="#pricing"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5 flex items-center group"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 ring-2 ring-brand-500/20 hover:ring-brand-500/40 transition-all",
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 ring-2 ring-brand-500/20",
                  },
                }}
              />
            </SignedIn>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 hover:bg-brand-50/50 dark:hover:bg-brand-900/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-3 px-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  className="block w-full text-center text-gray-900 dark:text-white font-semibold px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </SignInButton>
              <Link
                href="#pricing"
                className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl text-base font-bold transition-all shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
