"use client";

import React from "react";
import Modalities from "@/components/Modalities";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import LeadCapture from "@/components/LeadCapture";

export default function ModalitiesPage() {
    return (
        <main className="min-h-screen pt-20 overflow-hidden">
            {/* Hero Section - Sticky */}
            <section className="sticky top-20 min-h-[80vh] border-b border-white/5 bg-secondary z-0">
                <ParallaxBackground text="YOUR" intensity={2} className="h-1/2! bottom-auto!" />
                <ParallaxBackground text="MOVE" intensity={-2} className="top-1/2! h-1/2!" showGrid={false} showLines={false} />

                <div className="container mx-auto px-6 py-24 h-full flex flex-col justify-center relative z-10">
                    <RevealItem>
                        <h1 className="text-7xl md:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter mb-8">
                            Nossas <br /><span className="text-primary italic">Modalidades</span>
                        </h1>
                    </RevealItem>
                    <RevealItem>
                        <p className="text-xl md:text-2xl text-white/50 uppercase font-medium max-w-2xl leading-tight">
                            Do alto rendimento à reabilitação. Encontre a metodologia perfeita para o seu objetivo atual.
                        </p>
                    </RevealItem>
                </div>
            </section>

            {/* Modalities Grid - Overlapping */}
            <section className="relative z-10 bg-background border-t border-white/5">
                <Modalities />
            </section>

            {/* Guide Section - Overlapping Layer */}
            <section className="relative z-20 py-32 bg-white text-secondary overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
                <ParallaxBackground text="GUIDE" intensity={1.5} theme="light" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-20">
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6 leading-none tracking-tighter">
                                Como <span className="text-primary italic">escolher?</span>
                            </h2>
                            <p className="text-xl text-secondary/60 uppercase font-bold tracking-tight">
                                Entenda qual caminho faz mais sentido para o seu momento.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-secondary p-12 border-l-8 border-primary shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                                <h3 className="font-black text-4xl mb-6 uppercase italic text-white tracking-tighter">
                                    Alta <span className="text-primary">Intensidade</span>
                                </h3>
                                <p className="text-white/60 font-medium text-lg uppercase leading-tight">
                                    Se você busca queima calórica extrema e ganho de força explosiva, o <span className="text-white">Cross Training</span> e o <span className="text-white">Treinamento Funcional</span> são ideais para desafiar seus limites.
                                </p>
                            </div>

                            <div className="bg-zinc-100 p-12 border-l-8 border-secondary shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                                <h3 className="font-black text-4xl mb-6 uppercase italic text-secondary tracking-tighter">
                                    Mobilidade e <span className="text-primary">Postura</span>
                                </h3>
                                <p className="text-secondary/60 font-medium text-lg uppercase leading-tight">
                                    O <span className="text-secondary font-bold">Pilates Contemporâneo</span> foca no alinhamento, correção postural e saúde articular a longo prazo, sendo a base perfeita para qualquer esporte.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Lead Capture - Top Layer */}
            <section className="relative z-30 py-40 bg-background border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
                <RevealingSection
                    title={<>PRONTO PARA O <span className="text-primary italic">PRÓXIMO NÍVEL?</span></>}
                    subtitle="AGENDE SUA VISITA"
                >
                    <div className="mt-16">
                        <LeadCapture />
                    </div>
                </RevealingSection>
            </section>
        </main>
    );
}
