"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function MassoterapiaPage() {
    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        Mioterapia & <br /><span className="text-primary italic">Recuperação</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        A verdadeira performance exige uma recuperação de elite. Tratamentos especializados para dor, relaxamento e otimização muscular.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative h-[500px] border-8 border-secondary -skew-x-6 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                                    alt="Massoterapia"
                                    fill
                                    className="object-cover scale-110 skew-x-6"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <h2 className="text-4xl font-black uppercase italic mb-8">Liberação Miofascial</h2>
                            <p className="text-white/70 text-lg mb-8 uppercase font-medium">
                                Técnicas manuais precisas para eliminar pontos de gatilho, melhorar a vascularização e devolver a amplitude de movimento ideal para o seu treino.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Zap className="text-primary" />, title: "Performance", desc: "Músculos mais livres geram mais potência." },
                                    { icon: <ShieldCheck className="text-primary" />, title: "Prevenção", desc: "Reduza drasticamente o risco de lesões articulares." },
                                    { icon: <HeartPulse className="text-primary" />, title: "Bem-estar", desc: "Alívio imediato de tensões do dia a dia." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4 p-6 bg-secondary border border-white/5 -skew-x-6"
                                    >
                                        <div className="skew-x-6">{item.icon}</div>
                                        <div className="skew-x-6">
                                            <h4 className="font-black uppercase text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-white/50 uppercase font-bold tracking-wider">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
