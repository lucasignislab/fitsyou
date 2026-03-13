"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";
import Image from "next/image";

const principles = [
    "Respiração",
    "Centro",
    "Controle",
    "Fluidez",
    "Precisão",
    "Concentração"
];

export default function PilatesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://fitsyou.com.br/pilates/#service",
                "name": "Pilates Personalizado Fits You",
                "serviceType": "Pilates Contemporâneo e Reabilitação Postural",
                "provider": {
                    "@id": "https://fitsyou.com.br/#localbusiness"
                },
                "description": "Pilates em Campinas (Barão Geraldo) com foco em força, postura e flexibilidade. Aulas em turmas reduzidas e personalizadas para todas as fases da vida e níveis de condicionamento.",
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Barão Geraldo, Campinas"
                },
                "additionalType": "http://www.productontology.org/id/Pilates",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Princípios do Pilates Fits You",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Respiração e Concentração" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Centro (Core) e Controle" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Precisão e Fluidez" } }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://fitsyou.com.br/pilates/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Como são as aulas de Pilates no Fits You?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As aulas são realizadas em turmas reduzidas, permitindo uma personalização total de acordo com a condição física e necessidades específicas de cada aluno."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Pilates pode ser praticado por qualquer pessoa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim. Por ser uma atividade de baixo impacto, o Pilates é adaptável para diferentes perfis e objetivos, sendo um excelente complemento para fortalecer o corpo e melhorar a postura."
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
                <ParallaxBackground text="PILATES" intensity={2} className="h-1/2! bottom-auto" />
                <ParallaxBackground text="BALANCE" intensity={-2} className="top-1/2 h-1/2" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h1 className="text-5xl lg:text-8xl font-black italic tracking-tighter mb-6">
                                    Pilates
                                </h1>
                            </RevealItem>

                            <RevealItem>
                                <p className="text-xl md:text-2xl text-white/70 uppercase font-medium leading-tight mb-12 max-w-xl">
                                    No Studio Fits You, o Pilates é realizado em turmas reduzidas, o que permite que cada aula seja personalizada de acordo com a condição e as necessidades de cada aluno.
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
                                    A prática tem como foco o desenvolvimento da força, da postura e da flexibilidade — capacidades fundamentais em qualquer fase da vida. Por ser uma atividade de baixo impacto, pode ser adaptada para diferentes perfis e objetivos.
                                </p>
                                <p className="text-lg text-secondary/70 uppercase font-bold leading-tight">
                                    O Pilates promove bem-estar, melhora a postura, aumenta a flexibilidade e contribui para um melhor desempenho nas atividades do dia a dia. Também é um excelente complemento para práticas de maior impacto, pois fortalece e estabiliza o centro do corpo.
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[400px] md:h-[500px] border-4 border-secondary/10 -skew-x-6 overflow-hidden shadow-[20px_20px_0px_0px_rgba(30,30,30,0.05)]"
                            >
                                <div className="absolute inset-0 skew-x-6 scale-110">
                                    <Image
                                        src="/pilates_methodology_custom.png"
                                        alt="Pilates Methodology"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section - Sticky */}
            <section className="sticky top-20 py-32 bg-secondary overflow-hidden z-20">
                <ParallaxBackground text="CONTROL" intensity={3} diagonal rotate={-15} showLines={false} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[600px] border-l-8 border-primary overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120"
                                    alt="Pilates Principles"
                                    fill
                                    className="object-cover grayscale"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-secondary to-transparent" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <RevealingSection
                                title={<>PRINCÍPIOS <span className="text-primary italic">BÁSICOS</span></>}
                                staggerChildren
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-12">
                                    {principles.map((item, index) => (
                                        <RevealItem key={index} className="flex items-center gap-4">
                                            <div className="bg-primary p-1 shrink-0">
                                                <Check className="w-5 h-5 text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-2xl font-black uppercase italic tracking-tighter">
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
                    subtitle="EQUILÍBRIO E FORÇA"
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
