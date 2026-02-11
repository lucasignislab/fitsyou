"use client";

import About from "@/components/About";
import Image from "next/image";

export default function StudioPage() {
    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        O <span className="text-primary italic">Studio</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Conheça o espaço que redefine o conceito de treinamento em Campinas. Alta tecnologia aliada ao cuidado individualizado.
                    </p>
                </div>
            </section>

            <About />

            {/* Additional Studio Content: Gallery or Infra */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="aspect-square bg-secondary border border-white/10 group overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                alt="Equipamentos"
                            />
                        </div>
                        <div className="aspect-square bg-secondary border border-white/10 group overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1571902953202-6b99de07399a?q=80&w=1974&auto=format&fit=crop"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                alt="Espaço"
                            />
                        </div>
                        <div className="aspect-square bg-secondary border border-white/10 group overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                alt="Performance"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
