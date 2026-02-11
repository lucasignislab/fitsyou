"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center -skew-x-12 group-hover:rotate-12 transition-transform duration-300">
                        <span className="font-black text-2xl skew-x-12 text-white">F</span>
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tighter italic">
                        Fits <span className="text-primary">You</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === link.href ? "text-primary" : "text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contato" className="px-6 py-2 bg-primary text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        Começar
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
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
                        className="absolute top-0 left-0 w-full h-screen bg-background p-10 z-60 flex flex-col justify-center gap-8"
                    >
                        <button
                            className="absolute top-8 right-8 text-white"
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
                                    className={`text-4xl font-black uppercase italic tracking-tighter hover:text-primary transition-colors ${pathname === link.href ? "text-primary" : "text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-8">
                            <Link href="#" className="p-4 bg-secondary border border-white/10 text-primary">
                                <Instagram size={24} />
                            </Link>
                            <Link href="#" className="p-4 bg-secondary border border-white/10 text-primary">
                                <MessageCircle size={24} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
