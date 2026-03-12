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
            {/* Faixa Preta (Espaçador) */}
            <div className="w-full h-8 md:h-12 bg-background border-b border-white/5" />

            {/* Hero Section - Sticky */}
            <section ref={heroRef} className="sticky top-20 h-[80vh] border-b border-white/5 bg-secondary overflow-hidden z-0">
                <ParallaxBackground text="MASSAGEM" intensity={2} className="h-1/2! bottom-auto" />
                <ParallaxBackground text="RELAX" intensity={-2} className="top-1/2 h-1/2" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
                        <div className="w-full lg:w-1/2 relative z-20">
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
                            className="w-full lg:w-1/2 relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 h-[400px] hidden lg:block z-30 opacity-90 hover:opacity-100 transition-opacity"
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
                                        Massagem terapêutica de origem oriental que atua nos meridianos do corpo para auxiliar no equilíbrio da energia. A técnica utiliza pressões em pontos específicos, promovendo relaxamento profundo e bem-estar. Também é muito eficaz para aliviar dores musculares, tensões na coluna e auxiliar na recuperação do corpo no dia a dia.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="left">
                                <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                    <div className="absolute inset-0 skew-x-6 scale-110">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
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
                                        Técnica terapêutica focada no tratamento de dores musculares e articulares. Através da pressão em pontos gatilho — pequenos nódulos de tensão muscular — busca relaxar a musculatura, aliviar a dor e restaurar o funcionamento adequado das articulações e dos movimentos.
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

            {/* Agulhamento a seco Section - White Background */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="AGULHAS" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="right">
                                <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter mb-8 text-primary">
                                    Agulhamento a seco
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
                                    <p>
                                        Técnica utilizada para tratar dores musculares e pontos de tensão. Consiste na aplicação de agulhas finas diretamente nos pontos gatilho, ajudando a reduzir a dor, relaxar a musculatura e melhorar a mobilidade.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="left">
                                <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                    <div className="absolute inset-0 skew-x-6 scale-110">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070"
                                            alt="Agulhamento a Seco"
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

            {/* Drenagem linfática Section - Dark Background */}
            <section className="relative z-0 py-32 bg-secondary text-white overflow-hidden border-t border-white/5">
                <ParallaxBackground text="DRENO" intensity={2} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="left">
                                <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter mb-8 text-primary">
                                    Drenagem linfática
                                </h2>
                                <div className="space-y-6 text-xl md:text-2xl font-medium leading-tight">
                                    <p className="text-white/80">
                                        Massagem realizada com movimentos suaves e rítmicos que estimulam o sistema linfático, auxiliando na eliminação do excesso de líquidos do organismo. Contribui para a redução de inchaços, melhora da circulação e sensação de leveza e bem-estar.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="right">
                                <div className="relative h-[450px] skew-x-6 overflow-hidden border-2 border-white/10 shadow-[20px_20px_0px_0px_rgba(255,25,25,0.1)]">
                                    <div className="absolute inset-0 -skew-x-6 scale-110">
                                        <Image
                                            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070"
                                            alt="Drenagem Linfática"
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

            {/* Massagem modeladora Section - White Background */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="MODELA" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="right">
                                <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter mb-8 text-primary">
                                    Massagem modeladora
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
                                    <p>
                                        Massagem com movimentos firmes e intensos que estimulam a circulação e auxiliam na mobilização da gordura localizada. Pode contribuir para a melhora do contorno corporal e da aparência da pele, além de promover sensação de ativação e bem-estar.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealItem direction="left">
                                <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                    <div className="absolute inset-0 skew-x-6 scale-110">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
                                            alt="Massagem Modeladora"
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

            {/* Professionals Section */}
            <section className="relative py-32 bg-white text-secondary overflow-hidden z-20 border-t border-secondary/5">
                <ParallaxBackground text="PROFISSIONAIS" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <RevealingSection
                        title={<>NOSSOS <span className="text-primary italic">PROFISSIONAIS</span></>}
                        subtitle="ESPECIALISTAS EM RECUPERAÇÃO"
                        titleClassName="text-secondary"
                        staggerChildren
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
                            {/* Samuel Card */}
                            <RevealItem className="bg-secondary text-white rounded-3xl overflow-hidden border border-white/10 group shadow-[20px_20px_0px_0px_rgba(255,25,25,0.1)] transition-transform hover:-translate-y-2">
                                <div className="relative h-[450px] w-full overflow-hidden">
                                    <Image
                                        src="/samuel.png"
                                        alt="Samuel"
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/50 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-4xl font-black uppercase italic mb-2 text-white">Samuel</h3>
                                    </div>
                                </div>
                                <div className="p-8 pt-0">
                                    <p className="text-xl text-white/80 font-medium leading-relaxed">
                                        Especializado em <span className="text-primary font-bold">mioterapia</span>, <span className="text-primary font-bold">shiatsu</span>, <span className="text-primary font-bold">agulhamento a seco</span>, <span className="text-primary font-bold">ventosa terapia</span> e <span className="text-primary font-bold">quiropraxia</span>.
                                    </p>
                                </div>
                            </RevealItem>

                            {/* Lucas Card */}
                            <RevealItem className="bg-secondary text-white rounded-3xl overflow-hidden border border-white/10 group shadow-[20px_20px_0px_0px_rgba(255,25,25,0.1)] transition-transform hover:-translate-y-2" direction="left">
                                <div className="relative h-[450px] w-full overflow-hidden">
                                    <Image
                                        src="/lucas.png"
                                        alt="Lucas"
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/50 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-4xl font-black uppercase italic mb-2 text-white">Lucas</h3>
                                    </div>
                                </div>
                                <div className="p-8 pt-0">
                                    <p className="text-xl text-white/80 font-medium leading-relaxed">
                                        Especializado em <span className="text-primary font-bold">mioterapia</span>, massagem <span className="text-primary font-bold">relaxante</span>, <span className="text-primary font-bold">drenagem linfática</span>, <span className="text-primary font-bold">modeladora</span>, <span className="text-primary font-bold">pedras quentes</span> e <span className="text-primary font-bold">bambu terapia</span>.
                                    </p>
                                </div>
                            </RevealItem>
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
