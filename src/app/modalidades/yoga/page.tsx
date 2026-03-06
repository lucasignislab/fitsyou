"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";
import Image from "next/image";

const benefits = [
    "Consciência Corporal",
    "Redução do Estresse",
    "Flexibilidade e Força",
    "Paz Interior",
    "Melhora da Foco",
    "Equilíbrio"
];

export default function YogaPage() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const xMove = useTransform(scrollYProgress, [0, 0.7], [0, 400]);

    return (
        <main className="min-h-screen pt-20 overflow-hidden">
            {/* Hero Section - Sticky */}
            <section ref={heroRef} className="sticky top-20 h-[80vh] border-b border-white/5 bg-secondary overflow-hidden z-0">
                <ParallaxBackground text="YOGA" intensity={2} className="h-1/2! bottom-auto" />
                <ParallaxBackground text="ZEN" intensity={-2} className="top-1/2 h-1/2" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter italic">
                                    Yoga
                                </h1>
                                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                                    Pratique a união entre corpo, mente e espírito através de técnicas milenares adaptadas ao seu ritmo atual.
                                </p>
                            </RevealItem>
                        </div>

                        <motion.div
                            className="w-full lg:w-1/2 relative h-[400px] hidden lg:block"
                            style={{ x: xMove }}
                        >
                            <RevealItem className="h-full">
                                <div className="relative h-full border-4 border-white/10 -skew-x-12 overflow-hidden shadow-[30px_30px_0px_0px_rgba(255,25,25,0.1)]">
                                    <div className="absolute inset-0 skew-x-12 scale-125">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                                            alt="Yoga"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </RevealItem>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Methodology Section - Overlapping */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="MIND" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">O Método Yoga</h2>
                                <div className="space-y-6 text-secondary/80 text-lg leading-relaxed">
                                    <p>
                                        Nossas práticas combinam o Hatha Yoga tradicional com abordagens contemporâneas, focando na consciência corporal, controle da respiração e concentração mental.
                                    </p>
                                    <p>
                                        As aulas são desenhadas para reduzir o estresse, melhorar a flexibilidade e promover um estado de equilíbrio interior que se reflete em todas as áreas da sua vida.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px]">
                            <RevealItem className="h-full">
                                <div className="relative h-full border-4 border-secondary/10 skew-x-3 overflow-hidden">
                                    <div className="absolute inset-0 -skew-x-3 scale-125">
                                        <Image
                                            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062"
                                            alt="Yoga Methodology"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </RevealItem>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <RevealingSection className="bg-secondary py-32 border-t border-white/5 relative z-0">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {benefits.map((benefit, index) => (
                            <RevealItem key={benefit} delay={index * 0.1}>
                                <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Check className="text-primary w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{benefit}</h3>
                                    <p className="text-white/60">
                                        Foco no desenvolvimento integral do seu bem-estar através da prática consciente.
                                    </p>
                                </div>
                            </RevealItem>
                        ))}
                    </div>
                </div>
            </RevealingSection>

            {/* Final Lead Section */}
            <section className="relative py-24 bg-white text-secondary overflow-hidden">
                <div className="container mx-auto px-6">
                    <LeadCapture />
                </div>
            </section>
        </main>
    );
}
