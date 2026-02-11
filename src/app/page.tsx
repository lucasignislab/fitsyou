import Modalities from "@/components/Modalities";
import About from "@/components/About";
import LeadCapture from "@/components/LeadCapture";
import { ArrowRight, Zap, Trophy, Users, Star, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-secondary border border-white/10 text-primary text-sm font-bold -skew-x-12">
              <Zap size={16} />
              <span className="skew-x-12">O STUDIO MAIS COMPLETO DE CAMPINAS</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] mb-8 tracking-tighter uppercase italic">
              Fits <span className="text-primary italic">You</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-12 uppercase font-medium tracking-tight">
              Treinamento de alta performance, cuidado individualizado e resultados reais.
              Pare de apenas treinar. Comece a evoluir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato" className="px-8 py-5 bg-primary text-white font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-between gap-4 group">
                Agendar aula experimental
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link href="/horarios" className="px-8 py-5 border-2 border-white text-white font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 text-center">
                Ver horários
              </Link>
            </div>
          </div>
        </div>

        {/* Background Decorative Element - NEO-FIT BRUTALISM */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary -skew-x-20 translate-x-1/4 border-l border-white/10 z-0 hidden lg:block" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-24 bg-primary/20 -rotate-12 blur-[120px] pointer-events-none" />

        <div className="absolute bottom-12 right-12 z-10 hidden md:block">
          <div className="text-right">
            <span className="block text-9xl font-black text-white/5 uppercase leading-none select-none">BARÃO</span>
            <span className="block text-9xl font-black text-white/5 uppercase leading-none select-none">GERALDO</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary/50 backdrop-blur-sm border-b border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <Trophy className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">+10 ANOS</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Experiência</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <Users className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">+500</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Alunos Ativos</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <Star className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">NOTAS 5.0</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">No Google Maps</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center border border-primary/30 -skew-x-12">
                <MapPin className="text-primary skew-x-12" />
              </div>
              <div>
                <div className="font-black text-2xl">BARÃO G.</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Localização Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Modalities />
      <LeadCapture />
    </main>
  );
}
