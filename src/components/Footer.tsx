
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-16 py-8 bg-terminal-gray/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex justify-between items-center">
          <div className="flex space-x-6 ">
            <a href="https://github.com/Usersaketh" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/saketh190705/" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sakethdussa1234@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
