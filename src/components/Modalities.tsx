"use client";

import { motion } from "framer-motion";
import { Zap, Target, Heart, Shield } from "lucide-react";

const modalities = [
    {
        title: "Cross Training",
        description: "Treinamento de alta intensidade focado em força e condicionamento metabólico.",
        icon: <Zap className="w-10 h-10" />,
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    },
    {
        title: "Treinamento Funcional",
        description: "Melhore seus movimentos naturais e ganhe agilidade para o dia a dia.",
        icon: <Target className="w-10 h-10" />,
        color: "bg-white",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Pilates",
        description: "Equilíbrio entre corpo e mente com foco em core, postura e flexibilidade.",
        icon: <Heart className="w-10 h-10" />,
        color: "bg-zinc-800",
        image: "https://images.unsplash.com/photo-1518611012118-29615638a426?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Mioterapia/Massagem",
        description: "Recuperação muscular e alívio de tensões com técnicas especializadas.",
        icon: <Shield className="w-10 h-10" />,
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    },
];

export default function Modalities() {
    return (
        <section id="modalidades" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-6">
                            Nossas <span className="text-primary italic">Modalidades</span>
                        </h2>
                        <p className="text-xl text-foreground/60 uppercase font-medium">
                            Escolha o caminho que melhor se adapta aos seus objetivos. Do condicionamento extremo à recuperação consciente.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-[12rem] font-black leading-none text-white/5 uppercase select-none">
                            PUSH
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {modalities.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group h-[500px] overflow-hidden border border-white/5"
                        >
                            {/* Image with overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                                <div className={`w-16 h-16 ${item.color} ${item.color === 'bg-white' ? 'text-black' : 'text-white'} flex items-center justify-center -skew-x-12 mb-6 shadow-2xl group-hover:rotate-12 transition-transform`}>
                                    <div className="skew-x-12">{item.icon}</div>
                                </div>

                                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 transition-transform group-hover:-translate-y-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-foreground/70 uppercase font-bold tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {item.description}
                                </p>

                                <button className="mt-6 text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                    Saiba Mais <span>→</span>
                                </button>
                            </div>

                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
