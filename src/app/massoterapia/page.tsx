"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";
import Image from "next/image";

const principles = [
    "Relaxamento Profundo",
    "Alívio de Tensão Muscular",
    "Melhoria da Circulação",
    "Recuperação Ativa",
    "Bem-estar Holístico",
    "Drenagem e Conexão"
];

export default function MassoterapiaPage() {
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
                <ParallaxBackground text="MASSAGEM" intensity={2} className="h-1/2! bottom-auto" />
                <ParallaxBackground text="RELAX" intensity={-2} className="top-1/2 h-1/2" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter mb-8">
                                    Massoterapia
                                </h1>
                            </RevealItem>

                            <RevealItem>
                                <p className="text-xl md:text-2xl text-white/70 uppercase font-medium leading-tight mb-12 max-w-xl">
                                    Otimize sua recuperação e elimine dores musculares através de técnicas manuais especializadas para atletas e entusiastas.
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
                                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
                                            alt="Massage Therapy"
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

            {/* Shiatsu Section - White Background */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="SHIATSU" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="right">
                                <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-8 text-primary">
                                    Shiatsu
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
                                    <p>
                                        É uma massagem terapêutica da medicina oriental, que atua nos meridianos para a reorganização da energia, e consiste em aplicar pressão em pontos do corpo.
                                    </p>
                                    <p>
                                        Além de relaxante, é muito eficiente para dores na coluna e musculares. Pode também ser utilizada na recuperação esportiva, ou para melhora do bem estar, incluindo dores de cabeça, dores de estômago e outros.
                                    </p>
                                    <p className="font-bold border-l-4 border-primary pl-4 italic">
                                        É realizada com roupa.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="left">
                                <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                    <div className="absolute inset-0 skew-x-6 scale-110">
                                        <Image
                                            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070"
                                            alt="Shiatsu Therapy"
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

            {/* Mioterapia Section - Dark Background */}
            <section className="relative z-0 py-32 bg-secondary text-white overflow-hidden border-t border-white/5">
                <ParallaxBackground text="MIO" intensity={2} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="left">
                                <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-8 text-primary">
                                    Mioterapia
                                </h2>
                                <div className="space-y-6 text-xl md:text-2xl font-medium leading-tight">
                                    <p className="text-white/80">
                                        É uma massagem que tem foco na melhora de dores musculares e articulares.
                                    </p>
                                    <p className="text-white/80">
                                        A técnica consiste em aplicar pressão nos pontos gatilhos (mais conhecidos como pequenos nódulos musculares ou tensões excessivas) para a restauração do funcionamento normal da articulação.
                                    </p>
                                    <p className="text-primary font-black italic uppercase tracking-wider">
                                        É realizada com roupa.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="right">
                                <div className="relative h-[450px] skew-x-6 overflow-hidden border-2 border-white/10 shadow-[20px_20px_0px_0px_rgba(255,25,25,0.1)]">
                                    <div className="absolute inset-0 -skew-x-6 scale-110">
                                        <Image
                                            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
                                            alt="Mioterapia"
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

            {/* Principles Section - Final */}
            <section className="relative py-32 bg-secondary overflow-hidden z-20 border-t border-white/5">
                <ParallaxBackground text="RECOVERY" intensity={3} diagonal rotate={-15} showLines={false} />
                <div className="container mx-auto px-6 relative z-10">
                    <RevealingSection
                        title={<>BENEFÍCIOS <span className="text-primary italic">DIRETOS</span></>}
                        staggerChildren
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mt-12">
                            {principles.map((item, index) => (
                                <RevealItem key={index} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                                    <div className="bg-primary p-2 shrink-0 group-hover:scale-110 transition-transform">
                                        <Check className="w-6 h-6 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-2xl font-black uppercase italic tracking-tighter">
                                        {item}
                                    </span>
                                </RevealItem>
                            ))}
                        </div>
                    </RevealingSection>
                </div>
            </section>

            {/* Final Lead Capture - Top Layer */}
            <section className="relative z-30 py-40 bg-white text-secondary border-t border-secondary/5 shadow-[0_-50px_100px_rgba(30,30,30,0.1)]">
                <RevealingSection
                    title={<>CUIDE DO SEU <span className="text-primary italic">MAIOR ATIVO</span></>}
                    subtitle="AGENDE SUA SESSÃO"
                    titleClassName="text-secondary"
                >
                    <div className="mt-16">
                        <LeadCapture />
                    </div>
                </RevealingSection>
            </section>
        </main >
    );
}
