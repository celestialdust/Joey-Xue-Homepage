import React from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Interests from './Interests';
import Contact from './Contact';

function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-6">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <footer className="bg-white bg-opacity-10 py-6 text-center">
        <p>&copy; 2024 Jiayu Xue. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;

