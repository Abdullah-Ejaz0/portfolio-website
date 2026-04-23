import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // In production: send to API / email service
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    const contactLinks = [
        {
            label: 'Email',
            value: 'abdullahejaz@example.com',
            href: 'mailto:abdullahejaz@example.com',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
        },
        {
            label: 'GitHub',
            value: 'github.com/abdullahejaz',
            href: 'https://github.com/',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/abdullahejaz',
            href: 'https://linkedin.com/',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            id="contact"
            className="relative py-28 overflow-hidden"
            style={{ background: 'var(--bg-secondary)' }}
        >
            {/* Orbs */}
            <div
                className="orb w-80 h-80 bottom-0 left-0 opacity-10"
                style={{ background: 'var(--accent-cyan)' }}
            />
            <div
                className="orb w-64 h-64 top-10 right-10 opacity-10"
                style={{ background: 'var(--accent-purple)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-16">
                    <p className="section-label mb-3">Let's connect</p>
                    <h2
                        className="font-display text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontWeight: 700 }}
                    >
                        <span style={{ color: 'var(--text-primary)' }}>Get in </span>
                        <span className="gradient-text">Touch</span>
                    </h2>
                    <p
                        className="text-base max-w-md"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Open to internship opportunities, research collaborations, or just a good conversation about AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact links */}
                    <div className="space-y-4">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                className="glass-card rounded-lg p-5 flex items-center gap-4 transition-all duration-300 group block"
                                style={{ borderColor: 'var(--border)', textDecoration: 'none' }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                        'rgba(0, 229, 255, 0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                        'var(--border)';
                                }}
                            >
                                <div
                                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                                    style={{
                                        background: 'rgba(0, 229, 255, 0.08)',
                                        color: 'var(--accent-cyan)',
                                    }}
                                >
                                    {link.icon}
                                </div>
                                <div>
                                    <div
                                        className="font-mono text-xs mb-0.5"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link.label}
                                    </div>
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {link.value}
                                    </div>
                                </div>
                                <svg
                                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    style={{ color: 'var(--accent-cyan)' }}
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Contact form */}
                    <div
                        className="glass-card rounded-lg p-6"
                        style={{ borderColor: 'var(--border)' }}
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4"
                                    style={{ background: 'rgba(0, 229, 255, 0.1)' }}
                                >
                                    ✓
                                </div>
                                <h3
                                    className="font-display text-lg font-semibold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Message Sent!
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    I'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        className="font-mono text-xs block mb-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="font-mono text-xs block mb-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="font-mono text-xs block mb-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about the opportunity..."
                                        className="form-input resize-none"
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full text-sm">
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;