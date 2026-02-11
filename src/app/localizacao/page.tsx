"use client";

import { MapPin, Navigation, Car } from "lucide-react";
import Image from "next/image";

export default function LocalizacaoPage() {
    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        Onde <span className="text-primary italic">Estamos</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Localização privilegiada em Barão Geraldo, com fácil acesso e estacionamento próprio para sua comodidade.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3 space-y-12">
                            <div>
                                <h3 className="text-2xl font-black uppercase italic mb-4 flex items-center gap-3">
                                    <MapPin className="text-primary" /> Endereço
                                </h3>
                                <p className="text-white/70 uppercase font-bold text-sm leading-relaxed">
                                    R. Antônio Galvão de O Barros, 35 - Arruamento Luiz Vicentin, Campinas - SP, 13084-275
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 bg-secondary border border-white/5 flex gap-4">
                                    <Car className="text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-black uppercase text-xs mb-1">Estacionamento</h4>
                                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Vagas exclusivas na frente do studio.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-secondary border border-white/5 flex gap-4">
                                    <Navigation className="text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-black uppercase text-xs mb-1">Ponto de Referência</h4>
                                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">A 5 minutos da UNICAMP.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-white text-black font-black py-5 uppercase italic hover:bg-primary hover:text-white transition-all -skew-x-12">
                                <span className="skew-x-12">Abrir no Google Maps</span>
                            </button>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="w-full h-[500px] bg-secondary border border-white/10 relative overflow-hidden flex items-center justify-center group">
                                {/* Placeholder for Map - In a real scenario we'd use Google Maps Embed */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Image
                                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                                        alt="Map pattern"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative z-10 text-center">
                                    <MapPin size={64} className="text-primary mx-auto mb-4 animate-bounce" />
                                    <span className="block font-black text-xl uppercase italic">Mapa Interativo vindo em breve</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
