"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const DataCity = ({ isDark }: { isDark: boolean }) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const noise2D = useMemo(() => createNoise2D(), []);

    const count = 40; // 40x40 grid = 1600 pillars
    const size = 0.8; // pillar width/depth
    const spacing = 1.0;

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const color = useMemo(() => new THREE.Color(), []);

    // We store base x, z coordinates to avoid recalculating
    const coordinates = useMemo(() => {
        const coords = [];
        const offset = (count * spacing) / 2;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                coords.push({
                    x: (i * spacing) - offset,
                    z: (j * spacing) - offset
                });
            }
        }
        return coords;
    }, [count, spacing]);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime * 0.4;

        coordinates.forEach((coord, i) => {
            // Calculate height using noise
            const noise = noise2D(coord.x * 0.05, coord.z * 0.05 + time * 0.5);
            const height = Math.max(0.1, (noise + 1) * 4); // Map -1..1 to 0..8

            // Add a "wave" effect sweeping across
            const wave = Math.sin(coord.x * 0.2 + time) * 2;
            const finalHeight = Math.max(0.2, height + wave);

            dummy.position.set(coord.x, finalHeight / 2, coord.z); // scale from bottom
            dummy.scale.set(size, finalHeight, size);
            dummy.updateMatrix();
            if (meshRef.current) meshRef.current.setMatrixAt(i, dummy.matrix);

            // Dynamic coloring based on height
            const intensity = finalHeight / 10;
            if (isDark) {
                // Dark mode: dark pillars with bright orange glowing tops
                color.setHSL(0.05, 1.0, 0.05 + intensity * 0.6);
            } else {
                // Light mode: white/grey pillars with orange tops
                color.setHSL(0.05, 0.8, 0.8 - intensity * 0.4);
            }
            if (meshRef.current) meshRef.current.setColorAt(i, color);
        });

        if (meshRef.current) {
            meshRef.current.instanceMatrix.needsUpdate = true;
            if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
        }

        // Gentle rotation
        state.camera.position.x = Math.sin(time * 0.1) * 15;
        state.camera.position.z = 25 + Math.cos(time * 0.1) * 5;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, count * count]} position={[0, -5, -5]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
            />
        </instancedMesh>
    );
};

export function LiveTerrain() {
    const [isDark, setIsDark] = React.useState(true);

    React.useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full py-24 bg-white dark:bg-[#050505] overflow-hidden border-t border-b border-gray-100 dark:border-gray-800">

            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Canvas camera={{ position: [0, 15, 30], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                    <ambientLight intensity={isDark ? 0.5 : 1.5} />
                    <directionalLight position={[10, 20, 10]} intensity={isDark ? 1.5 : 2.5} />
                    <fog attach="fog" args={[isDark ? '#050505' : '#ffffff', 15, 45]} />
                    <DataCity isDark={isDark} />
                </Canvas>

                {/* Overlay to blend the edges with the page */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-[#050505] dark:to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-[#050505] dark:to-transparent z-10"></div>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-[#050505] dark:to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-[#050505] dark:to-transparent z-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pointer-events-none h-[450px] flex flex-col justify-end">
                <div className="flex flex-col md:flex-row justify-between items-end pb-8">
                    <div className="mb-8 md:mb-0 text-center md:text-left bg-white/70 dark:bg-black/70 p-8 rounded-[2rem] backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl">
                        <div className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 rounded-full px-3 py-1 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            <span className="text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider">Live Telemetry Matrix</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Organic <span className="text-brand-600 dark:text-brand-500">Data City</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed font-medium">
                            Watch our AI engine ingest thousands of real-time Reddit conversations. Each pillar represents a subreddit cluster, actively shifting as we map high-intent B2B organic traffic.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="bg-white/90 dark:bg-black/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl flex-1 md:flex-none">
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest mb-2 font-bold">Tracked Subreddits</div>
                            <div className="text-4xl font-bold text-gray-900 dark:text-white flex items-center tracking-tight">
                                1,600
                                <span className="ml-3 text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded-md uppercase tracking-wider">Nodes</span>
                            </div>
                        </div>
                        <div className="bg-white/90 dark:bg-black/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl flex-1 md:flex-none">
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest mb-2 font-bold">Live Ingestion Velocity</div>
                            <div className="text-4xl font-bold text-brand-600 dark:text-brand-500 flex items-center tracking-tight">
                                84.2<span className="text-xl text-brand-400 ml-1 mt-1 font-medium">GB/s</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
