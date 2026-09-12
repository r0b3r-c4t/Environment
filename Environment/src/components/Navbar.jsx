import { BriefcaseBusiness, House, Info, Mail, Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import LogoIcon from '@/assets/logos/icon.png';

const navigation = [
    { label: 'Home', href: '#home', icon: House },
    { label: 'About', href: '#about', icon: Info },
    { label: 'Services', href: '#services', icon: BriefcaseBusiness },
    { label: 'Solutions', href: '#solutions', icon: Sparkles },
    { label: 'Contact', href: '#contact', icon: Mail },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-5 z-50 px-4 sm:top-6">
            <nav
                aria-label="Main navigation"
                className="relative mx-auto flex max-w-6xl items-center rounded-3xl border border-white/20 bg-slate-950/45 px-4 py-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-5"
            >

                <div className="mr-auto flex items-center">
                    <a href="#home" className="mr-auto flex items-center">
                        <img
                            src={LogoIcon}
                            alt="Logo"
                            className="h-10 w-auto object-contain"
                        />
                        <span translate="no" className="notranslate ml-2 text-sm font-medium text-white/75">Environment</span>
                    </a>
                </div>



                <div className="hidden items-center gap-1 md:flex">
                    {navigation.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            className="flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium text-white/75 transition-all hover:bg-white/15 hover:text-white"
                        >
                            <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                            {label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                    className="ml-3 grid h-10 w-10 place-items-center rounded-2xl text-white transition-colors hover:bg-white/15 md:hidden"
                >
                    {isOpen ? <X size={21} /> : <Menu size={21} />}
                </button>

                {isOpen && (
                    <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-3xl border border-white/20 bg-slate-950/80 p-2 shadow-xl backdrop-blur-xl md:hidden">
                        {navigation.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                            >
                                <Icon aria-hidden="true" size={17} />
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
