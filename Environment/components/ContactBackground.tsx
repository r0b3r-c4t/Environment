'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ContactBackgroundProps {
    className?: string;
    style?: React.CSSProperties;
    speed?: number;
    intensity?: number;
    scrollInfluence?: number;
}

const frag = `
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform float uScroll;
uniform float uIntensity;

varying vec2 vUv;

#define PI 3.14159265359

// ---------------------------------------------------------
// Glow alrededor de una onda
// ---------------------------------------------------------

float glowLine(
    vec2 p,
    float waveY,
    float thickness
) {
    float distanceToWave = abs(p.x - waveY);
    return exp(-distanceToWave * distanceToWave / thickness);
}

// ---------------------------------------------------------
// Fragment Shader
// ---------------------------------------------------------

void main() {
    vec2 uv = vUv;

    // Aspect ratio
    float aspect = uCanvas.x / uCanvas.y;

    vec2 p = uv * 2.0 - 1.0;
    p.x *= aspect;

    // -----------------------------------------------------
    // Movimiento provocado por el scroll
    // -----------------------------------------------------
    p.x += uScroll * 0.18;

    // -----------------------------------------------------
    // PALETA DE COLORES COLOR BENDS (#000a3e, #523dff, #86a2b7)
    // -----------------------------------------------------
    vec3 cDarkBlue = vec3(0.0, 0.039, 0.243);  // #000a3e
    vec3 cVibrant   = vec3(0.322, 0.239, 1.0);  // #523dff
    vec3 cLight     = vec3(0.525, 0.635, 0.718); // #86a2b7

    // -----------------------------------------------------
    // Fondo base (#000a3e)
    // -----------------------------------------------------
    vec3 color = cDarkBlue * 0.4;

    // -----------------------------------------------------
    // Luz ambiente difusa basada en #000a3e y #523dff
    // -----------------------------------------------------
    float ambientLight = exp(-length((p - vec2(0.35, 0.15)) * vec2(0.8, 1.5)) * 2.2);
    color += cDarkBlue * ambientLight * 1.5;

    float purpleLight = exp(-length((p - vec2(-0.65, -0.55)) * vec2(1.0, 1.4)) * 2.0);
    color += cVibrant * purpleLight * 0.6;

    // -----------------------------------------------------
    // ONDA PRINCIPAL (#523dff)
    // -----------------------------------------------------
    float blueWave = sin(p.y * 2.4 + uTime * uSpeed + p.x * 1.5) * 0.22;
    blueWave += sin(p.y * 4.0 - uTime * uSpeed * 0.6) * 0.08;

    float blueGlow = glowLine(p, blueWave + 0.10, 0.012);
    color += cVibrant * blueGlow * uIntensity;

    // -----------------------------------------------------
    // SEGUNDA ONDA (#000a3e con brillo #523dff)
    // -----------------------------------------------------
    float blueWave2 = sin(p.y * 3.0 - uTime * uSpeed * 0.8) * 0.15;
    blueWave2 += cos(p.y * 1.7 + uTime * uSpeed) * 0.12;

    float blueGlow2 = glowLine(p, blueWave2 - 0.20, 0.025);
    color += mix(cDarkBlue, cVibrant, 0.5) * blueGlow2 * uIntensity;

    // -----------------------------------------------------
    // ONDA SECUNDARIA (#523dff)
    // -----------------------------------------------------
    float purpleWave = sin(p.y * 2.0 + uTime * uSpeed * 0.7) * 0.28;
    purpleWave += sin(p.y * 4.5 - uTime * uSpeed) * 0.06;

    float purpleGlow = glowLine(p, purpleWave - 0.65, 0.010);
    color += cVibrant * purpleGlow * uIntensity;

    // -----------------------------------------------------
    // BORDE BRILLANTE DE LA ONDA (#86a2b7)
    // -----------------------------------------------------
    float waveEdge = exp(-abs(p.x - (purpleWave - 0.65)) * 55.0);
    color += cLight * waveEdge * 0.8;

    // -----------------------------------------------------
    // Viñeta
    // -----------------------------------------------------
    float vignette = 1.0 - smoothstep(0.35, 1.35, length(p * 0.65));
    color *= vignette;

    // -----------------------------------------------------
    // Resultado
    // -----------------------------------------------------
    color *= uIntensity;

    gl_FragColor = vec4(color, 1.0);
}
`;

const vert = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

export default function ContactBackground({
    className = '',
    style,
    speed = 0.35,
    intensity = 1.2,
    scrollInfluence = 1,
}: ContactBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const materialRef = useRef<THREE.ShaderMaterial | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new THREE.PlaneGeometry(2, 2);

        const material = new THREE.ShaderMaterial({
            vertexShader: vert,
            fragmentShader: frag,
            uniforms: {
                uCanvas: { value: new THREE.Vector2(1, 1) },
                uTime: { value: 0 },
                uSpeed: { value: speed },
                uScroll: { value: 0 },
                uIntensity: { value: intensity },
            },
        });

        materialRef.current = material;

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: 'high-performance',
        });

        rendererRef.current = renderer;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setClearColor(0x000000, 1);

        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.display = 'block';

        container.appendChild(renderer.domElement);

        const handleResize = () => {
            const width = container.clientWidth || 1;
            const height = container.clientHeight || 1;

            renderer.setSize(width, height, false);
            material.uniforms.uCanvas.value.set(width, height);
        };

        handleResize();

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);

        let targetScroll = 0;
        let currentScroll = 0;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            targetScroll = (windowHeight / 2 - rect.top) / (windowHeight / 2);
            targetScroll = THREE.MathUtils.clamp(targetScroll, -1, 1);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        const clock = new THREE.Clock();

        const loop = () => {
            const elapsed = clock.getElapsedTime();

            material.uniforms.uTime.value = elapsed;

            currentScroll = THREE.MathUtils.lerp(currentScroll, targetScroll, 0.06);
            material.uniforms.uScroll.value = currentScroll * scrollInfluence;

            renderer.render(scene, camera);
            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);

        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }

            resizeObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);

            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.forceContextLoss();

            if (renderer.domElement.parentElement === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [speed, intensity, scrollInfluence]);

    return (
        <div
            ref={containerRef}
            className={`relative h-full w-full overflow-hidden rounded-3xl pointer-events-none ${className}`}
            style={style}
        />
    );
}