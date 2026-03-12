"use client";

import { MapPin, Navigation, Car } from "lucide-react";
import { motion } from "framer-motion";

export default function LocalizacaoPage() {
    return (
        <main className="pt-20">
            {/* Faixa Preta (Espaçador) */}
            <div className="w-full h-8 md:h-12 bg-background border-b border-white/5" />

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

                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=R.%20Ant%C3%B4nio%20Galv%C3%A3o%20de%20O%20Barros%2C%2035%20-%20Arruamento%20Luiz%20Vicentin%2C%20Campinas%20-%20SP%2C%2013084-275"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-white text-black font-black py-5 uppercase italic hover:bg-primary hover:text-white transition-all -skew-x-12 cursor-pointer"
                            >
                                <span className="skew-x-12 block">Abrir no Google Maps</span>
                            </a>
                        </div>

                        <div className="lg:w-2/3">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full h-[500px] bg-secondary border border-white/10 relative overflow-hidden group"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.2001!2d-47.0782!3d-22.821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c70410cc7ebf%3A0x7d28717834cf8df5!2sR.%20Ant%C3%B4nio%20Galv%C3%A3o%20de%20O%20Barros%2C%2035%20-%20Arruamento%20Luiz%20Vicentin%2C%20Campinas%20-%20SP%2C%2013084-275!5e0!3m2!1spt-BR!2sbr!4v1710250000000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização FitsYou"
                                    className="opacity-100 transition-opacity duration-500"
                                />
                                
                                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                                    <div className="bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Mapa Em Tempo Real</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
