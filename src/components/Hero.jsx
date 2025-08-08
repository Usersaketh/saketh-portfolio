import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import DarkVeil from '../Backgrounds/DarkVeil/DarkVeil.tsx';

const Hero = () => {
  // Portfolio data directly in component
  const portfolioData = {
    personal: {
      name: "DUSSA PRANAY SAKETH",
      role: "ASPIRING AI&ML ENGINEER | WEB DEVELOPER",
      tagline: "I build tools that think and interfaces that talk.",
      resume: "/resume.pdf"
    },
    social: {
      github: "https://github.com/usersaketh",
      linkedin: "https://linkedin.com/in/saketh190705",
      email: "mailto:sakethdussa1234@gmail.com"
    }
  };

  const { personal, social } = portfolioData;

  const handleDownloadResume = () => {
    console.log('Downloading resume...');
    const link = document.createElement('a');
    link.href = personal.resume;
    link.download = 'Pranay_Saketh_Resume.pdf';
    link.click();
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsScroll = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* DarkVeil Background - Only visible in dark mode */}
      <div className="absolute top-0 left-0 w-full h-full dark:block hidden z-0">
        <div className="w-full h-full">
          <DarkVeil 
            hueShift={0.3}
            noiseIntensity={0.02}
            scanlineIntensity={0}
            speed={0.9}
            scanlineFrequency={100}
            warpAmount={0.3}
            resolutionScale={1.4}
          />
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/30 dark:from-black/40 dark:via-black/20 dark:to-black/60 z-5"></div>
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              I am
            </p>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-blue-500 to-foreground bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
              {personal.role}
            </p>
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-blue-500 max-w-3xl mx-auto leading-relaxed">
              "{personal.tagline}"
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center animate-fade-in">
            <Badge variant="outline" className="px-4 py-2 text-blue-500 border-blue-500/30 bg-blue-500/5">
              🟢 Available for opportunities
            </Badge>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Button 
              size="lg" 
              onClick={handleContactScroll}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleProjectsScroll}
              className="border-blue-500/30 text-blue-500 hover:bg-blue-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              View Projects
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={handleDownloadResume}
              className="text-muted-foreground hover:text-blue-500 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 animate-slide-up delay-400">
            <a 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/40 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-blue-500" />
            </a>
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/40 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-500" />
            </a>
            <a 
              href={social.email}
              className="p-3 rounded-full border border-border/40 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-blue-500" />
            </a>
          </div>

          {/* Scroll Indicator (Arrow Mark) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            {/* Arrow Down SVG */}
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;