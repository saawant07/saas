"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Beam configuration
        const beams = Array.from({ length: 20 }, (_, i) => ({
            x: Math.random() * w,
            y: Math.random() * h,
            length: Math.random() * 200 + 100, // Reduced length
            width: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5 + 0.1,
            angle: -45 * (Math.PI / 180), // Diagonal movement
        }));

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, w, h);

            // Create gradient background
            // Note: In a real implementation we might want this transparent to overlay on CSS
            // But here we draw subtle beams

            beams.forEach((beam) => {
                ctx.beginPath();
                // Calculate end point based on angle
                const endX = beam.x + Math.cos(beam.angle) * beam.length;
                const endY = beam.y + Math.sin(beam.angle) * beam.length;

                const gradient = ctx.createLinearGradient(beam.x, beam.y, endX, endY);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(249, 115, 22, ${beam.opacity})`); // Brand orange-500 equivalent (f97316)
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = beam.width;
                ctx.moveTo(beam.x, beam.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Update position
                beam.x += Math.cos(beam.angle) * beam.speed;
                beam.y += Math.sin(beam.angle) * beam.speed;

                // Reset if out of bounds (diagonal check)
                if (beam.x < -200 || beam.y < -200) {
                    beam.x = w + Math.random() * 100;
                    beam.y = h + Math.random() * 100;
                }
            });

            requestAnimationFrame(draw);
        };

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', handleResize);
        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        }
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full pointer-events-none overflow-hidden",
                className
            )}
        >
            <canvas
                ref={beamsRef}
                className="absolute inset-0 w-full h-full opacity-30 dark:opacity-50"
            />
            {/* Radial Overlay to fade out edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-80" />
        </div>
    );
};
