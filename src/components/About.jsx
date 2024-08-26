import React from 'react';
import Logo from './Logo';

const About = () => (
  <section id="about" className="py-20">
    <div className="flex items-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">AI Software Developer & ML Enthusiast</h1>
        <p className="text-xl">University student with a passion for AI, machine learning, and entrepreneurship.</p>
      </div>
      <div className="w-1/2 flex justify-center">
        <Logo className="w-80 h-80" />
      </div>
    </div>
  </section>
);

export default About;