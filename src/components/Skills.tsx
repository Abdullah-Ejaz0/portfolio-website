interface SkillGroupProps {
    label: string;
    icon: string;
    skills: string[];
    accentColor: string;
}

const skillGroups: SkillGroupProps[] = [
    {
        label: 'Languages',
        icon: '{ }',
        accentColor: 'var(--accent-cyan)',
        skills: ['Python', 'C++', 'C', 'C#', 'Java', 'JavaScript', 'SQL', 'Assembly', 'HTML/CSS'],
    },
    {
        label: 'Frameworks',
        icon: '⚙',
        accentColor: '#60a5fa',
        skills: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'SQL Server'],
    },
    {
        label: 'AI / ML',
        icon: '🧠',
        accentColor: '#a78bfa',
        skills: [
            'PyTorch',
            'TensorFlow',
            'scikit-learn',
            'NLP',
            'Computer Vision',
            'Generative AI',
            'Prompt Engineering',
        ],
    },
    {
        label: 'Tools & Dev',
        icon: '🔧',
        accentColor: '#34d399',
        skills: ['Git', 'VS Code', 'Android Studio'],
    },
];

const SkillGroup: React.FC<SkillGroupProps> = ({ label, icon, skills, accentColor }) => (
    <div
        className="glass-card rounded-lg p-6"
        style={{ borderColor: 'var(--border)' }}
    >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
            <div
                className="w-9 h-9 rounded flex items-center justify-center font-mono text-sm font-bold"
                style={{
                    background: `${accentColor}18`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`,
                }}
            >
                {icon}
            </div>
            <h3
                className="font-display font-semibold text-base"
                style={{ color: 'var(--text-primary)' }}
            >
                {label}
            </h3>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 rounded text-xs border"
                    style={{
                        borderColor: 'rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.03)',
                        color: 'var(--text-secondary)',
                    }}
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="relative py-28 overflow-hidden">
            {/* Orb */}
            <div
                className="orb w-80 h-80 top-10 right-1/4 opacity-10"
                style={{ background: 'var(--accent-purple)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-16">
                    <p className="section-label mb-3">What I work with</p>
                    <h2
                        className="font-display text-4xl md:text-5xl font-bold"
                        style={{ fontWeight: 700 }}
                    >
                        <span style={{ color: 'var(--text-primary)' }}>Tech </span>
                        <span className="gradient-text">Stack</span>
                    </h2>
                </div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {skillGroups.map((group) => (
                        <SkillGroup key={group.label} {...group} />
                    ))}
                </div>

                {/* Bottom quote */}
                <div
                    className="mt-14 glass-card rounded-lg p-6 flex items-start gap-4"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <div
                        className="font-display text-4xl font-bold leading-none mt-1"
                        style={{ color: 'var(--accent-cyan)', opacity: 0.4 }}
                    >
                        "
                    </div>
                    <p
                        className="text-base italic"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Passionate about{' '}
                        <span style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}>
                            solving complex problems
                        </span>{' '}
                        at the intersection of artificial intelligence and real-world applications.
                        Constantly learning, constantly building.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;