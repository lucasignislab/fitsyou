"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, alt }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-5xl bg-secondary border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-primary text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Fechar modal"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter italic text-white">
                Tabela de Horários
              </h3>
            </div>

            {/* Image */}
            <div className="p-4 md:p-6 flex items-start justify-center overflow-auto max-h-[75vh]">
              <Image
                src={imageSrc}
                alt={alt}
                width={1200}
                height={800}
                className="w-full h-auto max-w-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
