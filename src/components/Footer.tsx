
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-16 py-8 bg-terminal-gray/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              <span className="text-terminal-green">$</span> Designed and built with 💻 by Saketh
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@example.com" className="text-white/60 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} • Built with React, TypeScript & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
