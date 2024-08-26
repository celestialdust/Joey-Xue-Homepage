import React from 'react';
import Logo from './Logo';

function Header(){
    return (
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
    )
}

export default Header;