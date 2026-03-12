"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StudioMissionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const xRight = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-size-[40px_40px]" />
                <motion.div
                    style={{ x: xLeft }}
                    className="absolute top-20 -left-20 w-[150%] h-px bg-zinc-300 transform -rotate-12"
                />
                <motion.div
                    style={{ x: xRight }}
                    className="absolute bottom-40 -right-20 w-[150%] h-px bg-zinc-300 transform -rotate-12"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-32">
                    {/* Bloc 1: Missão */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl border-l-4 border-primary pl-8 md:pl-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-zinc-900">
                            Nossa <span className="text-primary italic">Missão</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-zinc-600 leading-tight uppercase font-medium">
                            Proporcionar um serviço de atividade física e saúde a fim de promover qualidade de vida que gere aderência, amor e autonomia pelo e com o exercício físico.
                        </p>
                    </motion.div>

                    {/* Bloc 2: Visão */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="max-w-4xl self-end text-right border-r-4 border-primary pr-8 md:pr-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-zinc-900">
                            Nossa <span className="text-primary italic">Visão</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-zinc-600 leading-tight uppercase font-medium">
                            Se distribuir pela região a fim de atingir populações diversas e gerar um serviço diferenciado e inovador no mercado, capaz de envolver e se adaptar a diversas regiões. Oferecer serviços de forma diferenciada do mercado e se manter atualizada nas formas de aula em grupo e/ou particular que tem maior tendência do mercado, gerar aderência para fidelizar clientes, expandir a carteira e expandir valores para o mercado.
                        </p>
                    </motion.div>

                    {/* Bloc 3: Valores */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="max-w-4xl border-l-4 border-primary pl-8 md:pl-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-zinc-900">
                            Nossos <span className="text-primary italic">Valores</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-zinc-600 leading-tight uppercase font-medium">
                            Promover um serviço justo e ético, com excelente custo benefício, valorizando o profissional e valorizando o cliente, reconhecendo o indivíduo e o inserindo em uma realidade melhor para si mesmo. (Trazer educação além dos benefícios físicos para que o aluno perdure ativamente ao longo da vida e aprenda a reconhecer e trabalhar suas particularidades).
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating Label */}
            <motion.div
                style={{ opacity }}
                className="fixed left-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none"
            >
                <span className="text-[10vw] font-black text-red-500/5 uppercase italic tracking-tighter vertical-text select-none">
                    FITS YOU
                </span>
            </motion.div>
            
            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
                .bg-size-\\[40px_40px\\] {
                    background-size: 40px 40px;
                }
            `}</style>
        </section>
    );
}
