"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";
import Image from "next/image";

const benefits = [
    "Relaxamento",
    "Alívio de Tensões",
    "Recuperação Muscular",
    "Bem-estar",
    "Drenagem",
    "Redução de Stress"
];

export default function MassagemPage() {
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
                                    Massagem
                                </h1>
                            </RevealItem>

                            <RevealItem>
                                <p className="text-xl md:text-2xl text-white/70 uppercase font-medium leading-tight mb-12 max-w-xl">
                                    Recupere seu corpo e mente com nossas técnicas de massagem relaxante e desportiva.
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
                                            alt="Massage"
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
                <ParallaxBackground text="CARE" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-xl md:text-2xl font-medium leading-tight uppercase mb-8 text-primary italic font-black">
                                    Sua recuperação levada a sério.
                                </p>
                                <p className="text-lg text-secondary/70 uppercase font-bold leading-tight">
                                    Oferecemos um ambiente dedicado ao seu relaxamento e recuperação, com profissionais qualificados para atender às suas necessidades específicas.
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                <div className="absolute inset-0 skew-x-6 scale-110">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
                                        alt="Massage Experience"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
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
                                        Foco no seu bem-estar e na sua saúde física e mental.
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
