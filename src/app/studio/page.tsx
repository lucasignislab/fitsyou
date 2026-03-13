"use client";

import { motion } from "framer-motion";
import ThreeDImageRing from "@/components/ThreeDImageRing";
import StudioLimitSection from "@/components/StudioLimitSection";
import StudioIntroSection from "@/components/StudioIntroSection";
import StudioMissionSection from "@/components/StudioMissionSection";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import Script from "next/script";

export default function StudioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://fitsyou.com.br/o-studio/#about",
        "name": "Fits You - Studio Multidisciplinar",
        "description": "Espaço multidisciplinar em Campinas focado em treinamento de alta performance, saúde articular e bem-estar pleno. Redefinindo o conceito de treinamento individualizado.",
        "knowsAbout": [
          "Treinamento de Alta Performance",
          "Saúde Articular",
          "Qualidade de Vida",
          "Pilates",
          "Yoga",
          "Treino Funcional"
        ],
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Estúdio de Pilates Completo",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Sala de Massagem",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Galpão Externo para Yoga e Funcional",
            "value": true
          }
        ],
        "memberOf": {
          "@type": "Organization",
          "name": "Comunidade Fits You",
          "description": "Uma comunidade que treina junto focada em longevidade e performance."
        }
      },
      {
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Fits You",
          "slogan": "O seu limite é apenas o início",
          "mission": "Proporcionar um serviço de atividade física e saúde a fim de promover qualidade de vida que gere aderência, amor e autonomia.",
          "brand": {
            "@type": "Brand",
            "name": "Fits You",
            "description": "Excelência em custo-benefício, valorização do profissional e do cliente.",
            "values": "Justo, Ético, Inovador, Multidisciplinar"
          }
        }
      }
    ]
  };

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
            <Script
                id="schema-studio"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Faixa Preta (Espaçador) */}
            <div className="w-full h-8 md:h-12 bg-background border-b border-white/5" />

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

            <StudioMissionSection />

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
