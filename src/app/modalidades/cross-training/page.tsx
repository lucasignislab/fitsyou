"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";
import Image from "next/image";

const focusItems = [
    "Preparação Cardiovascular",
    "Stamina",
    "Força",
    "Flexibilidade",
    "Potência",
    "Velocidade",
    "Coordenação",
    "Agilidade",
    "Equilíbrio",
];

export default function CrossTrainingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://fitsyou.com.br/cross-training/#service",
                "name": "Cross Training Fits You",
                "serviceType": "Treinamento de Alta Intensidade e Condicionamento Físico",
                "provider": {
                    "@id": "https://fitsyou.com.br/#localbusiness"
                },
                "description": "Programa de força e condicionamento físico em Campinas que utiliza exercícios funcionais em alta intensidade, focado em 9 capacidades físicas: Força, Potência, Velocidade, Coordenação, Agilidade, Equilíbrio, Flexibilidade, Stamina e Cardiovascular.",
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Barão Geraldo, Campinas"
                },
                "offers": {
                    "@type": "Offer",
                    "description": "Aula experimental de Cross Training com adaptação individualizada."
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://fitsyou.com.br/cross-training/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Iniciantes podem fazer Cross Training no Fits You?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim. As aulas de Cross Training no Fits You respeitam a intensidade individual. Nossos professores realizam adaptações de carga e movimento, permitindo que iniciantes e alunos avançados treinem juntos com segurança e eficiência."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quais são os benefícios do Cross Training para o dia a dia?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Cross Training trabalha músculos e articulações de forma integrada, melhorando o movemento funcional, a saúde articular e desenvolvendo capacidades como resistência cardiovascular, força e flexibilidade."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen pt-20 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section - Sticky */}
            <section className="sticky top-20 h-[80vh] border-b border-white/5 bg-secondary overflow-hidden z-0">
                <ParallaxBackground text="CROSS" intensity={2} className="h-1/2! bottom-auto" />
                <ParallaxBackground text="TRAINING" intensity={-2} className="top-1/2 h-1/2" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h1 className="text-5xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter mb-8">
                                    Cross <span className="text-primary italic">Training</span>
                                </h1>
                            </RevealItem>

                            <RevealItem>
                                <p className="text-xl md:text-2xl text-white/70 uppercase font-medium leading-tight mb-12 max-w-xl">
                                    O Cross Training é um programa de força e condicionamento físico que utiliza exercícios funcionais em alta intensidade, desenvolvendo diferentes capacidades físicas e melhorando o movimento no dia a dia.
                                </p>
                            </RevealItem>
                        </div>

                    </div>
                </div>
            </section>

            {/* Methodology Section - Overlapping */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="METODO" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-xl md:text-2xl font-medium leading-tight uppercase mb-8">
                                    Os exercícios utilizados trabalham músculos e articulações de forma integrada, favorecendo o desenvolvimento de capacidades que se transferem para diversas situações do dia a dia.
                                </p>
                                <p className="text-lg text-secondary/70 uppercase font-bold leading-tight">
                                    As aulas são conduzidas respeitando a alta intensidade individual de cada aluno. Isso significa que pessoas com diferentes níveis de condicionamento podem treinar juntas: desde iniciantes até alunos mais avançados. O professor responsável realiza as adaptações necessárias para cada aluno — ajustando carga, amplitude de movimento ou até mesmo modificando o exercício — garantindo segurança, eficiência e evolução para todos.
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                <div className="absolute inset-0 skew-x-6 scale-110">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
                                        alt="Methodology"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Section - Sticky */}
            <section className="sticky top-20 py-32 bg-secondary overflow-hidden z-20">
                <ParallaxBackground text="FOCUS" intensity={3} diagonal rotate={-15} showLines={false} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[600px] border-l-8 border-primary overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
                                    alt="Focus"
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealingSection
                                title={<>NOSSO <span className="text-primary italic">FOCO</span></>}
                                staggerChildren
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-12">
                                    {focusItems.map((item, index) => (
                                        <RevealItem key={index} className="flex items-center gap-4">
                                            <div className="bg-primary p-1 shrink-0">
                                                <Check className="w-5 h-5 text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-xl font-black uppercase italic tracking-tighter">
                                                {item}
                                            </span>
                                        </RevealItem>
                                    ))}
                                </div>
                            </RevealingSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Lead Capture - Top Layer */}
            <section className="relative z-30 py-40 bg-white text-secondary border-t border-secondary/5 shadow-[0_-50px_100px_rgba(30,30,30,0.1)]">
                <RevealingSection
                    title={<>PRONTO PARA <span className="text-primary italic">EVOLUIR?</span></>}
                    subtitle="DÊ O PRIMEIRO PASSO"
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
