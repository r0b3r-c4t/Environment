import ColorBends from '@/components/ColorBends';
import TrueFocus from '@/components/TrueFocus';

export const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center">
            {/* 1. Fondo animado en capa absoluta */}
            <div className="absolute inset-0 z-0">
                <ColorBends
                    rotation={90}
                    speed={0.3}
                    colors={["#000a3e", "#523dff", "#86a2b7"]}
                    transparent
                    autoRotate={0.5}
                    scale={1.3}
                    frequency={1.9}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    iterations={1}
                    intensity={1.5}
                    bandWidth={6}
                />
            </div>

            {/* 2. Contenido superpuesto con z-index superior */}
            <div className="relative z-10 container mx-auto px-4 text-center">

                <TrueFocus
                    sentence="Improve your Environment"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#5227FF"
                    animationDuration={0.2}
                    pauseBetweenAnimations={1}
                />

            </div>
        </section>
    );
};
