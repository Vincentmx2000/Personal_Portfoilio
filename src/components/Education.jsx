import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: 'Master of Computer Applications (MCA)',
            school: 'S.A Engineering College',
            year: '2024 - 2026'
        },
        {
            degree: 'B.Sc in Computer Science',
            school: 'Madras University',
            year: '2021 - 2024'
        }
    ];

    return (
        <section id="education" className="education">
            <div className="section-header">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">My academic foundations and learning milestones.</p>
            </div>

            <div className="education-container">
                {educationData.map((item, index) => (
                    <div className="education-card" key={index}>
                        <span className="edu-year">{item.year}</span>
                        <h3 className="edu-degree">{item.degree}</h3>
                        <p className="edu-school">{item.school}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
