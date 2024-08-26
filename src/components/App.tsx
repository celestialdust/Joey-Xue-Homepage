import React from 'react';
import { Camera, Code, BookOpen, Cpu, Briefcase,Mail, Linkedin, Instagram } from 'lucide-react';

function Logo({ className = "w-12 h-12" }){
  return (
     <div className={`${className}`}>
       <img src="./background.jpg" alt="Logo" className="w-full h-full" />
     </div>
   );
}
 function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="bg-black text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Logo />
                    <div className="text-2xl font-bold ml-4">Jiayu Xue</div>
                </div>
                <nav>
                    <a href="#about" className="mx-2">About</a>
                    <a href="#experience" className="mx-2">Experience</a>
                    <a href="#projects" className="mx-2">Projects</a>
                    <a href="#contact" className="mx-2">Contact</a>
                </nav>
            </div>
        </header>
      <main className="container mx-auto px-6">
        <section id="about" className="py-20">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold mb-4">AI Software Developer & ML Enthusiast</h1>
              <p className="text-xl">University student with a passion for AI, machine learning, and entrepreneurship.</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <Logo className="w-48 h-48" />
            </div>
          </div>
        </section>

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

        <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center">
              <Mail className="mr-4" size={24} />
              <div>
                <p className="font-bold">Personal Email</p>
                <a href="mailto:your.personal@email.com" className="text-blue-400 hover:underline">
                  hsefzxuejoey@email.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <BookOpen className="mr-4" size={24} />
              <div>
                <p className="font-bold">Educational Email</p>
                <a href="mailto:your.edu@university.edu" className="text-blue-400 hover:underline">
                  xuejiayu@ad.unc.edu
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-4" size={24} />
              <div>
                <p className="font-bold">LinkedIn</p>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Instagram className="mr-4" size={24} />
              <div>
                <p className="font-bold">Instagram</p>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  @yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="bg-white bg-opacity-10 py-6 text-center">
        <p>&copy; 2024 Jiayu Xue. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
