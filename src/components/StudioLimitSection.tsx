import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
    "EQUIPE MULTIDISCIPLINAR E ESPECIALIZADA",
    "MONITORAMENTO CONTÍNUO DE RESULTADOS",
    "AMBIENTE EXCLUSIVO E CLIMATIZADO",
    "EQUIPAMENTOS DE ÚLTIMA GERAÇÃO",
    "CUIDADO COM A SUA SAÚDE ARTICULAR",
    "COMUNIDADE FOCADA EM ALTA PERFORMANCE",
];

export default function StudioLimitSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const line1X = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const line2X = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <section ref={containerRef} className="py-40 bg-white text-secondary overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Side: Graphic Element */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Decorative Lines with Parallax */}
                        <motion.div
                            style={{ x: line1X }}
                            className="absolute top-1/2 left-0 w-full h-2 bg-secondary -translate-y-1/2 z-0 hidden lg:block"
                        />
                        <motion.div
                            style={{ x: line2X }}
                            className="absolute top-[60%] left-10 w-3/4 h-2 bg-primary/20 -translate-y-1/2 z-0 hidden lg:block"
                        />

                        {/* Slanted 5.0 Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -100, rotate: -5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                            className="relative z-10 bg-secondary text-primary px-12 py-16 -skew-x-12 flex flex-col items-center justify-center min-w-[320px] shadow-[30px_30px_0px_0px_rgba(255,25,25,0.1)]"
                        >
                            {/* Un-skew text */}
                            <div className="skew-x-12">
                                <span className="text-8xl md:text-9xl font-black italic tracking-tighter">5.0</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="max-w-xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-secondary"
                            >
                                O SEU LIMITE É <br />
                                <span className="text-primary">APENAS O INÍCIO</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg md:text-xl font-medium text-secondary/80 mb-12 leading-tight uppercase"
                            >
                                Na Fits You, não acreditamos em fórmulas prontas. Nosso studio foi projetado para quem busca um acompanhamento genuíno, focado em performance e longevidade.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-16">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="bg-primary p-1 shrink-0">
                                            <Check className="w-4 h-4 text-white" strokeWidth={4} />
                                        </div>
                                        <span className="text-sm font-bold uppercase leading-none tracking-tight">
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="group relative bg-secondary hover:bg-primary transition-colors duration-300 py-6 px-12 -skew-x-12"
                            >
                                <span className="block skew-x-12 text-2xl font-black italic uppercase text-white tracking-tighter">
                                    AGENDE UMA VISITA
                                </span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
