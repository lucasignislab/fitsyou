"use client";

import { Download } from "lucide-react";

export default function LeadCapture() {
    return (
        <section id="horarios" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-secondary border border-white/10 p-12 md:p-20 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
                                Receba Nossa <br />
                                <span className="text-primary italic">Grade de Horários</span> <br />
                                e Tabela de Preços
                            </h2>
                            <p className="text-xl text-white/60 uppercase font-medium max-w-md">
                                Deixe seus dados e entraremos em contato via WhatsApp com todas as informações necessárias para você começar.
                            </p>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="SEU NOME COMPLETO"
                                        className="w-full bg-background border-2 border-white/10 p-5 font-bold uppercase focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="SEU WHATSAPP (COM DDD)"
                                        className="w-full bg-background border-2 border-white/10 p-5 font-bold uppercase focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="flex-1 bg-primary text-white font-black py-5 px-8 uppercase italic flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all -skew-x-12 group">
                                        <span className="skew-x-12 flex items-center gap-2">
                                            <Download size={20} />
                                            Receber via WhatsApp
                                        </span>
                                    </button>
                                </div>
                                <p className="text-[10px] text-white/30 uppercase text-center font-bold tracking-[0.2em] mt-6">
                                    Nós odiamos spam. Seus dados estão seguros conosco.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Text Overlay */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[30rem] font-black uppercase italic leading-none -ml-20">PRICES</span>
            </div>
        </section>
    );
}
