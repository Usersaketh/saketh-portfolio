
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Saketh</h3>
            <p className="text-muted-foreground">
              Passionate developer creating digital experiences that matter.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="/projects" className="block text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Usersaketh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saketh190705/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sakethdussa1234@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Dussa Pranay Saketh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
