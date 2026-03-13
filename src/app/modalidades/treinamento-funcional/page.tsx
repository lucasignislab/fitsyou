"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";
import Image from "next/image";

const focusItems = [
    "Resistência muscular",
    "Coordenação",
    "Força",
    "Equilíbrio"
];

export default function FuncionalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://fitsyou.com.br/treinamento-funcional/#service",
                "name": "Treinamento Funcional Fits You",
                "serviceType": "Exercício Funcional e Resistência Cardiovascular",
                "provider": {
                    "@id": "https://fitsyou.com.br/#localbusiness"
                },
                "description": "Treinamento em Campinas que trabalha músculos e articulações de forma integrada. Focado em resistência muscular, coordenação, força e equilíbrio para as demandas do dia a dia através de circuitos dinâmicos.",
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Barão Geraldo, Campinas"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Diferenciais do Funcional",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Circuitos Dinâmicos e Motivadores" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adaptação Individualizada por Professor" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Uso de Implementos e Peso do Corpo" } }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://fitsyou.com.br/treinamento-funcional/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Como funciona o Treinamento Funcional no Studio Fits You?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Treinamento Funcional utiliza circuitos que combinam força e resistência cardiovascular. Cada aula é diferente e dinâmica, com exercícios adaptados pelo professor para o nível de condicionamento de cada aluno."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quais as capacidades trabalhadas no Treino Funcional?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O foco está no desenvolvimento da resistência muscular, coordenação motora, força, equilíbrio, flexibilidade, potência e velocidade."
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
                <ParallaxBackground text="FUNCIONAL" intensity={2} className="h-1/2! bottom-auto" />
                <ParallaxBackground text="FUNCIONAL" intensity={-2} className="top-1/2 h-1/2" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter mb-8">
                                    Funcional <br />
                                    <span className="text-primary italic">Training</span>
                                </h1>
                            </RevealItem>

                            <RevealItem>
                                <p className="text-xl md:text-2xl text-white/70 uppercase font-medium leading-tight mb-12 max-w-xl">
                                    Trabalhe músculos e articulações de forma integrada, desenvolvendo um corpo mais funcional, com mais energia e preparado para as demandas do dia a dia.
                                </p>
                            </RevealItem>
                        </div>

                    </div>
                </div>
            </section>

            {/* Methodology Section - Overlapping */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="CORE" intensity={1.5} theme="light" />
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
                                    O Treinamento Funcional utiliza exercícios que estimulam a preparação cardiovascular, a resistência muscular e a flexibilidade, além de desenvolver velocidade, potência, equilíbrio e coordenação — capacidades essenciais para se movimentar melhor dentro e fora do treino.
                                </p>
                                <p className="text-lg text-secondary/70 uppercase font-bold leading-tight">
                                    Para tornar a experiência dinâmica e motivadora, cada aula apresenta um treino diferente, sempre conduzido e adaptado pelo professor de acordo com a preparação física de cada aluno. Os circuitos combinam exercícios de força e resistência cardiovascular, utilizando o peso do próprio corpo e diferentes implementos, para que os benefícios do treino sejam percebidos também nas atividades do cotidiano.
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[450px] -skew-x-6 overflow-hidden border-2 border-secondary/10 shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]">
                                <div className="absolute inset-0 skew-x-6 scale-110">
                                    <Image
                                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
                                        alt="Functional Training Methodology"
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
                <ParallaxBackground text="OBJETIVO" intensity={3} diagonal rotate={-15} showLines={false} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[600px] border-l-8 border-primary overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
                                    alt="Functional Training Focus"
                                    fill
                                    className="object-cover grayscale"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-secondary to-transparent" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealingSection
                                title={<>NOSSO <span className="text-primary italic">FOCO</span></>}
                                staggerChildren
                            >
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-y-6 mt-12">
                                    {focusItems.map((item, index) => (
                                        <RevealItem key={index} className="flex items-center gap-4">
                                            <div className="bg-primary p-1 shrink-0">
                                                <Check className="w-5 h-5 text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-3xl font-black uppercase italic tracking-tighter">
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
                    title={<>AGENDE UMA <span className="text-primary italic">AULA EXPERIMENTAL</span></>}
                    subtitle="COMECE A EVOLUIR"
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
