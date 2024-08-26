import React from 'react';
import { Mail, BookOpen, Linkedin, Instagram } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20">
    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
    <div className="max-w-lg mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex items-center">
          <Mail className="mr-4" size={24} />
          <div>
            <p className="font-bold">Personal Email</p>
            <a href="mailto:hsefzxuejoey@email.com" className="text-blue-400 hover:underline">
              hsefzxuejoey@email.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <BookOpen className="mr-4" size={24} />
          <div>
            <p className="font-bold">Educational Email</p>
            <a href="mailto:xuejiayu@ad.unc.edu" className="text-blue-400 hover:underline">
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
);

export default Contact;