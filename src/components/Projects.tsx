import { projects, type Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const categoryColors: Record<Project['category'], string> = {
    'AI/ML': 'rgba(0, 229, 255, 0.12)',
    'NLP': 'rgba(139, 92, 246, 0.12)',
    'Full-Stack': 'rgba(59, 130, 246, 0.12)',
};

const categoryTextColors: Record<Project['category'], string> = {
    'AI/ML': 'var(--accent-cyan)',
    'NLP': '#a78bfa',
    'Full-Stack': '#60a5fa',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <div
            className="project-card glass-card rounded-lg p-6 flex flex-col h-full"
            style={{ borderColor: 'var(--border)' }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{
                            background: categoryColors[project.category],
                            color: categoryTextColors[project.category],
                        }}
                    >
                        {project.category}
                    </span>
                </div>
                <span
                    className="font-mono text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {project.year}
                </span>
            </div>

            {/* Title */}
            <div className="mb-3">
                <div
                    className="font-mono text-xs mb-1"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {String(index + 1).padStart(2, '0')}.
                </div>
                <h3
                    className="font-display text-xl font-bold"
                    style={{ color: 'var(--text-primary)', fontWeight: 700 }}
                >
                    {project.title}
                </h3>
            </div>

            {/* Description */}
            <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
            >
                {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((h, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <span
                            className="mt-1 flex-shrink-0 w-1 h-1 rounded-full"
                            style={{ background: project.accentColor }}
                        />
                        {h}
                    </li>
                ))}
            </ul>

            {/* Divider */}
            <div className="section-divider mb-4" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="skill-tag px-2.5 py-1 rounded text-xs border"
                        style={{
                            borderColor: 'rgba(255,255,255,0.07)',
                            background: 'rgba(255,255,255,0.02)',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="relative py-28 overflow-hidden"
            style={{ background: 'var(--bg-secondary)' }}
        >
            {/* Orbs */}
            <div
                className="orb w-96 h-96 -top-32 -left-32 opacity-10"
                style={{ background: 'var(--accent-purple)' }}
            />
            <div
                className="orb w-64 h-64 bottom-0 right-0 opacity-10"
                style={{ background: 'var(--accent-cyan)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-16">
                    <p className="section-label mb-3">What I've built</p>
                    <h2
                        className="font-display text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontWeight: 700 }}
                    >
                        <span style={{ color: 'var(--text-primary)' }}>Featured </span>
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p
                        className="text-base max-w-lg"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        A selection of work spanning AI/ML, NLP research, and full-stack development.
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;