"use client";

import { Mail, Phone, Clock } from "lucide-react";

export default function ContatoPage() {
    return (
        <main className="pt-20">
            {/* Faixa Preta (Espaçador) */}
            <div className="w-full h-8 md:h-12 bg-background border-b border-white/5" />

            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        Fale <span className="text-primary italic">Conosco</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Tire suas dúvidas ou agende sua aula experimental agora mesmo. Nossa equipe está pronta para te atender.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <a 
                                href="https://wa.me/5519993188049" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-8 bg-secondary border border-white/5 -skew-x-6 block hover:border-primary transition-colors cursor-pointer group"
                            >
                                <div className="skew-x-6 flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg mb-1 italic">WhatsApp</h3>
                                        <p className="text-white/60 font-medium group-hover:text-white transition-colors">(19) 99318-8049</p>
                                    </div>
                                </div>
                            </a>

                            <div className="p-8 bg-secondary border border-white/5 -skew-x-6">
                                <div className="skew-x-6 flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-white shrink-0">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg mb-1 italic">Telefone</h3>
                                        <p className="text-white/60 font-medium">(19) 3307-3001</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-secondary border border-white/5 -skew-x-6">
                                <div className="skew-x-6 flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-white shrink-0">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg mb-1 italic">E-mail</h3>
                                        <p className="text-white/60 font-medium">contato@fitsyou.com.br</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-secondary border border-white/5 -skew-x-6">
                                <div className="skew-x-6 flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-white shrink-0">
                                        <Clock />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg mb-1 italic">Horário de Atendimento</h3>
                                        <p className="text-white/60 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                            Segunda à Quinta: 06h30 às 21:00<br />
                                            Sexta: 06h30 às 19h<br />
                                            Sábados: 08h30 às 12h30<br />
                                            Domingo: Fechado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-12 -skew-x-6 border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,59,59,0.3)]">
                            <div className="skew-x-6">
                                <h2 className="text-3xl font-black uppercase italic mb-8 text-black">Envie uma Mensagem</h2>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder="NOME"
                                        className="w-full border-2 border-black/10 p-4 font-bold uppercase focus:border-primary outline-none text-black selection:bg-primary"
                                    />
                                    <input
                                        type="email"
                                        placeholder="E-MAIL"
                                        className="w-full border-2 border-black/10 p-4 font-bold uppercase focus:border-primary outline-none text-black"
                                    />
                                    <textarea
                                        placeholder="MENSAGEM"
                                        rows={4}
                                        className="w-full border-2 border-black/10 p-4 font-bold uppercase focus:border-primary outline-none text-black"
                                    />
                                    <button className="w-full bg-black text-white font-black py-5 uppercase italic hover:bg-primary transition-all">
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
