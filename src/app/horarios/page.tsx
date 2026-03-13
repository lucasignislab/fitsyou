import LeadCapture from "@/components/LeadCapture";

export default function HorariosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://fitsyou.com.br/#localbusiness",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "06:00",
                        "closes": "22:00"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://fitsyou.com.br/horarios/#grade",
                "name": "Grade de Horários Fits You",
                "description": "Opções de treinos e modalidades disponíveis das 06:00 às 22:00, com foco em ativação metabólica pela manhã, técnica à tarde e alta performance à noite.",
                "provider": {
                    "@id": "https://fitsyou.com.br/#localbusiness"
                },
                "hoursAvailable": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "description": "Manhã: Ativação Metabólica",
                        "opens": "06:00",
                        "closes": "12:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "description": "Tarde: Foco na Técnica",
                        "opens": "12:00",
                        "closes": "18:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "description": "Noite: Alta Performance",
                        "opens": "18:00",
                        "closes": "22:00"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://fitsyou.com.br/horarios/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Qual o horário de funcionamento do Studio Fits You em Campinas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Studio Fits You oferece horários das 06:00 às 22:00, cobrindo os períodos da manhã, tarde e noite para se adaptar à rotina de cada aluno."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como posso receber a grade de horários completa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Você pode solicitar a grade de horários atualizada e a tabela de preços diretamente via WhatsApp, facilitando o acesso às informações da sua modalidade preferida."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Faixa Preta (Espaçador) */}
            <div className="w-full h-8 md:h-12 bg-background border-b border-white/5" />

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

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-10 bg-secondary border-t-4 border-primary shadow-2xl">
                            <h3 className="font-black text-3xl mb-4 italic text-white">MANHÃ</h3>
                            <p className="text-white/50 font-bold uppercase text-xs tracking-widest leading-relaxed">
                                Treinos dinâmicos para começar o dia com energia máxima.<br />
                                Foco em ativação metabólica.
                            </p>
                        </div>
                        <div className="p-10 bg-secondary border-t-4 border-white shadow-2xl">
                            <h3 className="font-black text-3xl mb-4 italic text-white">TARDE</h3>
                            <p className="text-white/50 font-bold uppercase text-xs tracking-widest leading-relaxed">
                                Horários flexíveis para quem busca treinar com calma e foco total na técnica.
                            </p>
                        </div>
                        <div className="p-10 bg-secondary border-t-4 border-primary shadow-2xl">
                            <h3 className="font-black text-3xl mb-4 italic text-white">NOITE</h3>
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
