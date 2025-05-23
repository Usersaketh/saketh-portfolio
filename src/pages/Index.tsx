
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-medium">Hi, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Dussa Pranay <span className="text-gradient">Saketh</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Aspiring AI/ML Engineer & MERN Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A creative full-stack engineer and AI/ML practitioner who loves building smart, 
              data-driven applications that deliver intuitive user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                Get In Touch
                <Mail size={18} />
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/Usersaketh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saketh190705/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sakethdussa1234@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right animate-delay-200">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-8">
                <div className="w-full h-full bg-card rounded-xl shadow-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">S</span>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Full Stack Developer</p>
                      <p className="text-sm text-muted-foreground">AI/ML Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-container bg-muted/50">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern web technologies and artificial intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm card-hover animate-fade-in-up">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="text-muted-foreground">
                Building responsive and interactive user interfaces with React, Next.js, and modern CSS
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Tailwind</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-sm card-hover animate-fade-in-up animate-delay-100">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <p className="text-muted-foreground">
                Creating robust APIs and server-side applications with Node.js, Express, and databases
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">MySQL</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-sm card-hover animate-fade-in-up animate-delay-200">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Developing intelligent systems with TensorFlow, computer vision, and deep learning
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">OpenCV</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/skills" className="btn-secondary inline-flex items-center gap-2">
            View All Skills
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl overflow-hidden shadow-sm card-hover animate-fade-in-up">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20"></div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Driver Drowsiness Detection System</h3>
              <p className="text-muted-foreground">
                Real-time drowsiness detection using Eye Aspect Ratio and CNN model trained on NTHU dataset
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">TensorFlow</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/Usersaketh/drowsiness-detection" className="text-primary hover:underline">
                  View Code
                </a>
                <a href="#" className="text-primary hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-sm card-hover animate-fade-in-up animate-delay-100">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Resume-Revamp AI Builder</h3>
              <p className="text-muted-foreground">
                AI-powered resume builder with smart suggestions, keyword optimization, and Firebase integration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Gemini API</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/Usersaketh/resume-revamp" className="text-primary hover:underline">
                  View Code
                </a>
                <a href="#" className="text-primary hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
