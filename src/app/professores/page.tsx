"use client";

import { Instagram, Award, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const teachers = [
    {
        name: "Samuel Hernandes",
        role: "Professor Responsável",
        specialty: "Massoterapia, Biomecânica & Pilates",
        image: "/samuel.png",
        bio: "Bacharel em Ed. Física pela UNICAMP, Coach Lvl 2 pela CrossFit® e 10 anos de experiência como instrutor de Pilates. Especializações em Nutrição Esportiva e Biomecânica, Quiropraxia, Mioterapia e Shiatsu.",
    },
    {
        name: "Danielle Mancini",
        role: "Professora",
        specialty: "Pilates",
        image: "/danielle.png",
        bio: "Profissional de Educação Física formada pela Universidade Estadual de Campinas (UNICAMP), com certificação em Pilates pela VOLL Group, concluída em 2021.",
    },
    {
        name: "Victor Gadelha",
        role: "Professor",
        specialty: "Pilates, Força e Funcional",
        image: "/victor.png",
        bio: "Se formou em Educação Física pela Universidade Estadual de Campinas (UNICAMP) e desde então já atuou como Instrutor de Musculação, Avaliador Físico, Personal Trainer e até Professor de Ginástica Laboral. Fez diversos cursos na área, entre eles, Nutrição do Exercício, Envelhecimento e Exercício Físico, Hipertrofia e Emagrecimento, Personal Training e Treinamento para Idosos.",
    },
    {
        name: "Izabelle Cesco",
        role: "Professora",
        specialty: "Pilates",
        image: "/izabelle.png",
        bio: "Se formou em Educação Física pela Universidade Estadual de Campinas. Fez parte da comissão técnica do time de Handebol em Cadeira de Rodas da ADEACAMP (Associação de Esportes Adaptados de Campinas). Além disso, tem formação master em Pilates pela empresa VOLL Pilates.",
    },
    {
        name: "Marcela Calux",
        role: "Professora",
        specialty: "Performance, Cross Training & Atleta RX",
        image: "/marcela.png",
        bio: "Profissional de Educação Física, formada pela Unicamp. No CrossFit desde 2017, atua como atleta RX e coach há 7 anos. Movida por desafios e pela rotina competitiva, participa ativamente de campeonatos e vive a preparação, a intensidade e a disciplina do esporte. Essa vivência como atleta de competição se reflete nas aulas, com foco em performance, estratégia e evolução constante.",
    },
    {
        name: "Lucas Trematore",
        role: "Professor",
        specialty: "Reabilitação, Pilates & LPO",
        image: "/lucas.png",
        bio: "Lucas é graduado em Educação Física pela Pontifícia Universidade Católica de Campinas e está cursando Fisioterapia pela Anhanguera Educacional, além da Pós-graduação em Reabilitação de Lesões pela Faculdade Uniguaçu. Possui formação em Pilates Tradicional (MetaPilates), LPO – Lift Like a Russian, Treinamento de Força e Prevenção de Lesão (Prof. Dr. Charles Lopes), além de especializações em Massagem Esportiva e Liberação Miofascial.",
    },
    {
        name: "Larissa Medina",
        role: "Professora",
        specialty: "Swásthya, Hatha & Yoga Restaurativo",
        image: "/larissa.png",
        bio: "Graduada em Biologia, tem Yoga como parte da sua vida desde a infância graças a influência dos seus pais. É formada em Swásthya Yoga, Hatha Yoga e Yoga Restaurativo.",
    },
    {
        name: "Luiz Eduardo Borges", // user called him Eduardo, his name includes Eduardo
        role: "Professor",
        specialty: "Vinyasa Yoga & Yogaterapia",
        image: "/luiz_eduardo.jpeg",
        bio: "Luiz Eduardo Borges ministra aulas de vinyasa yoga há dois anos. Traz consigo uma bagagem de anos de prática diária e é formado pelo Instituto Yogaterapia. Também fez cursos de yoga para gestantes, crianças e terceira idade. Além disso, hoje se especializa em yogaterapia, trazendo aulas que buscam o bem estar do corpo físico e mental.",
    }
];

export default function ProfessoresPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": "https://fitsyou.com.br/professores/#equipe",
                "name": "Equipe Técnica Fits You - Especialistas em Performance e Saúde",
                "description": "Técnicos de elite em Campinas especializados em Cross Training, Pilates, Yoga e Reabilitação.",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "Person",
                            "name": "Samuel Hernandes",
                            "jobTitle": "Professor Responsável",
                            "knowsAbout": ["Massoterapia", "Biomecânica", "Pilates"]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "Person",
                            "name": "Marcela Calux",
                            "jobTitle": "Professora de Cross Training",
                            "knowsAbout": ["Performance", "Cross Training", "Atleta RX"]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "Person",
                            "name": "Luiz Eduardo Borges",
                            "jobTitle": "Professor de Yoga",
                            "knowsAbout": ["Vinyasa Yoga", "Yogaterapia"],
                            "affiliation": { "@type": "Organization", "name": "Instituto Yogaterapia" }
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "item": {
                            "@type": "Person",
                            "name": "Lucas Trematore",
                            "jobTitle": "Professor",
                            "knowsAbout": ["Reabilitação", "Pilates", "LPO"]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "item": {
                            "@type": "Person",
                            "name": "Victor Gadelha",
                            "jobTitle": "Professor",
                            "knowsAbout": ["Pilates", "Força", "Treinamento Funcional"]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "item": {
                            "@type": "Person",
                            "name": "Larissa Medina",
                            "jobTitle": "Professora",
                            "knowsAbout": ["Swásthya", "Hatha", "Yoga Restaurativo"]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 7,
                        "item": {
                            "@type": "Person",
                            "name": "Danielle Mancini",
                            "jobTitle": "Professora",
                            "knowsAbout": ["Pilates"]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 8,
                        "item": {
                            "@type": "Person",
                            "name": "Izabelle Cesco",
                            "jobTitle": "Professora",
                            "knowsAbout": ["Pilates"]
                        }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://fitsyou.com.br/professores/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Quem são os professores do Studio Fits You?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Fits You conta com uma equipe multidisciplinar de técnicos de elite em Campinas, especialistas em áreas como Biomecânica, Performance, Reabilitação, LPO e diferentes vertentes de Yoga e Pilates."
                        }
                    }
                ]
            }
        ]
    };

    const [selectedTeacher, setSelectedTeacher] = useState<typeof teachers[0] | null>(null);

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
                        Nossa <span className="text-primary italic">Equipe</span>
                    </h1>
                    <p className="text-xl text-white/60 uppercase font-medium max-w-2xl">
                        Técnicos de elite comprometidos com a sua evolução. Ciência, técnica e suor em cada sessão.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teachers.map((teacher, i) => (
                            <motion.div
                                layoutId={`card-${teacher.name}`}
                                key={teacher.name}
                                onClick={() => setSelectedTeacher(teacher)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative aspect-3/4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-secondary group-hover:border-primary -skew-x-2">
                                    <motion.div layoutId={`image-${teacher.name}`} className="w-full h-full relative">
                                        <Image
                                            src={teacher.image}
                                            alt={teacher.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                                    <motion.div layoutId={`info-${teacher.name}`} className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <h3 className="text-3xl font-black uppercase italic mb-1 text-white">{teacher.name}</h3>
                                        <p className="text-primary font-bold uppercase text-xs tracking-widest mb-4">{teacher.role}</p>

                                        <div className="hidden group-hover:block transition-all duration-300">
                                            <p className="text-white/60 text-xs uppercase font-medium mb-6 leading-relaxed line-clamp-3">
                                                {teacher.bio}
                                            </p>
                                            <p className="text-white text-xs uppercase font-black tracking-widest">
                                                Clique para ver mais +
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div layoutId={`specialty-${teacher.name}`} className="mt-8 p-6 bg-secondary border-l-4 border-primary">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award size={16} className="text-primary" />
                                        <span className="font-black uppercase text-xs text-white">Especialidade</span>
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-tight text-white/80">{teacher.specialty}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedTeacher && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTeacher(null)}
                            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedTeacher.name}`}
                                className="bg-secondary w-full max-w-5xl flex flex-col md:flex-row shadow-2xl overflow-hidden pointer-events-auto border-l-4 border-primary relative max-h-[90vh] md:max-h-[800px]"
                            >
                                <button 
                                    onClick={() => setSelectedTeacher(null)}
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-primary text-white rounded-full transition-colors backdrop-blur-md"
                                >
                                    <X size={24} />
                                </button>
                                
                                <div className="w-full md:w-2/5 relative aspect-square md:aspect-auto md:min-h-full border-b md:border-b-0 md:border-r border-white/10 shrink-0">
                                    <motion.div layoutId={`image-${selectedTeacher.name}`} className="w-full h-full relative">
                                        <Image
                                            src={selectedTeacher.image}
                                            alt={selectedTeacher.name}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    </motion.div>
                                </div>
                                <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center overflow-y-auto">
                                    <motion.div layoutId={`info-${selectedTeacher.name}`}>
                                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-2 text-white">
                                            {selectedTeacher.name}
                                        </h2>
                                        <p className="text-xl text-primary font-black uppercase tracking-widest mb-8">
                                            {selectedTeacher.role}
                                        </p>
                                    </motion.div>

                                    <motion.div layoutId={`specialty-${selectedTeacher.name}`} className="mb-8 p-6 bg-black/50 border-l-4 border-primary shrink-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Award size={18} className="text-primary" />
                                            <span className="font-black uppercase text-sm text-white">Especialidade</span>
                                        </div>
                                        <p className="text-base font-bold uppercase tracking-tight text-white/80">
                                            {selectedTeacher.specialty}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="border-l border-white/10 pl-6 mb-8 mt-4">
                                            <p className="text-white/70 text-lg leading-relaxed font-medium">
                                                {selectedTeacher.bio}
                                            </p>
                                        </div>

                                        <div className="flex gap-4">
                                            <a href="https://www.instagram.com/studiofitsyou/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-primary transition-colors cursor-pointer text-white">
                                                <Instagram size={24} />
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-10 whitespace-nowrap pointer-events-none italic uppercase">
                    ESTAMOS PREPARADOS
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Pronto para começar?</h2>
                    <button className="bg-white text-primary px-12 py-5 font-black uppercase italic hover:bg-black hover:text-white transition-all -skew-x-12">
                        <span className="skew-x-12 inline-block">Agende sua aula experimental</span>
                    </button>
                </div>
            </section>
        </main>
    );
}
