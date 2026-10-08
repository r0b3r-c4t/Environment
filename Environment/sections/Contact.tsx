'use client';

import { ArrowRight, Mail, MessageSquareText } from 'lucide-react';
import { SpotlightCard } from '@/components/SpotlightCard';
import ColorBends from '@/components/ColorBends';
import SpecularButton from '@/components/SpecularButton';

export function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen overflow-hidden bg-slate-950"
        >
            {/* FONDO CON COLORBENDS EN VERTICAL (LADO DERECHO) */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full lg:w-2/3 overflow-hidden"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
                }}
            >
                <ColorBends
                    rotation={0} // Orientación vertical para la vista de contacto
                    speed={0.25}
                    colors={["#000a3e", "#523dff", "#86a2b7"]}
                    transparent
                    autoRotate={0.2}
                    scale={1.5}
                    frequency={1.6}
                    warpStrength={1}
                    mouseInfluence={0.8}
                    parallax={0.3}
                    noise={0.1}
                    iterations={1}
                    intensity={1.4}
                    bandWidth={6}
                />
            </div>

            {/* CONTENIDO (GRID CON EL FORMULARIO A LA IZQUIERDA) */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-28 lg:px-8">
                <div className="w-full max-w-xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-200/80 backdrop-blur-sm">
                        <Mail size={12} />
                        Contact
                    </div>

                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Improve your Environment with us
                    </h2>

                    <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                        Tell us about your idea, goals, and timeline. We&apos;ll help shape a clear, strategic path from concept to launch.
                    </p>

                    <div className="mt-8 space-y-4 text-sm text-slate-200/80">
                        <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
                                <MessageSquareText size={16} />
                            </span>
                            Response in 24-48 hours
                        </div>
                    </div>

                    <div className="relative mt-10 rounded-[30px] p-[1px] shadow-[0_0_35px_rgba(96,165,250,0.28),0_0_80px_rgba(168,85,247,0.18)]">
                        <SpotlightCard
                            className="rounded-[29px] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl sm:p-7"
                            spotlightColor="rgba(96, 165, 250, 0.18)"
                        >
                            <form className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block text-sm text-slate-200">
                                        <span className="mb-2 block">Name</span>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 transition-colors duration-200 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                                        />
                                    </label>

                                    <label className="block text-sm text-slate-200">
                                        <span className="mb-2 block">Email</span>
                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 transition-colors duration-200 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                                        />
                                    </label>
                                </div>

                                <label className="block text-sm text-slate-200">
                                    <span className="mb-2 block">Project</span>
                                    <input
                                        type="text"
                                        placeholder="Brand identity, website, app..."
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 transition-colors duration-200 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                                    />
                                </label>

                                <label className="block text-sm text-slate-200">
                                    <span className="mb-2 block">Message</span>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us a little about your goals and timeline..."
                                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 transition-colors duration-200 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                                    />
                                </label>
                                <SpecularButton
                                    type="submit"
                                    size="lg"
                                    radius={18}
                                    tint="#ffffff"
                                    tintOpacity={0}
                                    blur={0}
                                    textColor="#f5f5f5"
                                    lineColor="#ffffff"
                                    baseColor="#525252"
                                    intensity={1}
                                    shineSize={10}
                                    shineFade={40}
                                    thickness={1}
                                    speed={0.35}
                                    followMouse
                                    proximity={450}
                                    autoAnimate={false}
                                    className="w-full gap-2"
                                >
                                    Send inquiry
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </SpecularButton>
                            </form>
                        </SpotlightCard>
                    </div>
                </div>
            </div>

            {/* OVERLAY DE DEGRADADO INFERIOR */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[35vh] bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </section>
    );
}
