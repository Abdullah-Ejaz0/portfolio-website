export interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    highlights: string[];
    tags: string[];
    category: 'AI/ML' | 'Full-Stack' | 'NLP';
    accentColor: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'MedAI Assistant',
        year: '2026',
        description:
            'AI-powered medical intake & clinical decision support system with adaptive generative interviews.',
        highlights: [
            'Generative AI-based adaptive interviews and summaries',
            'Red flag detection with structured clinical reports',
            'Backend integration and advanced prompt engineering',
        ],
        tags: ['Generative AI', 'Prompt Engineering', 'NLP', 'Python', 'LLM'],
        category: 'AI/ML',
        accentColor: 'rgba(0, 229, 255, 0.6)',
    },
    {
        id: 2,
        title: 'News Bias Analyzer',
        year: '2025',
        description:
            'English + Urdu stance & sentiment analysis pipeline trained on 80,000+ articles with pseudo-labeling.',
        highlights: [
            'Dataset: 80,000 articles with pseudo-labeling strategy',
            'Models: BiLSTM, XLM-RoBERTa, TextCNN, Logistic Regression, Random Forest',
            '84% stance accuracy · 80% sentiment accuracy',
        ],
        tags: ['NLP', 'PyTorch', 'XLM-RoBERTa', 'BiLSTM', 'scikit-learn'],
        category: 'NLP',
        accentColor: 'rgba(139, 92, 246, 0.6)',
    },
    {
        id: 3,
        title: 'FastStay',
        year: '2025',
        description:
            'Full-featured hostel management system with authentication, database integration, and real-time availability.',
        highlights: [
            'React frontend with Node.js + Express backend',
            'Dual-database setup: SQL Server + PostgreSQL',
            'Full authentication and session management',
        ],
        tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'SQL Server'],
        category: 'Full-Stack',
        accentColor: 'rgba(59, 130, 246, 0.6)',
    },
    {
        id: 4,
        title: 'MovieMate',
        year: '2025',
        description:
            'Cinema booking system with interactive seat selection and real-time availability tracking.',
        highlights: [
            'Interactive seat selection interface',
            'Real-time availability with instant updates',
            'Full-stack implementation end-to-end',
        ],
        tags: ['React', 'Node.js', 'SQL', 'Full-Stack', 'Real-time'],
        category: 'Full-Stack',
        accentColor: 'rgba(16, 185, 129, 0.6)',
    },
];