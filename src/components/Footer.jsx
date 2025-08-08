import React from 'react';
import { Badge } from './ui/badge';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  // Portfolio data directly in component
  const portfolioData = {
    personal: {
      name: "DUSSA PRANAY SAKETH",
      email: "mailto:sakethdussa1234@gmail.com",
      resume: "/resume.pdf"
    },
    social: {
      github: "https://github.com/usersaketh",
      linkedin: "https://linkedin.com/in/saketh190705",
      email: "mailto:sakethdussa1234@gmail.com"
    }
  };

  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-2">PS.dev</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building the future with AI and modern web technologies. 
                  Let's create something amazing together.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/50 hover:bg-blue-500/10 rounded-full transition-colors group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-blue-500" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/50 hover:bg-blue-500/10 rounded-full transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-500" />
                </a>
                <a
                  href={social.email}
                  className="p-2 bg-muted/50 hover:bg-blue-500/10 rounded-full transition-colors group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-blue-500" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-blue-500 transition-colors text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('projects');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-blue-500 transition-colors text-left"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-blue-500 transition-colors text-left"
                  >
                    Contact
                  </button>
                </div>
                <div className="space-y-3">
                  <a
                    href={personal.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    Resume
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Status & Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Current Status</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Available for opportunities</span>
                </div>
                
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    🎓 Final Year Student
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 ml-2">
                    🚀 Open Source Contributor
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">
                  Based in {personal.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {personal.name}</span>
              <span>•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-blue-500" /> and React
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-emerald-500 transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;