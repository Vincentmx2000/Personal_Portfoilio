import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
    const experienceData = [
        {
            role: 'Front-End Developer Intern',
            company: 'CodTech IT Solutions',
            location: 'Virtual Internship',
            year: 'May - June 2025',
            description: 'Virtual Internship – Front-End Web Development',
            certificateUrl: '/Internship_Certificate.pdf',
            highlights: [
                'Developed responsive web applications using React and JavaScript during a 4-week virtual internship, focusing on front-end best practices and component-based architecture',
                'Built and integrated interactive UI components, ensuring consistency in design and functionality across the application',
                'Collaborated using Git version control to manage code changes and maintain a structured development workflow'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="section-header">
                <h2 className="section-title">Work Experience</h2>
                <p className="section-subtitle">My professional journey and hands-on industry experience.</p>
            </div>

            <div className="timeline-container">
                {experienceData.map((item, index) => (
                    <div className="timeline-card" key={index}>
                        <div className="timeline-header">
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                <span className="timeline-year">{item.year}</span>
                                <span className="timeline-badge">{item.location}</span>
                            </div>
                            {item.certificateUrl && (
                                <a 
                                    href={item.certificateUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="timeline-cert-link"
                                >
                                    <ExternalLink size={16} /> View Certificate
                                </a>
                            )}
                        </div>
                        <h3 className="timeline-title">{item.role}</h3>
                        <h4 className="timeline-subtitle">{item.company}</h4>
                        <p className="timeline-desc">{item.description}</p>
                        <ul className="timeline-list">
                            {item.highlights.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
