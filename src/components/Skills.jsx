import React from 'react';

/* ── Vibrant, properly-branded SVG icons ── */
const icons = {
    html5: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6l3.6 40L24 50l12.4-4L40 6H8z" fill="#E44D26"/>
            <path d="M24 46.4l10-2.8L36.8 10H24v36.4z" fill="#F16529"/>
            <path d="M24 21h-6.5l-.4-5H24v-5H12.2l1.2 13H24v-3zM24 33.4l-5-1.4-.3-3.8H13.5l.6 7 9.9 2.8v-4.6z" fill="#EBEBEB"/>
            <path d="M23.9 21h6.1l-.6 7H24v-3h5.3l.3-4zM24 33.4v4.6l9.8-2.8.7-7H30l-.3 3.8-5.7 1.4z" fill="white"/>
        </svg>
    ),
    css3: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6l3.6 40L24 50l12.4-4L40 6H8z" fill="#264DE4"/>
            <path d="M24 46.4l10-2.8L36.8 10H24v36.4z" fill="#2965F1"/>
            <path d="M24 21h-6.5l-.4-5H24v-5H12.2l1.2 13H24v-3zM15.2 28l.4 4.8 8.4 2.3V30l-8.8-2z" fill="#EBEBEB"/>
            <path d="M24 21h5.5l-.5 6.5-5 1.4v4.5l8.3-2.3 1.5-16.1H24v5.9zM24 25v5l4.8-1.3.4-3.7H24z" fill="white"/>
        </svg>
    ),
    javascript: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="4" fill="#F7DF1E"/>
            <path d="M26.5 36.5c.8 1.3 1.9 2.3 3.8 2.3 1.6 0 2.6-.8 2.6-1.9 0-1.3-.7-1.8-2.5-2.6l-.9-.4c-2.5-1.1-4.1-2.4-4.1-5.2 0-2.6 2-4.6 5.1-4.6 2.2 0 3.8.8 4.9 2.8l-2.7 1.7c-.6-1-1.2-1.4-2.2-1.4-1 0-1.7.6-1.7 1.4 0 1 .7 1.4 2.2 2.1l.9.4c2.9 1.3 4.6 2.5 4.6 5.4 0 3.1-2.4 4.9-5.7 4.9-3.2 0-5.2-1.5-6.2-3.6l2.9-1.3zM14.5 36.8c.6 1 1.1 1.9 2.3 1.9.9 0 1.5-.5 1.5-2.3V24.5H21V36.5c0 3.8-2.2 5.5-5.5 5.5-2.9 0-4.6-1.5-5.5-3.3l2.5-1.9z" fill="#323330"/>
        </svg>
    ),
    react: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="4.5" fill="#61DAFB"/>
            <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2" fill="none"/>
            <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)"/>
            <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)"/>
        </svg>
    ),
    python: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5A9FD4"/>
                    <stop offset="100%" stopColor="#306998"/>
                </linearGradient>
                <linearGradient id="pyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD43B"/>
                    <stop offset="100%" stopColor="#FFE873"/>
                </linearGradient>
            </defs>
            <path d="M24.05 4C18.3 4 14 6.4 14 10v4h10v2H9C5.2 16 2 19.5 2 24.1v6.8C2 35.5 5.2 38 9 38h3v-5c0-4.5 3.8-8 8-8h10c3.5 0 6-2.5 6-6V10c0-3.4-3.8-6-11.95-6zM18 12a2 2 0 110-4 2 2 0 010 4z" fill="url(#pyGrad1)"/>
            <path d="M24 44c5.75 0 10-2.4 10-6v-4H24v-2h15c3.8 0 7-3.5 7-8.1v-6.8C46 12.5 42.8 10 39 10h-3v5c0 4.5-3.8 8-8 8H18c-3.5 0-6 2.5-6 6v8c0 3.4 3.8 6 12 6zm5.95-8a2 2 0 110 4 2 2 0 010-4z" fill="url(#pyGrad2)"/>
        </svg>
    ),
    git: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.3 21.7L26.3 3.7a3.95 3.95 0 00-5.6 0l-3.9 3.9 4.9 4.9a4.7 4.7 0 015.9 5.9l4.7 4.7a4.7 4.7 0 11-2.8 2.7L25 21.1v11.7a4.7 4.7 0 11-3.8-.2V20.8a4.7 4.7 0 01-2.6-6.1L13.8 9.9 3.7 20c-1.5 1.6-1.5 4 0 5.6l18 18a3.95 3.95 0 005.6 0l17-17a3.95 3.95 0 000-4.9z" fill="#F05033"/>
        </svg>
    ),
    figma: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="4" width="14" height="20" rx="7" fill="#F24E1E"/>
            <rect x="22" y="4" width="14" height="20" rx="7" fill="#FF7262"/>
            <rect x="8" y="24" width="14" height="20" rx="7" fill="#A259FF"/>
            <circle cx="29" cy="34" r="7" fill="#1ABCFE"/>
            <rect x="8" y="14" width="14" height="20" rx="7" fill="#0ACF83"/>
        </svg>
    ),
    nodejs: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L6 14.4v20.8L24 45.6l18-10.4V14.4L24 4z" fill="#339933"/>
            <path d="M24 10.4l12.7 7.3v14.6L24 39.6l-12.7-7.3V17.7L24 10.4z" fill="#1F2937"/>
            <path d="M24 13.5v22l9.5-5.5V19L24 13.5z" fill="#68A063"/>
        </svg>
    ),
    express: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="8" fill="#151515"/>
            <text x="24" y="30" fill="#ffffff" font-family="'Poppins', sans-serif" font-size="20" font-weight="bold" text-anchor="middle">ex</text>
        </svg>
    ),
    mongodb: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2C24 2 15 11 15 22C15 32 23 44 24 46C25 44 33 32 33 22C33 11 24 2 24 2Z" fill="#47A248"/>
            <path d="M24 2V46C24 46 24.5 45.7 25 45C25.5 44.3 33 32 33 22C33 11 24 2 24 2Z" fill="#589636"/>
            <path d="M24 8C24 8 20 14 20 22C20 28 23 35 24 37V8Z" fill="#3F3F3F" opacity="0.3"/>
        </svg>
    ),
    mysql: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C14 4 6 12 6 22C6 32 14 40 24 40C34 40 42 32 42 22C42 12 34 4 24 4ZM24 36C16.3 36 10 29.7 10 22C10 14.3 16.3 8 24 8C31.7 8 38 14.3 38 22C38 29.7 31.7 36 24 36Z" fill="#00758F"/>
            <path d="M24 12C18.5 12 14 16.5 14 22C14 27.5 18.5 32 24 32C29.5 32 34 27.5 34 22C34 16.5 29.5 12 24 12ZM24 28C20.7 28 18 25.3 18 22C18 18.7 20.7 16 24 16C27.3 16 30 18.7 30 22C30 25.3 27.3 28 24 28Z" fill="#F29111"/>
        </svg>
    ),
    canva: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="url(#canvaGrad)"/>
            <defs>
                <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C4CC"/>
                    <stop offset="100%" stopColor="#7D2AE8"/>
                </linearGradient>
            </defs>
            <text x="24" y="30" fill="#ffffff" font-family="'Poppins', sans-serif" font-size="22" font-weight="bold" text-anchor="middle">C</text>
        </svg>
    ),
    vscode: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 4L10 14L4 12L2 14V34L4 36L10 34L34 44L44 39V9L34 4Z" fill="#007ACC"/>
            <path d="M34 4L18 24L34 44V4Z" fill="#1F9CF0"/>
            <path d="M4 12L18 24L4 36V12Z" fill="#AE81FF"/>
            <path d="M10 14L2 14V34L10 34V14Z" fill="#0066B3" opacity="0.3"/>
        </svg>
    ),
    bash: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="8" fill="#151515"/>
            <text x="10" y="30" fill="#39FF14" font-family="monospace" font-size="24" font-weight="bold">&gt;_</text>
        </svg>
    )
};

