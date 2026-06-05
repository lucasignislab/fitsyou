"use client";

import Modalities from "@/components/Modalities";
import LeadCapture from "@/components/LeadCapture";
import { useState } from "react";
import { ArrowRight, Zap, Trophy, Users, Star, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";
import ImageModal from "@/components/ui/ImageModal";

export default function Home() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://fitsyou.com.br/#studio",
        "name": "Fits You - Studio de Treinamento e Bem-Estar",
        "url": "https://fitsyou.com.br",
        "logo": "https://fitsyou.com.br/logo.png",
        "image": "https://fitsyou.com.br/foto-studio-fitsyou.jpg",
        "description": "O estúdio mais completo de Campinas localizado em Barão Geraldo. Oferecemos Cross Training, Treinamento Funcional, Pilates, Yoga e Massagem com foco em alta performance e cuidado individualizado.",
        "telephone": "+55-19-99318-8049",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "R. Antônio Galvão de O Barros, 35 - Arruamento Luiz Vicentin",
          "addressLocality": "Campinas",
          "addressRegion": "SP",
          "postalCode": "13084-275",
          "addressCountry": "BR",
          "addressDistrict": "Barão Geraldo"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -22.821,
          "longitude": -47.0782
        },
        "areaServed": {
          "@type": "City",
          "name": "Campinas"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "500"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Modalidades Fits You",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross Training" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Treinamento Funcional" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pilates" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yoga" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Massagem" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Onde fica o estúdio Fits You em Campinas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Fits You possui localização premium no distrito de Barão Geraldo, em Campinas, sendo reconhecido como o estúdio mais completo da região."
            }
          },
          {
            "@type": "Question",
            "name": "Quais modalidades de treino o Fits You oferece?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oferecemos uma grade completa que inclui Cross Training de alta intensidade, Treinamento Funcional, Pilates para postura, Yoga para equilíbrio e Massagem para recuperação muscular."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden border-b border-white/5">
        <ParallaxBackground text="FITS YOU PERFORMANCE" intensity={1.5} />

        <div className="container mx-auto px-6 relative z-10 pt-24 lg:pt-32">
          <div className="max-w-4xl">
            <RevealItem>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-secondary border border-white/10 text-primary text-sm font-bold -skew-x-12">
                <Zap size={16} />
                <span className="skew-x-12">O STUDIO MAIS COMPLETO DE CAMPINAS</span>
              </div>
            </RevealItem>

            <RevealItem>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] mb-8 tracking-tighter uppercase italic">
                Fits <span className="text-primary italic">You</span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-12 uppercase font-medium tracking-tight">
                Treinamento de alta performance, cuidado individualizado e resultados reais.
                Pare de apenas treinar. Comece a evoluir.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato" className="px-8 py-5 bg-primary text-white font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-between gap-4 group">
                  Agendar aula experimental
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>

                <button
                  onClick={() => setIsScheduleModalOpen(true)}
                  className="px-8 py-5 border-2 border-white text-white font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 text-center cursor-pointer"
                >
                  Ver horários
                </button>
              </div>
            </RevealItem>
          </div>
        </div>

        {/* Global Motion Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary -skew-x-20 translate-x-1/4 border-l border-white/10 z-0 hidden lg:block" />

        <div className="absolute bottom-12 right-12 z-10 hidden md:block">
          <div className="text-right">
            <span className="block text-9xl font-black text-white/5 uppercase leading-none select-none">BARÃO</span>
            <span className="block text-9xl font-black text-white/5 uppercase leading-none select-none">GERALDO</span>
          </div>
        </div>
      </section>

      {/* Trust Bar with Staggered Reveal */}
      <RevealingSection className="bg-secondary/50 backdrop-blur-sm border-b border-white/5 py-12" staggerChildren>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <RevealItem>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <Trophy className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">+10 ANOS</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Experiência</div>
              </div>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <Users className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">+500</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Alunos Ativos</div>
              </div>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <Star className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">NOTAS 5.0</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">No Google Maps</div>
              </div>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <MapPin className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">BARÃO GERALDO</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Localização Premium</div>
              </div>
            </div>
          </RevealItem>
        </div>
      </RevealingSection>

      {/* Video Banner Section with Parallax Background */}
      <section className="w-full bg-secondary border-y border-white/5 overflow-hidden relative">
        <ParallaxBackground text="HIGH PERFORMANCE" intensity={0.8} showLines={false} />

        <div className="max-w-[1920px] mx-auto aspect-1920/1080 relative group flex items-center justify-center bg-black/40 z-10">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,25,25,0.1)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none" />

          {/* Brutalist Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/5 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/5 pointer-events-none" />
        </div>
      </section>

      <Modalities />

      <RevealingSection className="py-24 bg-background">
        <LeadCapture />
      </RevealingSection>

      <ImageModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        imageSrc="/tabelahorario.png"
        alt="Tabela de Horários Fits You"
      />
    </main>
  );
}
