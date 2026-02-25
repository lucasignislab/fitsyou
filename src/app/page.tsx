"use client";

import Modalities from "@/components/Modalities";
import LeadCapture from "@/components/LeadCapture";
import { ArrowRight, Zap, Trophy, Users, Star, MapPin } from "lucide-react";
import Link from "next/link";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import RevealingSection, { RevealItem } from "@/components/ui/RevealingSection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden border-b border-white/5">
        <ParallaxBackground text="FITS YOU PERFORMANCE" intensity={1.5} />

        <div className="container mx-auto px-6 relative z-10">
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

                <Link href="/horarios" className="px-8 py-5 border-2 border-white text-white font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 text-center">
                  Ver horários
                </Link>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,25,25,0.05)_0%,transparent_70%)]" />

          {/* Placeholder Content */}
          <div className="relative z-10 text-center px-6">
            <RevealItem>
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Espaço Reservado para Vídeo
              </div>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white/10 uppercase italic tracking-tighter select-none">
                1920 x 1080
              </h2>
            </RevealItem>
          </div>

          {/* Brutalist Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/5" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/5" />
        </div>
      </section>

      <Modalities />

      <RevealingSection className="py-24 bg-background">
        <LeadCapture />
      </RevealingSection>
    </main>
  );
}