const skillsList = [
    { name: 'React',       color: '#61DAFB', bg: 'rgba(97,218,251,0.08)',  icon: icons.react },
    { name: 'Node.js',     color: '#339933', bg: 'rgba(51,153,51,0.08)',   icon: icons.nodejs },
    { name: 'Express.js',  color: '#FFFFFF', bg: 'rgba(255,255,255,0.08)', icon: icons.express },
    { name: 'MongoDB',     color: '#47A248', bg: 'rgba(71,162,72,0.08)',   icon: icons.mongodb },
    { name: 'JavaScript',  color: '#F7DF1E', bg: 'rgba(247,223,30,0.08)',  icon: icons.javascript },
    { name: 'Python',      color: '#FFD43B', bg: 'rgba(255,212,59,0.08)',  icon: icons.python },
    { name: 'HTML5',       color: '#E44D26', bg: 'rgba(228,77,38,0.08)',   icon: icons.html5 },
    { name: 'CSS3',        color: '#264DE4', bg: 'rgba(38,77,228,0.08)',   icon: icons.css3 },
    { name: 'MySQL',       color: '#00758F', bg: 'rgba(0,117,143,0.08)',   icon: icons.mysql },
    { name: 'Git',         color: '#F05033', bg: 'rgba(240,80,51,0.08)',   icon: icons.git },
    { name: 'Figma',       color: '#A259FF', bg: 'rgba(162,89,255,0.08)',  icon: icons.figma },
    { name: 'Canva',       color: '#7D2AE8', bg: 'rgba(125,42,232,0.08)',  icon: icons.canva },
    { name: 'VS Code',     color: '#007ACC', bg: 'rgba(0,122,204,0.08)',   icon: icons.vscode },
    { name: 'Bash',        color: '#39FF14', bg: 'rgba(57,255,20,0.08)',   icon: icons.bash }
];

/* Duplicate list so the marquee loops seamlessly */
const marqueeItems = [...skillsList, ...skillsList];

const Skills = () => (
    <section id="skills" className="skills-section">
        <div className="section-header">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">
                Technologies and tools I use to build robust, modern full-stack web applications.
            </p>
        </div>

        <div className="skills-marquee-wrapper">
            {/* Fade edges */}
            <div className="marquee-fade marquee-fade-left" />
            <div className="marquee-fade marquee-fade-right" />

            <div className="skills-marquee-track">
                {marqueeItems.map((skill, i) => (
                    <div
                        className="skill-pill"
                        key={i}
                        style={{ '--pill-color': skill.color, '--pill-bg': skill.bg }}
                    >
                        <div className="skill-pill-icon">
                            {skill.icon}
                        </div>
                        <span className="skill-pill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
