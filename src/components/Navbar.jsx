import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px', // Trigger when section is in viewport center
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        setMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                Portfolio.
            </div>

            <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <button 
                className="hamburger" 
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
            >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
};

export default Navbar;
