import { Box } from 'lucide-react';
import { SpotlightCard } from '@/components/SpotlightCard';


export const About = () => {

  return (
    <section id="about" className="bg-black px-4 py-24 text-white sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.22em] text-violet-300 uppercase">
          - Discover <span translate='no' className='notranslate'> Environment </span>
        </p>
        <SpotlightCard className="p-7 sm:p-10 lg:p-14" spotlightColor="rgba(82, 39, 255, 0.34)">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
            <div className="order-2 md:order-1">
              <div className="mb-6 flex items-center gap-3 text-violet-200">
                <span className="grid size-10 place-items-center rounded-full border border-violet-300/25 bg-violet-400/10">
                  <Box size={20} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium tracking-wide">Smart solutions</span>
              </div>
              <h2 translate='no' className="notranslate max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Environment
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                <span translate='no' className='notranslate'>Environment</span>  is a technology company focused on transforming the way businesses operate through software, automation, and artificial intelligence.
              </p>
            </div>

            <div className="order-1 flex justify-center md:order-2">
              <div className="grid size-44 place-items-center rounded-3xl border border-white/10 bg-black/40 p-7 shadow-[0_0_70px_rgba(82,39,255,0.22)] sm:size-52 sm:p-9">
                <img
                  src="/Icon.png"
                  alt="Logo de Environment"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>   
    </section>
  );
};
