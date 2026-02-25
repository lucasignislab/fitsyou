"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, easeOut } from "framer-motion";
import { cn } from "@/lib/utils";
import { animate } from "framer-motion";

export interface ThreeDImageRingProps {
    images: string[];
    width?: number;
    perspective?: number;
    imageDistance?: number;
    initialRotation?: number;
    animationDuration?: number;
    staggerDelay?: number;
    hoverOpacity?: number;
    containerClassName?: string;
    ringClassName?: string;
    imageClassName?: string;
    backgroundColor?: string;
    draggable?: boolean;
    mobileBreakpoint?: number;
    mobileScaleFactor?: number;
    inertiaPower?: number;
    inertiaTimeConstant?: number;
    inertiaVelocityMultiplier?: number;
    heightMultiplier?: number;
}

interface RingImageProps {
    imageUrl: string;
    index: number;
    angle: number;
    imageDistance: number;
    currentScale: number;
    hoverOpacity: number;
    ringRef: React.RefObject<HTMLDivElement | null>;
    isDragging: boolean;
    staggerDelay: number;
    animationDuration: number;
    imageClassName?: string;
}

function RingImage({
    imageUrl,
    index,
    angle,
    imageDistance,
    currentScale,
    hoverOpacity,
    ringRef,
    isDragging,
    staggerDelay,
    animationDuration,
    imageClassName
}: RingImageProps) {
    const imageVariants = {
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            className={cn("w-full h-full absolute", imageClassName)}
            style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                rotateY: index * -angle,
                z: -imageDistance * currentScale,
                transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            custom={index}
            transition={{
                delay: index * staggerDelay,
                duration: animationDuration,
                ease: easeOut,
            }}
            whileHover={{
                scale: 1.02,
                opacity: 1,
                transition: { duration: 0.2 }
            }}
            onHoverStart={() => {
                if (isDragging) return;
                if (ringRef.current) {
                    Array.from(ringRef.current.children).forEach((imgEl, i) => {
                        if (i !== index) {
                            (imgEl as HTMLElement).style.opacity = `${hoverOpacity}`;
                        }
                    });
                }
            }}
            onHoverEnd={() => {
                if (isDragging) return;
                if (ringRef.current) {
                    Array.from(ringRef.current.children).forEach((imgEl) => {
                        (imgEl as HTMLElement).style.opacity = `1`;
                    });
                }
            }}
        >
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            {/* Dynamic Lighting/Glow Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,10,10,0.1)_0%,transparent_70%)] transition-colors duration-500" />
            <div className="absolute inset-0 z-20 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
            </div>
        </motion.div>
    );
}

export function ThreeDImageRing({
    images,
    width = 300,
    perspective = 2000,
    imageDistance = 500,
    initialRotation = 180,
    animationDuration = 1.5,
    staggerDelay = 0.1,
    hoverOpacity = 0.5,
    containerClassName,
    ringClassName,
    imageClassName,
    backgroundColor,
    draggable = true,
    mobileBreakpoint = 768,
    mobileScaleFactor = 0.8,
    inertiaPower = 0.8,
    inertiaTimeConstant = 300,
    inertiaVelocityMultiplier = 20,
    heightMultiplier = 0.75,
}: ThreeDImageRingProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const rotationY = useMotionValue(initialRotation);
    const [currentScale, setCurrentScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);

    const dragStartX = useRef(0);
    const dragStartRotation = useRef(0);
    const lastX = useRef(0);
    const velocity = useRef(0);

    const angle = useMemo(() => 360 / images.length, [images.length]);

    useEffect(() => {
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            const newScale = viewportWidth <= mobileBreakpoint ? mobileScaleFactor : 1;
            setCurrentScale(newScale);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileBreakpoint, mobileScaleFactor]);

    useEffect(() => {
        if (!isDragging) return;

        const handleMove = (e: MouseEvent | TouchEvent) => {
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const deltaX = clientX - dragStartX.current;
            const moveSpeed = 0.5;
            const newRotation = dragStartRotation.current - (deltaX * moveSpeed);
            rotationY.set(newRotation);
            velocity.current = clientX - lastX.current;
            lastX.current = clientX;
        };

        const handleEnd = () => {
            setIsDragging(false);
            const currentRotation = rotationY.get();
            const boost = -velocity.current * inertiaVelocityMultiplier;
            const target = currentRotation + boost;

            animate(currentRotation, target, {
                type: "inertia",
                velocity: boost,
                power: inertiaPower,
                timeConstant: inertiaTimeConstant,
                restDelta: 0.5,
                modifyTarget: (t) => Math.round(t / angle) * angle,
                onUpdate: (latest) => rotationY.set(latest),
            });
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleEnd);
        window.addEventListener("touchmove", handleMove);
        window.addEventListener("touchend", handleEnd);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [isDragging, rotationY, angle, inertiaPower, inertiaTimeConstant, inertiaVelocityMultiplier]);

    const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
        if (!draggable) return;
        rotationY.stop();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        dragStartX.current = clientX;
        lastX.current = clientX;
        dragStartRotation.current = rotationY.get();
        setIsDragging(true);
        velocity.current = 0;
    };

    return (
        <div
            ref={containerRef}
            className={cn("w-full h-full overflow-hidden select-none relative", containerClassName)}
            style={{
                backgroundColor,
                transform: `scale(${currentScale})`,
                transformOrigin: "center center",
            }}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
        >
            <div
                style={{
                    perspective: `${perspective}px`,
                    width: `${width}px`,
                    height: `${width * heightMultiplier}px`,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <motion.div
                    ref={ringRef}
                    className={cn("w-full h-full absolute", ringClassName)}
                    style={{
                        transformStyle: "preserve-3d",
                        rotateY: rotationY,
                        cursor: isDragging ? "grabbing" : (draggable ? "grab" : "default"),
                    }}
                >
                    <AnimatePresence>
                        {images.map((imageUrl, index) => (
                            <RingImage
                                key={index}
                                imageUrl={imageUrl}
                                index={index}
                                angle={angle}
                                imageDistance={imageDistance}
                                currentScale={currentScale}
                                hoverOpacity={hoverOpacity}
                                ringRef={ringRef}
                                isDragging={isDragging}
                                staggerDelay={staggerDelay}
                                animationDuration={animationDuration}
                                imageClassName={imageClassName}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

export default ThreeDImageRing;
