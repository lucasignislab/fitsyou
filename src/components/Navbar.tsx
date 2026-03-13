"use client";

import { useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "O Studio", href: "/studio" },
        { name: "Modalidades", href: "/modalidades" },
        { name: "Massoterapia", href: "/massoterapia" },
        { name: "Professores", href: "/professores" },
        { name: "Horários", href: "/horarios" },
        { name: "Localização", href: "/localizacao" },
        { name: "Contato", href: "/contato" },
    ];

    return (
        <nav
            className="fixed top-0 left-0 w-full h-20 z-50 flex items-center transition-all duration-500 bg-white border-b border-black/10"
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity ml-8 md:ml-16 lg:ml-24">
                    <div className="p-2 flex items-center justify-center -skew-x-12 group-hover:rotate-6 transition-transform duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logofityou_trimmed.png" alt="Fits You Logo" className="h-[60px] w-auto object-contain skew-x-12" />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors ${pathname === link.href ? "text-red-700" : "text-black"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-white p-10 z-[60] flex flex-col justify-center gap-8"
                    >
                        <button
                            className="absolute top-8 right-8 text-black hover:text-red-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={40} />
                        </button>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-4xl font-black uppercase italic tracking-tighter hover:text-red-600 transition-colors ${
                                        pathname === link.href ? "text-red-600" : "text-black"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-8">
                            <a 
                                href="https://www.instagram.com/studiofitsyou/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-4 bg-white border border-black/10 text-black hover:border-red-500 hover:text-red-600 transition-all duration-300 shadow-sm"
                            >
                                <Instagram size={24} />
                            </a>
                            <a 
                                href="https://wa.me/5519993188049" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-4 bg-white border border-black/10 text-black hover:border-red-500 hover:text-red-600 transition-all duration-300 shadow-sm"
                            >
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
