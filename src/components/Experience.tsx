import React from 'react';
import { Briefcase, Code } from 'lucide-react';

const Experience = () => (
  <section id="experience" className="py-20">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Briefcase className="mb-4" />
        <h3 className="text-xl font-bold mb-2">AI Research Intern</h3>
        <p className="text-gray-300">Company Name • Summer 2023</p>
        <ul className="list-disc list-inside mt-4">
          <li>Developed novel machine learning algorithms</li>
          <li>Collaborated on cutting-edge AI projects</li>
        </ul>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Code className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Software Developer</h3>
        <p className="text-gray-300">Tech Startup • 2022 - Present</p>
        <ul className="list-disc list-inside mt-4">
          <li>Built scalable web applications using React</li>
          <li>Implemented machine learning models in production</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;