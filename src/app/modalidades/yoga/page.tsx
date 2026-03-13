"use client";

import React from "react";
import { Check } from "lucide-react";
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://fitsyou.com.br/yoga/#service",
                "name": "Yoga Fits You - SwáSthya e Vinyasa",
                "serviceType": "Instrução de Yoga e Meditação",
                "provider": {
                    "@id": "https://fitsyou.com.br/#localbusiness"
                },
                "description": "Práticas de Yoga em Campinas focadas na união entre corpo, mente e espírito. Oferecemos SwáSthya Yôga para desempenho pessoal e Vinyasa Yoga para equilíbrio dinâmico.",
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Barão Geraldo, Campinas"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Modalidades de Yoga",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "SwáSthya Yôga",
                                "description": "Técnicas milenares para alto desempenho físico, mental e emocional."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Vinyasa Yoga",
                                "description": "Prática dinâmica e vigorosa sincronizada com a respiração."
                            }
                        }
                    ]
                },
                "mentions": [
                    {
                        "@type": "Person",
                        "name": "Luiz Eduardo Borges",
                        "jobTitle": "Professor de Yoga",
                        "affiliation": {
                            "@type": "Organization",
                            "name": "Instituto Yogaterapia"
                        }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://fitsyou.com.br/yoga/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Quais os benefícios do Yoga no Studio Fits You?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A prática promove consciência corporal, redução do estresse, flexibilidade, força, paz interior e melhora do foco através de técnicas adaptadas ao ritmo do aluno."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Qual a diferença entre SwáSthya e Vinyasa Yoga?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O SwáSthya foca no desempenho e autoconhecimento, enquanto o Vinyasa é uma prática intensa e fluida que sincroniza posturas e respiração."
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

                    </div>
                </div>
            </section>

            {/* Methodology Section - Overlapping */}
            <section className="relative z-10 py-32 bg-white text-secondary overflow-hidden">
                <ParallaxBackground text="MIND" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10 space-y-32">
                    {/* SwáSthya Yôga */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">SwáSthya Yôga</h2>
                                <div className="space-y-6 text-secondary/80 text-lg leading-relaxed">
                                    <p>
                                        O SwáSthya Yôga reúne técnicas e conceitos milenares que melhoram o desempenho pessoal e profissional de quem a pratica. Com o alinhamento do desempenho físico, mental e emocional, o praticante adquire uma maior consciência de si, ganhando autonomia para identificar e corrigir os comportamentos que prejudicam seu desenvolvimento, tornando-se uma pessoa mais lúcida e realizada.
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
                                            alt="SwáSthya Yôga"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </RevealItem>
                        </div>
                    </div>

                    {/* Vinyasa Yoga */}
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <RevealItem>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">Vinyasa Yoga</h2>
                                <div className="space-y-6 text-secondary/80 text-lg leading-relaxed">
                                    <p>
                                        O Vinyasa Yoga é uma prática dinâmica, intensa e vigorosa que visa equilibrar o corpo e a mente. É caracterizado por uma transição suave entre as posturas, sincronizadas com a respiração. A prática é ministrada pelo professor Luiz Eduardo Borges que tem anos de prática diária e é formado pelo Instituto Yogaterapia.
                                    </p>
                                </div>
                            </RevealItem>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px]">
                            <RevealItem className="h-full">
                                <div className="relative h-full border-4 border-secondary/10 -skew-x-3 overflow-hidden">
                                    <div className="absolute inset-0 skew-x-3 scale-125">
                                        <Image
                                            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070"
                                            alt="Vinyasa Yoga"
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
