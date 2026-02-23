"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const fragmentShader = `
uniform sampler2D u_image;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_hoverState;
uniform float u_aspectX;
uniform float u_aspectY;
varying vec2 vUv;

void main() {
    // Preserve aspect ratio for mouse calculations
    vec2 uv = vUv;
    vec2 mouseUv = u_mouse;
    
    // Liquid distortion effect based on hover state and time
    float noise = sin(uv.x * 20.0 + u_time * 2.0) * 0.01 * u_hoverState;
    noise += cos(uv.y * 15.0 - u_time * 1.5) * 0.015 * u_hoverState;
    
    // Mouse repel distortion
    vec2 dir = uv - mouseUv;
    dir.x *= u_aspectX; // Correct for aspect ratio so ripple is circular
    dir.y *= u_aspectY;
    
    float dist = length(dir);
    
    // Creates a ripple/bubble moving away from the mouse
    float mouseEffect = smoothstep(0.4, 0.0, dist);
    vec2 offset = dir * mouseEffect * 0.1 * u_hoverState;
    
    // Add time-based ripples
    float ripple = sin(dist * 30.0 - u_time * 5.0) * 0.02 * mouseEffect * u_hoverState;
    offset += dir * ripple;
    
    // Apply RGB Shift for a "chromatic aberration" glass effect
    float r = texture2D(u_image, uv + offset + noise * 0.7).r;
    float g = texture2D(u_image, uv + offset).g;
    float b = texture2D(u_image, uv + offset - noise * 0.7).b;
    
    gl_FragColor = vec4(r, g, b, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const ImagePlane = ({ imageUrl }: { imageUrl: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const texture = useTexture(imageUrl);
    const [hovered, setHovered] = useState(false);

    // Smoothed values
    const targetHover = useRef(0);
    const currentHover = useRef(0);
    const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
    const currentMouse = useRef(new THREE.Vector2(0.5, 0.5));

    const uniforms = useMemo(
        () => ({
            u_image: { value: texture },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
            u_time: { value: 0 },
            u_hoverState: { value: 0 },
            u_aspectX: { value: 1.0 },
            u_aspectY: { value: 1.0 }
        }),
        [texture]
    );

    useFrame((state, delta) => {
        if (!materialRef.current) return;

        // Smoothly interpolate hover state
        targetHover.current = hovered ? 1 : 0;
        currentHover.current = THREE.MathUtils.lerp(currentHover.current, targetHover.current, 0.1);

        // Smoothly interpolate mouse position
        currentMouse.current.lerp(targetMouse.current, 0.1);

        materialRef.current.uniforms.u_time.value += delta;
        materialRef.current.uniforms.u_hoverState.value = currentHover.current;
        materialRef.current.uniforms.u_mouse.value.copy(currentMouse.current);

        // Ensure the ripple stays circular regardless of canvas dimensions
        const aspect = state.size.width / state.size.height;
        if (aspect > 1) {
            materialRef.current.uniforms.u_aspectX.value = aspect;
            materialRef.current.uniforms.u_aspectY.value = 1.0;
        } else {
            materialRef.current.uniforms.u_aspectX.value = 1.0;
            materialRef.current.uniforms.u_aspectY.value = 1.0 / aspect;
        }
    });

    const handlePointerMove = (e: any) => {
        // Normalize coordinates (0-1) where 0,0 is bottom left in WebGL
        const x = e.uv.x;
        const y = e.uv.y;
        targetMouse.current.set(x, y);
    };

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerMove={handlePointerMove}
        >
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export function LiquidImage({ imageUrl, className }: { imageUrl: string; className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-2xl ${className || "w-full h-full"}`}>
            <Canvas camera={{ position: [0, 0, 1] }} className="absolute inset-0 cursor-crosshair">
                <React.Suspense fallback={null}>
                    <ImagePlane imageUrl={imageUrl} />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
