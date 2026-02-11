import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    <div className="max-w-md">
                        <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                            Fits <span className="text-primary">You</span>
                        </h3>
                        <p className="text-white/40 font-medium uppercase text-sm mb-6">
                            R. Antônio Galvão de O Barros, 35 - Arruamento Luiz Vicentin, Campinas - SP, 13084-275
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-12 h-12 bg-secondary border border-white/10 flex items-center justify-center hover:text-primary transition-colors">
                                <Instagram />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-secondary border border-white/10 flex items-center justify-center hover:text-primary transition-colors">
                                <Facebook />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16 uppercase font-bold text-sm tracking-widest">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary">Menu</span>
                            <Link href="/studio" className="hover:text-primary">O Studio</Link>
                            <Link href="/modalidades" className="hover:text-primary">Modalidades</Link>
                            <Link href="/professores" className="hover:text-primary">Professores</Link>
                            <Link href="/horarios" className="hover:text-primary">Horários</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-primary">Contato</span>
                            <Link href="/contato" className="hover:text-primary">WhatsApp</Link>
                            <Link href="/contato" className="hover:text-primary">E-mail</Link>
                            <Link href="/contato" className="hover:text-primary">Telefone</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em]">
                        © 2026 Fits You Studio. All rights reserved.
                    </p>
                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em]">
                        Created by Anti-Gravity
                    </p>
                </div>
            </div>
        </footer>
    );
}
