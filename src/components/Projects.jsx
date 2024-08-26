import React from 'react';
import { Cpu, Camera, BookOpen } from 'lucide-react';

const Projects = () => (
  <section id="projects" className="py-20">
    <h2 className="text-3xl font-bold mb-8">On-going Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Cpu className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Decentralized NFT market</h3>
        <p>Build a decentralized NFT marketplace for fun</p>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Camera className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Langgraph Personality Analysis Agent</h3>
        <p>Created an app for creating personality analysis reports based on posts on social media</p>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <BookOpen className="mb-4" />
        <h3 className="text-xl font-bold mb-2">AI-powered Knowledge Management Tool</h3>
        <p>Build a new-generation knowledge managment tool with advanced AI features</p>
      </div>
    </div>
  </section>
);

export default Projects;