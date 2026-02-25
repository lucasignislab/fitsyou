"use client";

import ThreeDImageRing from "@/components/ThreeDImageRing";
import StudioLimitSection from "@/components/StudioLimitSection";
import StudioIntroSection from "@/components/StudioIntroSection";

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
            <section className="py-32 bg-background overflow-hidden border-b border-white/5">
                <div className="container mx-auto px-6 flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter mb-16 text-center">
                        Nossa <span className="text-primary italic">Estrutura</span>
                    </h2>
                    <div className="w-full h-[600px] relative">
                        <ThreeDImageRing
                            images={studioImages}
                            width={500}
                            imageDistance={600}
                            staggerDelay={0.15}
                        />
                    </div>
                </div>
            </section>

            <StudioLimitSection />
        </main>
    );
}
