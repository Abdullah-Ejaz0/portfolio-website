import { useState, useEffect } from 'react';

const navItems = [
    { label: '01. about', href: '#about' },
    { label: '02. projects', href: '#projects' },
    { label: '03. skills', href: '#skills' },
    { label: '04. contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (href: string) => {
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass-card border-b'
                    : 'bg-transparent border-b border-transparent'
                }`}
            style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleNav('#hero')}
                    className="flex items-center gap-2 group"
                >
                    <span
                        className="font-display text-lg font-800 gradient-text"
                        style={{ fontWeight: 800 }}
                    >
                        AE
                    </span>
                    <span
                        className="font-mono text-xs pulse-dot"
                        style={{ color: 'var(--accent-cyan)' }}
                    >
                        ●
                    </span>
                </button>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <button
                                onClick={() => handleNav(item.href)}
                                className="nav-link"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Resume CTA */}
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNav('#contact');
                    }}
                    className="hidden md:block btn-outline text-sm"
                    style={{ padding: '0.5rem 1.25rem' }}
                >
                    hire me
                </a>

                {/* Mobile toggle */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-px w-6 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                        style={{ background: 'var(--accent-cyan)' }}
                    />
                    <span
                        className={`block h-px w-4 ml-auto transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                        style={{ background: 'var(--text-secondary)' }}
                    />
                    <span
                        className={`block h-px w-6 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        style={{ background: 'var(--text-secondary)' }}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}
            >
                <div
                    className="glass-card border-t px-6 py-6 flex flex-col gap-5"
                    style={{ borderColor: 'var(--border)' }}
                >
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => handleNav(item.href)}
                            className="nav-link text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNav('#contact')}
                        className="btn-outline text-sm text-left"
                        style={{ padding: '0.5rem 1.25rem', width: 'fit-content' }}
                    >
                        hire me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;