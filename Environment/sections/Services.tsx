import {
    ArrowUpRight,
    Bot,
    ChartNoAxesCombined,
    CloudCog,
    Code2,
    PlugZap,
    Workflow,
} from 'lucide-react';
import { SpotlightCard } from '@/components/SpotlightCard';

const services = [
    {
        id: 'custom-software',
        title: 'Custom Software',
        description:
            'We build software tailored to your business, processes, and specific operational needs.',
        features: [
            'Web Applications',
            'Mobile Applications',
            'Business Systems',
            'SaaS Platforms',
        ],
        icon: Code2,
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        description:
            'We integrate artificial intelligence into real business workflows to improve efficiency and decision-making.',
        features: [
            'AI Assistants',
            'Document Processing',
            'AI Agents',
            'Intelligent Workflows',
        ],
        icon: Bot,
    },
    {
        id: 'business-automation',
        title: 'Business Automation',
        description:
            'We transform manual processes into efficient digital workflows that save time and reduce operational friction.',
        features: [
            'Workflow Automation',
            'Process Optimization',
            'Automated Reports',
            'Notifications & Approvals',
        ],
        icon: Workflow,
    },
    {
        id: 'system-integration',
        title: 'System Integration',
        description:
            'We connect platforms, services, APIs, and business systems so your technology works as one ecosystem.',
        features: [
            'REST APIs',
            'Third-Party Integrations',
            'Data Synchronization',
            'System Connectivity',
        ],
        icon: PlugZap,
    },
    {
        id: 'data-analytics',
        title: 'Data & Analytics',
        description:
            'We turn business data into clear dashboards, insights, and tools that support better decision-making.',
        features: [
            'Business Dashboards',
            'Data Visualization',
            'KPIs & Metrics',
            'Automated Reporting',
        ],
        icon: ChartNoAxesCombined,
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        description:
            'We deploy, manage, and optimize digital infrastructure to build reliable and scalable software environments.',
        features: [
            'Cloud Deployment',
            'Docker',
            'CI/CD',
            'Monitoring & Infrastructure',
        ],
        icon: CloudCog,
    },
];

export const Services = () => {
    return (
        <section id="services" className="bg-black px-4 py-24 text-white sm:px-6 lg:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="mb-4 flex items-center justify-end gap-2 text-sm font-semibold tracking-[0.22em] text-violet-300 uppercase">
                    - Our Services
                </p>

                <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                        Technology that moves your business forward.
                    </h2>
                    <p className="max-w-md text-base leading-7 text-zinc-400">
                        From custom software to cloud infrastructure, we create connected solutions for the way you work.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ id, title, description, features, icon: Icon }, index) => (
                        <SpotlightCard
                            key={id}
                            className="group flex h-full flex-col rounded-3xl border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-violet-300/25 sm:p-7"
                            spotlightColor="rgba(82, 39, 255, 0.2)"
                        >
                            <div className="mb-7 flex items-center justify-between">
                                <span className="grid size-12 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200 transition-colors group-hover:border-violet-300/40 group-hover:bg-violet-400/15">
                                    <Icon size={21} aria-hidden="true" />
                                </span>
                                <span className="flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-zinc-500">
                                    0{index + 1}
                                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-200" aria-hidden="true" />
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                {title}
                            </h3>
                            <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">
                                {description}
                            </p>

                            <ul className="mt-6 grid gap-3 border-t border-white/10 pt-5">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <span className="size-1.5 shrink-0 rounded-full bg-violet-300/80" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
