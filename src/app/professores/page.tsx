"use client";

import { Instagram, Award, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const teachers = [
    {
        name: "Samuel Hernandez",
        role: "Head Coach & Founder",
        specialty: "Treinamento de Força & Kettlebell",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
        bio: "Especialista em biomecânica com mais de 10 anos de experiência transformando vidas através do movimento consciente.",
    },
    {
        name: "Danielle Mancini",
        role: "Senior Coach",
        specialty: "Pilates Contemporâneo & Mobilidade",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
        bio: "Focada em reabilitação e consciência corporal, Danielle traz a precisão do Pilates para o alto rendimento.",
    },
    {
        name: "Victor",
        role: "Coach",
        specialty: "Cross Training & HIIT",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
        bio: "Especialista em alta intensidade, Victor é o motor por trás dos nossos treinos mais desafiadores.",
    }
];

export default function ProfessoresPage() {
    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        Nossa <span className="text-primary italic">Equipe</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Técnicos de elite comprometidos com a sua evolução. Ciência, técnica e suor em cada sessão.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {teachers.map((teacher, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="relative aspect-3/4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-secondary group-hover:border-primary -skew-x-2">
                                    <Image
                                        src={teacher.image}
                                        alt={teacher.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <h3 className="text-3xl font-black uppercase italic mb-1">{teacher.name}</h3>
                                        <p className="text-primary font-bold uppercase text-xs tracking-widest mb-4">{teacher.role}</p>

                                        <div className="hidden group-hover:block transition-all duration-300">
                                            <p className="text-white/60 text-xs uppercase font-medium mb-6 leading-relaxed">
                                                {teacher.bio}
                                            </p>
                                            <div className="flex gap-4">
                                                <div className="p-2 bg-white/10 hover:bg-primary transition-colors cursor-pointer">
                                                    <Instagram size={18} />
                                                </div>
                                                <div className="p-2 bg-white/10 hover:bg-primary transition-colors cursor-pointer">
                                                    <Star size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-secondary border-l-4 border-primary">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award size={16} className="text-primary" />
                                        <span className="font-black uppercase text-xs">Especialidade</span>
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-tight">{teacher.specialty}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-10 whitespace-nowrap pointer-events-none italic uppercase">
                    ESTAMOS PREPARADOS
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Pronto para começar?</h2>
                    <button className="bg-white text-primary px-12 py-5 font-black uppercase italic hover:bg-black hover:text-white transition-all -skew-x-12">
                        <span className="skew-x-12 inline-block">Agende sua aula experimental</span>
                    </button>
                </div>
            </section>
        </main>
    );
}
