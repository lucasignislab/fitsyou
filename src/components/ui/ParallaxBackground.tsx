"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
    text?: string;
    intensity?: number;
    className?: string;
    showLines?: boolean;
    rotate?: number;
    diagonal?: boolean;
    showGrid?: boolean;
    baseOpacity?: number;
    theme?: "light" | "dark";
}

/**
 * ParallaxBackground
 * 
 * A reusable background component that provides moving lines and 
 * giant scrolling text for the project's Brutalist aesthetic.
 */
export default function ParallaxBackground({
    text = "FITS YOU",
    intensity = 1,
    className = "",
    showLines = true,
    rotate = 0,
    diagonal = false,
    showGrid = true,
    baseOpacity,
    theme = "dark"
}: ParallaxBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const defaultOpacity = theme === "dark" ? 0.06 : 0.04;
    const finalOpacity = baseOpacity ?? defaultOpacity;
    const textColor = theme === "dark" ? "text-white" : "text-black";
    const lineAlpha = theme === "dark" ? "opacity-10" : "opacity-20";
    const gridAlpha = theme === "dark" ? "opacity-5" : "opacity-[0.03]";
    const gridColor = theme === "dark" ? "#80808012" : "#00000010";

    const x = useTransform(scrollYProgress, [0, 1], [-intensity * 100, intensity * 100]);
    const y = useTransform(scrollYProgress, [0, 1], [diagonal ? intensity * 100 : 0, diagonal ? -intensity * 100 : 0]);

    // Default movements for lines
    const xLeft = useTransform(scrollYProgress, [0, 1], [-intensity * 100, intensity * 100]);
    const xRight = useTransform(scrollYProgress, [0, 1], [intensity * 100, -intensity * 100]);

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Grid/Texture Layer */}
            {showGrid && (
                <div className={`absolute inset-0 ${gridAlpha}`}>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-size-[40px_40px]"
                        style={{
                            backgroundImage: `linear-gradient(to_right,${gridColor} 1px,transparent 1px),linear-gradient(to_bottom,${gridColor} 1px,transparent_1px)`
                        }}
                    />
                </div>
            )}

            {/* Moving Lines */}
            {showLines && (
                <div className={`absolute inset-0 ${lineAlpha}`}>
                    <motion.div
                        style={{ x: xLeft }}
                        className="absolute top-1/4 -left-20 w-[150%] h-px bg-primary transform -rotate-6"
                    />
                    <motion.div
                        style={{ x: xRight }}
                        className="absolute bottom-1/3 -right-20 w-[150%] h-px bg-primary transform -rotate-12"
                    />
                </div>
            )}

            {/* Giant Background Text */}
            <motion.div
                style={{
                    opacity,
                    x,
                    y,
                    rotate,
                    originX: 0.5,
                    originY: 0.5
                }}
                className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
                <span
                    style={{ opacity: finalOpacity }}
                    className={`text-[25vw] font-black ${textColor} uppercase italic tracking-tighter select-none leading-none whitespace-nowrap`}
                >
                    {text}
                </span>
            </motion.div>
        </div>
    );
}
