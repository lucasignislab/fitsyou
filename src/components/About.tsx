"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function About() {
    const highlights = [
        "Equipe multidisciplinar e especializada",
        "Monitoramento contínuo de resultados",
        "Ambiente exclusivo e climatizado",
        "Equipamentos de última geração",
        "Cuidado com a sua saúde articular",
        "Comunidade focada em alta performance",
    ];

    return (
        <section id="studio" className="py-24 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image Side - Asymmetric */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 -skew-x-6 border-8 border-black overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                                alt="Studio Fits You"
                                fill
                                className="object-cover skew-x-6 scale-110"
                            />
                        </motion.div>

                        {/* Background Accent */}
                        <div className="absolute top-12 left-12 w-full h-full bg-primary z-0 -skew-x-6 opacity-10" />

                        <div className="absolute -bottom-10 -right-10 bg-black p-10 -skew-x-6 hidden md:block">
                            <div className="skew-x-6">
                                <span className="block text-primary font-black text-6xl leading-none">5.0</span>
                                <span className="block text-white text-xs uppercase font-bold tracking-widest mt-2">Satisfação no Google</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-8">
                            O Seu Limite é <br />
                            <span className="text-primary italic">Apenas o Início</span>
                        </h2>

                        <p className="text-xl text-black/70 mb-8 font-medium">
                            Na Fits You, não acreditamos em fórmulas prontas. Nosso studio foi projetado para quem busca um acompanhamento genuíno, focado em performance e longevidade.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 bg-primary flex items-center justify-center text-white shrink-0">
                                        <Check size={14} strokeWidth={4} />
                                    </div>
                                    <span className="font-bold uppercase text-xs tracking-tight">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <button className="px-10 py-5 bg-black text-white font-black text-xl uppercase tracking-tighter hover:bg-primary transition-colors -skew-x-12">
                            <span className="inline-block skew-x-12">Agende uma Visita</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
