import Modalities from "@/components/Modalities";

export default function ModalitiesPage() {
    return (
        <main className="pt-20">
            <section className="bg-secondary py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                        Nossas <br /><span className="text-primary italic">Modalidades</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Do alto rendimento à reabilitação. Encontre a metodologia perfeita para o seu objetivo atual.
                    </p>
                </div>
            </section>

            <Modalities />

            {/* Comparison table or deeper details can go here */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black uppercase italic mb-12 text-center">Como escolher?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="border-l-4 border-primary pl-8">
                                <h3 className="font-black text-xl mb-4 uppercase">Alta Intensidade</h3>
                                <p className="text-black/60 font-medium">Se você busca queima calórica extrema e ganho de força explosiva, o Kettlebell Training e o Funcional HIIT são ideais.</p>
                            </div>
                            <div className="border-l-4 border-black pl-8">
                                <h3 className="font-black text-xl mb-4 uppercase">Mobilidade e Postura</h3>
                                <p className="text-black/60 font-medium">O Pilates e o Treinamento Mobilidade focam no alinhamento, correção postural e saúde articular a longo prazo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
