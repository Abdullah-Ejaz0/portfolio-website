const Hero: React.FC = () => {
    const handleScroll = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center grid-bg overflow-hidden"
        >
            {/* Orbs */}
            <div
                className="orb w-96 h-96 -top-24 -right-24 opacity-20"
                style={{ background: 'var(--accent-cyan)' }}
            />
            <div
                className="orb w-80 h-80 bottom-10 -left-20 opacity-10"
                style={{ background: 'var(--accent-purple)' }}
            />
            <div
                className="orb w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
                style={{ background: 'var(--accent-blue)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
                {/* Status badge */}
                <div className="fade-in-up fade-in-up-1 inline-flex items-center gap-2 mb-8">
                    <span
                        className="text-xs font-mono px-3 py-1.5 rounded-full border flex items-center gap-2"
                        style={{
                            borderColor: 'rgba(0, 229, 255, 0.25)',
                            background: 'rgba(0, 229, 255, 0.06)',
                            color: 'var(--accent-cyan)',
                            fontFamily: "'DM Mono', monospace",
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                        Available for internships · 2026
                    </span>
                </div>

                {/* Main heading */}
                <div className="fade-in-up fade-in-up-2 mb-4">
                    <p
                        className="section-label mb-3"
                    >
                        Hello, I'm
                    </p>
                    <h1
                        className="font-display text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-2"
                        style={{ fontWeight: 800 }}
                    >
                        <span style={{ color: 'var(--text-primary)' }}>Abdullah</span>
                        <br />
                        <span className="gradient-text">Ejaz</span>
                    </h1>
                </div>

                {/* Title row */}
                <div className="fade-in-up fade-in-up-3 flex items-center gap-3 mb-6">
                    <div
                        className="h-px w-12 animated-border rounded"
                        style={{ height: '2px' }}
                    />
                    <span
                        className="font-mono text-sm tracking-widest uppercase"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Aspiring AI/ML Engineer
                    </span>
                </div>

                {/* Tagline */}
                <p
                    className="fade-in-up fade-in-up-3 text-xl md:text-2xl max-w-xl mb-10 leading-relaxed"
                    style={{ color: 'var(--text-secondary)', fontWeight: 300 }}
                >
                    Building intelligent systems using{' '}
                    <span style={{ color: 'var(--text-primary)', fontWeight: 400 }}>
                        deep learning, NLP,
                    </span>{' '}
                    and{' '}
                    <span style={{ color: 'var(--text-primary)', fontWeight: 400 }}>
                        generative AI
                    </span>
                </p>

                {/* CTA buttons */}
                <div className="fade-in-up fade-in-up-4 flex flex-wrap gap-4 mb-20">
                    <button
                        onClick={() => handleScroll('#projects')}
                        className="btn-primary text-sm"
                    >
                        View Projects →
                    </button>
                    <button
                        onClick={() => handleScroll('#contact')}
                        className="btn-outline text-sm"
                    >
                        Get in Touch
                    </button>
                </div>

                {/* Stats row */}
                <div
                    className="fade-in-up fade-in-up-5 grid grid-cols-3 gap-6 pt-8 border-t max-w-sm"
                    style={{ borderColor: 'var(--border)' }}
                >
                    {[
                        { value: '4+', label: 'Projects' },
                        { value: '2027', label: 'Graduating' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div
                                className="font-display text-2xl font-bold gradient-text-blue"
                            >
                                {stat.value}
                            </div>
                            <div
                                className="font-mono text-xs mt-0.5"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll hint */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up fade-in-up-5"
            >
                <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    scroll
                </span>
                <div
                    className="w-px h-10 animated-border"
                    style={{ width: '1px' }}
                />
            </div>
        </section>
    );
};

export default Hero;