import LeadCapture from "@/components/LeadCapture";

export default function HorariosPage() {
    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        Grade de <span className="text-primary italic">Horários</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Temos opções das 06:00 às 22:00. Solicite a grade atualizada para a sua modalidade preferida.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-10 bg-secondary border-t-4 border-primary">
                            <h3 className="font-black text-3xl mb-4 italic">MANHÃ</h3>
                            <p className="text-white/50 font-bold uppercase text-xs tracking-widest leading-relaxed">
                                Treinos dinâmicos para começar o dia com energia máxima.<br />
                                Foco em ativação metabólica.
                            </p>
                        </div>
                        <div className="p-10 bg-secondary border-t-4 border-white">
                            <h3 className="font-black text-3xl mb-4 italic">TARDE</h3>
                            <p className="text-white/50 font-bold uppercase text-xs tracking-widest leading-relaxed">
                                Horários flexíveis para quem busca treinar com calma e foco total na técnica.
                            </p>
                        </div>
                        <div className="p-10 bg-secondary border-t-4 border-primary">
                            <h3 className="font-black text-3xl mb-4 italic">NOITE</h3>
                            <p className="text-white/50 font-bold uppercase text-xs tracking-widest leading-relaxed">
                                Alta performance para encerrar o expediente e descarregar o stress.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <LeadCapture />
        </main>
    );
}
