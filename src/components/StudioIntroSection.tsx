"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StudioIntroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
                <motion.div
                    style={{ x: xLeft }}
                    className="absolute top-20 -left-20 w-[150%] h-px bg-primary transform -rotate-12"
                />
                <motion.div
                    style={{ x: xRight }}
                    className="absolute bottom-40 -right-20 w-[150%] h-px bg-primary transform -rotate-12"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-32">
                    {/* Block 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl border-l-4 border-primary pl-8 md:pl-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-white">
                            PROJETADO PARA QUEM <br />
                            <span className="text-primary">BUSCA O EXTRAORDINÁRIO</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-tight uppercase font-medium">
                            O Studio FitsYou possui programas de treinamentos individualizados, técnicas e metodologias adequadas para atender a necessidade e objetivo de todas as pessoas.
                        </p>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="max-w-4xl self-end text-right border-r-4 border-primary pr-8 md:pr-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-white">
                            MELHORIA DA SAÚDE <br />
                            <span className="text-primary italic">E DA PERFORMANCE</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-tight uppercase font-medium">
                            Oferecemos atividades para relaxamento, auto conhecimento, e para a melhora de produtividade no trabalho, além de bem estar pleno.
                        </p>
                    </motion.div>

                    {/* Block 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="max-w-4xl border-l-4 border-primary pl-8 md:pl-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-white">
                            ESPAÇO <span className="text-primary">MULTIDISCIPLINAR</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-tight uppercase font-medium">
                            Nossas instalações são compostas por um estúdio de Pilates completo, uma sala de massagem e um galpão externo para Yoga e Treino Funcional.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating Label */}
            <motion.div
                style={{ opacity }}
                className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none"
            >
                <span className="text-[10vw] font-black text-white/5 uppercase italic tracking-tighter vertical-text select-none">
                    FITS YOU
                </span>
            </motion.div>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </section>
    );
}
