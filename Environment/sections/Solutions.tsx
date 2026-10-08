'use client';

import { useRef, useState } from 'react';
import {
    ArrowUpRight,
    BarChart3,
    BrainCircuit,
    Building2,
    ChevronLeft,
    ChevronRight,
    GitMerge,
    RefreshCw,
    Workflow,
} from 'lucide-react';
import { SpotlightCard } from '@/components/SpotlightCard';

const solutions = [
    {
        id: 'business-automation',
        title: 'Business Automation',
        description:
            'We automate repetitive business processes to reduce manual work, errors, and operational costs.',
        features: [
            'Process Automation',
            'Workflow Automation',
            'Task Automation',
            'Notifications & Alerts',
        ],
        icon: Workflow,
    },
    {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        description:
            'We integrate AI into business processes to improve productivity, efficiency, and decision-making.',
        features: [
            'AI-Powered Tools',
            'Intelligent Document Processing',
            'AI Assistants',
            'Local & Private AI',
        ],
        icon: BrainCircuit,
    },
    {
        id: 'custom-business-systems',
        title: 'Custom Business Systems',
        description:
            'We create digital systems designed around the way your business operates and manages its information.',
        features: [
            'Internal Platforms',
            'Management Systems',
            'Customer Portals',
            'Operational Systems',
        ],
        icon: Building2,
    },
    {
        id: 'data-business-intelligence',
        title: 'Data & Business Intelligence',
        description:
            'We transform scattered business data into clear, actionable information for better decision-making.',
        features: [
            'Data Integration',
            'Business Dashboards',
            'Data Analysis',
            'Business Intelligence',
        ],
        icon: BarChart3,
    },
    {
        id: 'system-integration',
        title: 'System Integration',
        description:
            'We connect the systems and tools your business already uses so they can work together seamlessly.',
        features: [
            'API Integrations',
            'ERP & CRM Integration',
            'Database Integration',
            'Data Synchronization',
        ],
        icon: GitMerge,
    },
    {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        description:
            'We modernize traditional processes and technology to help businesses operate more efficiently in a digital environment.',
        features: [
            'Legacy System Modernization',
            'Process Digitization',
            'Technology Migration',
            'Digital Platforms',
        ],
        icon: RefreshCw,
    },
];

export const Solutions = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToSolution = (index: number) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const nextIndex = (index + solutions.length) % solutions.length;
        carousel.scrollTo({
            left: carousel.clientWidth * nextIndex,
            behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
    };

    const handleScroll = () => {
        const carousel = carouselRef.current;
        if (!carousel || carousel.clientWidth === 0) return;

        setActiveIndex(
            Math.round(carousel.scrollLeft / carousel.clientWidth),
        );
    };

    return (
        <section id="solutions" className="bg-black px-4 py-24 text-white sm:px-6 lg:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="mb-4 flex items-center justify-end gap-2 text-sm font-semibold tracking-[0.22em] text-violet-300 uppercase">
                    - Our Solutions
                </p>

                <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                        Practical solutions for complex challenges.
                    </h2>
                    <p className="max-w-md text-base leading-7 text-zinc-400">
                        Explore how we help businesses work smarter, connect their systems, and grow with technology.
                    </p>
                </div>

                <div
                    ref={carouselRef}
                    onScroll={handleScroll}
                    className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    aria-label="Our business solutions"
                    aria-roledescription="carousel"
                >
                    {solutions.map(({ id, title, description, features, icon: Icon }, index) => (
                        <div
                            key={id}
                            className="w-full shrink-0 snap-start px-px"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${solutions.length}: ${title}`}
                        >
                            <SpotlightCard
                                className="grid min-h-[390px] gap-8 rounded-3xl border-white/10 bg-white/[0.025] p-6 sm:min-h-[340px] sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center sm:gap-12 sm:p-10 lg:p-14"
                                spotlightColor="rgba(82, 39, 255, 0.24)"
                            >
                                <div>
                                    <div className="mb-6 flex items-center gap-4">
                                        <span className="grid size-14 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                                            <Icon size={25} aria-hidden="true" />
                                        </span>
                                        <span className="text-xs font-semibold tracking-[0.2em] text-violet-200/70">
                                            SOLUTION {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className="max-w-lg text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                                        {title}
                                    </h3>
                                    <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                                        {description}
                                    </p>
                                </div>

                                <ul className="grid content-center gap-3 sm:grid-cols-2 sm:gap-4">
                                    {features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-zinc-200"
                                        >
                                            <span className="size-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                                            {feature}
                                            <ArrowUpRight className="ml-auto shrink-0 text-zinc-600" size={15} aria-hidden="true" />
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>

                <div className="mt-7 flex items-center justify-center gap-5">
                    <div className="flex items-center justify-center gap-2.5" aria-label="Choose a solution">
                        {solutions.map((solution, index) => (
                            <button
                                key={solution.id}
                                type="button"
                                onClick={() => scrollToSolution(index)}
                                className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 ${
                                    activeIndex === index
                                        ? 'h-3 w-7 bg-violet-300'
                                        : 'size-2.5 bg-white/25 hover:bg-white/50'
                                }`}
                                aria-label={`Go to solution ${index + 1}: ${solution.title}`}
                                aria-current={activeIndex === index ? 'true' : undefined}
                            />
                        ))}
                    </div>

                    <div className="hidden items-center gap-2 sm:flex">
                        <button
                            type="button"
                            onClick={() => scrollToSolution(activeIndex - 1)}
                            className="grid size-10 place-items-center rounded-full border border-white/10 text-white/75 transition-colors hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                            aria-label="Previous solution"
                        >
                            <ChevronLeft size={19} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSolution(activeIndex + 1)}
                            className="grid size-10 place-items-center rounded-full border border-white/10 text-white/75 transition-colors hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                            aria-label="Next solution"
                        >
                            <ChevronRight size={19} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
