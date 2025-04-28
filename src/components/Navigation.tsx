
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-terminal-darkGray/95 backdrop-blur-sm border-b border-white/10 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-terminal-purple font-mono font-bold text-xl">
          <span className="text-terminal-green">&gt;_</span> saketh.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-terminal-gray border-b border-white/10 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
