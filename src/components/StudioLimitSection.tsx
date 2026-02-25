import React from "react";
import { Check } from "lucide-react";

const features = [
    "EQUIPE MULTIDISCIPLINAR E ESPECIALIZADA",
    "MONITORAMENTO CONTÍNUO DE RESULTADOS",
    "AMBIENTE EXCLUSIVO E CLIMATIZADO",
    "EQUIPAMENTOS DE ÚLTIMA GERAÇÃO",
    "CUIDADO COM A SUA SAÚDE ARTICULAR",
    "COMUNIDADE FOCADA EM ALTA PERFORMANCE",
];

export default function StudioLimitSection() {
    return (
        <section className="py-32 bg-white text-secondary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Side: Graphic Element */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Decorative Lines */}
                        <div className="absolute top-1/2 left-0 w-full h-2 bg-secondary -translate-y-1/2 z-0 hidden lg:block" />
                        <div className="absolute top-[60%] left-10 w-3/4 h-2 bg-primary/20 -translate-y-1/2 z-0 hidden lg:block" />

                        {/* Slanted 5.0 Box */}
                        <div className="relative z-10 bg-secondary text-primary px-12 py-16 -skew-x-12 flex flex-col items-center justify-center min-w-[320px]">
                            {/* Un-skew text */}
                            <div className="skew-x-12">
                                <span className="text-8xl md:text-9xl font-black italic tracking-tighter">5.0</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="max-w-xl">
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-secondary">
                                O SEU LIMITE É <br />
                                <span className="text-primary">APENAS O INÍCIO</span>
                            </h2>

                            <p className="text-lg md:text-xl font-medium text-secondary/80 mb-12 leading-tight uppercase">
                                Na Fits You, não acreditamos em fórmulas prontas. Nosso studio foi projetado para quem busca um acompanhamento genuíno, focado em performance e longevidade.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-16">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="bg-primary p-1 shrink-0">
                                            <Check className="w-4 h-4 text-white" strokeWidth={4} />
                                        </div>
                                        <span className="text-sm font-bold uppercase leading-none tracking-tight">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="group relative bg-secondary hover:bg-primary transition-colors duration-300 py-6 px-12 -skew-x-12">
                                <span className="block skew-x-12 text-2xl font-black italic uppercase text-white tracking-tighter">
                                    AGENDE UMA VISITA
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
