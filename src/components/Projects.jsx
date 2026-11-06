import React, { useState } from 'react';
import { Leaf, TrendingUp, Layers, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const ProjectCard = ({ title, description, liveUrl, githubUrl, imgUrl, type, badge, techStack }) => {
    const [imgError, setImgError] = useState(false);

    const renderFallback = () => {
        switch (type) {
            case 'ledgerflow':
                return (
                    <div className="project-img-placeholder" style={{ background: 'linear-gradient(135deg, #071f1e 0%, #09090b 100%)' }}>
                        <TrendingUp size={44} style={{ color: 'var(--accent-color)' }} />
                        <div style={{ fontSize: '0.82rem', opacity: 0.8, marginTop: '0.25rem', color: 'var(--accent-color)' }}>Smart Ledger Management System</div>
                    </div>
                );
            case 'multitenant':
                return (
                    <div className="project-img-placeholder" style={{ background: 'linear-gradient(135deg, #18182b 0%, #09090b 100%)' }}>
                        <Layers size={44} style={{ color: '#f59e0b' }} />
                        <div style={{ fontSize: '0.82rem', opacity: 0.8, marginTop: '0.25rem', color: '#fbbf24' }}>Multi-Tenant Management System</div>
                    </div>
                );
            case 'foodrescue':
            default:
                return (
                    <div className="project-img-placeholder" style={{ background: 'linear-gradient(135deg, #0d2818 0%, #09090b 100%)' }}>
                        <Leaf size={44} style={{ color: '#4ade80' }} />
                        <div style={{ fontSize: '0.82rem', opacity: 0.8, marginTop: '0.25rem', color: '#86efac' }}>Food Rescue Platform</div>
                        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.6rem' }}>
                            {['🍎', '🥦', '🍞'].map((emoji, i) => (
                                <span key={i} style={{
                                    background: 'rgba(74,222,128,0.1)',
                                    border: '1px solid rgba(74,222,128,0.2)',
                                    borderRadius: '8px',
                                    padding: '0.35rem 0.5rem',
                                    fontSize: '1.1rem'
                                }}>{emoji}</span>
                            ))}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="project-card">
            <div className="project-img-container">
                {badge && (
                    <div className="project-badge">{badge}</div>
                )}
                {imgError ? (
                    renderFallback()
                ) : (
                    <img
                        src={imgUrl}
                        alt={title}
                        className="project-img"
                        onError={() => setImgError(true)}
                    />
                )}
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>

                {techStack && techStack.length > 0 && (
                    <div className="project-tech-stack">
                        {techStack.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                )}

                <div className="project-actions">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-primary"
                    >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-secondary"
                    >
                        <GithubIcon size={16} />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const githubProfileUrl = 'https://github.com/Vincentmx2000';
    const viewAllReposUrl = `${githubProfileUrl}/?tab=repositories`;

    const projectsList = [
        {
            title: 'Food Rescue',
            description: 'A full-stack food rescue platform that connects food donors with NGOs and volunteers to reduce wastage and feed those in need — built as my Final Year Project.',
            liveUrl: 'https://food-rescue-nine.vercel.app/',
            githubUrl: 'https://github.com/Vincentmx2000/Food-Rescue',
            imgUrl: '/projects/foodrescue.png',
            type: 'foodrescue',
            badge: '⭐ Final Year Project',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet.js']
        },
        {
            title: 'LedgerFlow – Smart Ledger Management System',
            description: 'A full-stack smart ledger management system for tracking transactions, managing financial records, and organizing business operations with dynamic role-based access control.',
            liveUrl: 'https://ledger-flow-six.vercel.app/',
            githubUrl: 'https://github.com/Vincentmx2000/LedgerFlow',
            imgUrl: '/projects/ledgerflow.png',
            type: 'ledgerflow',
            badge: null,
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT']
        },
        {
            title: 'Multi-Tenant Management System',
            description: 'A multi-tenant project and workflow management system designed to manage organizations, projects, and tasks with secure tenant isolation and role-based access control.',
            liveUrl: 'https://multi-tenant-project-and-workflow-m.vercel.app',
            githubUrl: 'https://github.com/Vincentmx2000/multi-tenant-project-and-workflow-management-system',
            imgUrl: '/projects/multitenant.png',
            type: 'multitenant',
            badge: null,
            techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'JWT']
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2 className="section-title">Recent Projects</h2>
                <p className="section-subtitle">A showcase of my recent work, coding repositories, and development designs.</p>
            </div>

            <div className="projects-container">
                <div className="projects-grid">
                    {projectsList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            imgUrl={project.imgUrl}
                            type={project.type}
                            badge={project.badge}
                            techStack={project.techStack}
                        />
                    ))}
                </div>

                <div className="view-all-projects-container">
                    <a
                        href={viewAllReposUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-view-all-projects"
                    >
                        <GithubIcon size={18} />
                        <span>View All Projects</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
