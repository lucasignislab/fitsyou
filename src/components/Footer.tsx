import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 bg-white border-t border-black/10">
            <div className="container mx-auto px-6 text-secondary">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    <div className="max-w-md">
                        <Link href="/" className="block mb-6 hover:opacity-90 transition-opacity w-fit group ml-2">
                            <div className="flex items-center justify-center -skew-x-12 group-hover:rotate-6 transition-transform duration-300">
                                <Image 
                                    src="/logofityou_trimmed.png" 
                                    alt="Fits You Logo" 
                                    width={160}
                                    height={80}
                                    className="h-[80px] w-auto object-contain skew-x-12" 
                                />
                            </div>
                        </Link>
                        <p className="text-secondary/60 font-medium uppercase text-sm mb-6">
                            R. Antônio Galvão de O Barros, 35 - Arruamento Luiz Vicentin, Campinas - SP, 13084-275
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/studiofitsyou/" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition-transform">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/studiofitsyou" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition-transform">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>
 
                    <div className="grid grid-cols-2 gap-16 uppercase font-bold text-sm tracking-widest">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary">Menu</span>
                            <Link href="/studio" className="text-secondary hover:text-primary transition-colors">O Studio</Link>
                            <Link href="/modalidades" className="text-secondary hover:text-primary transition-colors">Modalidades</Link>
                            <Link href="/professores" className="text-secondary hover:text-primary transition-colors">Professores</Link>
                            <Link href="/horarios" className="text-secondary hover:text-primary transition-colors">Horários</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-primary">Contato</span>
                            <a href="https://wa.me/5519993188049" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">WhatsApp</a>
                            <Link href="/contato" className="text-secondary hover:text-primary transition-colors">E-mail</Link>
                            <Link href="/contato" className="text-secondary hover:text-primary transition-colors">Telefone</Link>
                        </div>
                    </div>
                </div>
 
                <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-secondary/30 uppercase font-bold tracking-[0.3em]">
                        © 2026 Fits You Studio. All rights reserved.
                    </p>
                    <p className="text-[10px] text-secondary/30 uppercase font-bold tracking-[0.3em]">
                        Created by <a href="https://www.lucascoelho.site" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lucas Coelho</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
