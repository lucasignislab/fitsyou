"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealingSectionProps {
    children: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    staggerChildren?: boolean;
}

/**
 * RevealingSection
 * 
 * A wrapper component that handles entrance animations for sections,
 * following the project's staggered reveal pattern.
 */
export default function RevealingSection({
    children,
    title,
    subtitle,
    className = "",
    titleClassName = "",
    staggerChildren = true
}: RevealingSectionProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="container mx-auto px-6 overflow-hidden">
                {(title || subtitle) && (
                    <div className="mb-16">
                        {subtitle && (
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="block text-primary font-bold tracking-widest uppercase mb-4"
                            >
                                {subtitle}
                            </motion.span>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter ${titleClassName}`}
                            >
                                {title}
                            </motion.h2>
                        )}
                    </div>
                )}

                <motion.div
                    initial={staggerChildren ? "hidden" : "visible"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        },
                        hidden: {}
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}

// Sub-component for staggered children
export function RevealItem({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
