import React from 'react';
import { Cpu, Camera, BookOpen } from 'lucide-react';

const Projects = () => (
  <section id="projects" className="py-20">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Cpu className="mb-4" />
        <h3 className="text-xl font-bold mb-2">AI-Powered Chess Engine</h3>
        <p>Developed a chess AI using deep reinforcement learning.</p>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Camera className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Computer Vision App</h3>
        <p>Created an app for real-time object detection on mobile devices.</p>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <BookOpen className="mb-4" />
        <h3 className="text-xl font-bold mb-2">ML Research Paper</h3>
        <p>Published a paper on novel optimization techniques for neural networks.</p>
      </div>
    </div>
  </section>
);

export default Projects;