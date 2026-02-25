"use client";

import { motion } from "framer-motion";
import ThreeDImageRing from "@/components/ThreeDImageRing";
import StudioLimitSection from "@/components/StudioLimitSection";
import StudioIntroSection from "@/components/StudioIntroSection";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

export default function StudioPage() {
    const studioImages = [
        "/fachada.JPG",
        "/box1.JPG",
        "/pilates1.JPG",
        "/salamassagem.JPG",
        "/pilates2.JPG",
        "/boxexterno.JPG",
    ];

    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        O <span className="text-primary italic">Studio</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Conheça o espaço que redefine o conceito de treinamento em Campinas. Alta tecnologia aliada ao cuidado individualizado.
                    </p>
                </div>
            </section>

            <StudioIntroSection />

            {/* Interactive 3D Image Ring */}
            <section className="py-40 bg-background relative overflow-hidden border-b border-white/5">
                <ParallaxBackground text="FITS YOU STUDIO PERFORMANCE" intensity={2} />

                <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter">
                            Nossa <span className="text-primary italic">Estrutura</span>
                        </h2>
                    </motion.div>

                    <div className="w-full h-[700px] relative mt-10">
                        <ThreeDImageRing
                            images={studioImages}
                            width={550}
                            imageDistance={650}
                            staggerDelay={0.15}
                        />
                    </div>
                </div>
            </section>

            <StudioLimitSection />
        </main>
    );
}
