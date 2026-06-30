import React, { useState, useEffect, useRef } from 'react';
import { Download, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

const StatCard = ({ target, suffix = '', label }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 1500;
                    const stepTime = Math.abs(Math.floor(duration / target));

                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= target) {
                            clearInterval(timer);
                            setCount(target);
                        }
                    }, Math.max(stepTime, 16));
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [target]);

    return (
        <div className="stat-card" ref={elementRef}>
            <div className="stat-num">{count}{suffix}</div>
            <div className="stat-divider" />
            <div className="stat-lbl">{label}</div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="about">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">A brief introduction about my background, aspirations, and experience.</p>
            </div>

            <div className="about-grid">
                <div className="about-text">
                    <p>
                        Hello! I'm Vincent, a passionate developer with a keen interest in creating innovative digital experiences.
                        My journey in technology is driven by curiosity and creativity, particularly in Web development and web designing.
                        I believe in pushing boundaries and bringing fresh perspectives to every project I undertake.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                        or experimenting with web development. I'm constantly learning and evolving in this ever-changing tech landscape.
                    </p>
                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <ExternalLink size={18} /> View Resume
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Vincent_Resume.pdf"
                            className="btn-secondary"
                        >
                            <Download size={18} /> Download CV
                        </a>
                    </div>
                </div>

                <div className="about-stats">
                    <StatCard target={10} suffix="+" label="GitHub Repositories" />
                    <StatCard target={2} suffix="" label="University Degrees" />
                    <StatCard target={6} suffix="+" label="Skills Mastered" />
                </div>
            </div>
        </section>
    );
};

export default About;
