import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const InstagramIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic Client-Side Validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please provide a valid email address.' });
            return;
        }

        setStatus({ type: 'loading', message: '' });

        // Simulate form submission (e.g. Formspree / EmailJS)
        setTimeout(() => {
            setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const contactDetails = [
        {
            icon: <Mail size={22} />,
            label: 'Email Address',
            value: 'jeniferamose@gmail.com',
            href: 'mailto:jeniferamose@gmail.com'
        },
        {
            icon: <Phone size={22} />,
            label: 'Phone Number',
            value: '+91 9566239154',
            href: 'tel:9566239154'
        }
    ];

    const socialLinks = [
        {
            icon: <GithubIcon size={20} />,
            url: 'https://github.com/Vincentmx2000',
            label: 'GitHub'
        },
        {
            icon: <LinkedinIcon size={20} />,
            url: 'https://www.linkedin.com/in/vincent-a-969b0131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            label: 'LinkedIn'
        },
        {
            icon: <InstagramIcon size={20} />,
            url: 'https://www.instagram.com/invites/contact/?igsh=81i2qrjnpyyg&utm_content=ktso152',
            label: 'Instagram'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a question or want to work together? Drop me a message below!</p>
            </div>

            <div className="contact-container">
                <div className="contact-info-panel">
                    <h3>Contact Information</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Feel free to reach out directly through email, phone, or connect with me via social channels.
                    </p>

                    <div className="contact-details">
                        {contactDetails.map((detail, index) => (
                            <div className="contact-card" key={index}>
                                <div className="contact-icon-box">
                                    {detail.icon}
                                </div>
                                <div className="contact-info-content">
                                    <h4>{detail.label}</h4>
                                    <a href={detail.href}>{detail.value}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2.5rem' }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                            Follow Me
                        </h4>
                        <div className="contact-social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero-social-btn"
                                    title={social.label}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="contact-form-panel">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Your email address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Subject of your message"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Write your message here..."
                                required
                            />
                        </div>

                        {status && (
                            <div className={`form-status ${status.type}`}>
                                {status.type === 'loading' ? 'Sending message...' : status.message}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={status?.type === 'loading'}
                            style={{ alignSelf: 'flex-start', border: 'none' }}
                        >
                            {status?.type === 'loading' ? 'Sending...' : 'Send Message'} <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
