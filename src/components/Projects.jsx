import React, { useState } from 'react';
import { BookOpen, MessageSquare, Leaf, ExternalLink } from 'lucide-react';

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
);

const ProjectCard = ({ title, description, githubUrl, imgUrl, type, badge }) => {
    const [imgError, setImgError] = useState(false);

    const renderFallback = () => {
        switch (type) {
            case 'elearning':
                return (
                    <div className="project-img-placeholder">
                        <BookOpen size={44} />
                        <div style={{ fontSize: '0.82rem', opacity: 0.7, marginTop: '0.25rem' }}>Interactive Learning Dashboard</div>
                        <div style={{ width: '70%', height: '5px', background: '#3f3f46', borderRadius: '3px', position: 'relative', marginTop: '0.5rem' }}>
                            <div style={{ width: '70%', height: '100%', background: 'var(--accent-color)', borderRadius: '3px' }} />
                        </div>
                    </div>
                );
            case 'konnect':
                return (
                    <div className="project-img-placeholder">
                        <MessageSquare size={44} />
                        <div style={{ fontSize: '0.82rem', opacity: 0.7, marginTop: '0.25rem' }}>Real-Time Messaging Interface</div>
                        <div style={{ display: 'flex', gap: '0.5rem', width: '70%', flexDirection: 'column', marginTop: '0.5rem' }}>
                            <div style={{ width: '55%', height: '8px', background: 'var(--border-color)', borderRadius: '4px', alignSelf: 'flex-start' }} />
                            <div style={{ width: '65%', height: '8px', background: 'rgba(245,158,11,0.25)', borderRadius: '4px', alignSelf: 'flex-end' }} />
                            <div style={{ width: '45%', height: '8px', background: 'var(--border-color)', borderRadius: '4px', alignSelf: 'flex-start' }} />
                        </div>
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
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    <GithubIcon /> View on GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    const projectsList = [
        {
            title: 'Food Rescue',
            description: 'A full-stack food rescue platform that connects food donors with NGOs and volunteers to reduce wastage and feed those in need — built as my Final Year Project.',
            githubUrl: 'https://github.com/Vincentmx2000/Food-Rescue',
            imgUrl: '/projects/foodrescue.png',
            type: 'foodrescue',
            badge: '⭐ Final Year Project'
        },
        {
            title: 'E-Learning Platform',
            description: 'An interactive e-learning platform designed to deliver courses, track progress, and enhance learning through video lessons and assessments.',
            githubUrl: 'https://github.com/Vincentmx2000/E-LEARNING-PLATFORM-UI',
            imgUrl: '/projects/elearning.png',
            type: 'elearning',
            badge: null
        },
        {
            title: 'Konnect Chat App',
            description: 'Konnect is a real-time chat application that enables instant messaging between users with live updates and a seamless user experience.',
            githubUrl: 'https://github.com/Vincentmx2000/REAL-TIME-CHAT-APPLICATION',
            imgUrl: '/projects/konnect.png',
            type: 'konnect',
            badge: null
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
                            githubUrl={project.githubUrl}
                            imgUrl={project.imgUrl}
                            type={project.type}
                            badge={project.badge}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
