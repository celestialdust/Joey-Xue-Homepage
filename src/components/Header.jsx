import React from 'react';

const Header = () => (
  <header className="bg-black text-white py-6">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl font-bold ml-4">Jiayu Xue's Homepage</div>
      </div>
      <nav>
        <a href="#about" className="mx-2">About</a>
        <a href="#education" className="mx-2">Education</a>
        <a href="#awards" className="mx-2">Awards</a>
        <a href="#experience" className="mx-2">Experience</a>
        <a href="#publications" className="mx-2">Publications</a>
        <a href="#projects" className="mx-2">Projects</a>
        <a href="#interests" className="mx-2">Interests</a>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;