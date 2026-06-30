import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Premium animated background layer */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-blob bg-blob--1" />
        <div className="bg-blob bg-blob--2" />
        <div className="bg-blob bg-blob--3" />
        <div className="bg-blob bg-blob--4" />
        <div className="bg-ring" />
        <div className="bg-grid" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
