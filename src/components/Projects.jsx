import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Filter } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden bg-background border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex space-x-3 w-full">
          <Button 
            asChild 
            size="sm" 
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Projects data directly in component
  const projects = [
    {
      id: 1,
      title: "ResumeGPT - AI-Powered Resume Enhancer",
      description: "A smart resume generator and enhancer that uses Gemini models to improve content, design, and job-matchability.",
      longDescription: "Built using Python, OpenAI API, and React. The system analyzes code repositories, identifies potential issues, suggests improvements, and integrates with GitHub workflows. Reduced code review time by 60% for development teams.",
      tags: ["Next.js", "Gemini API", "Tailwind CSS", "GitHub API","AI","ATS"],
      category: "AI/ML",
      image: "/thumbnails/RESUME_ENHANCER.jpg",
      github: "https://github.com/Usersaketh/ResumeGPT-ResumeEnhancer",
      demo: "https://ai-resume-gpt.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Odyssey - Travel Journal & Map Diary App",
      description: "A full-stack travel journal application to record experiences, upload media, and map visited places.",
      longDescription: "Developed with React, Node.js, MongoDB, and scikit-learn. Features automatic expense categorization, spending trend analysis, and ML-powered budget suggestions. Includes data visualization with Chart.js and real-time notifications.",
      tags: ["React","spring-boot","MySQL","Tailwind CSS","Gemini API"],
      category: "Full-Stack",
      image: "/thumbnails/TRAVEL_JOURNAL.avif",
      github: "https://github.com/pranaysaketh/odyssey",
      demo: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "J.A.R.V.I.S. - Desktop AssistantI",
      description: "JARVIS is a modular AI assistant built using Python, integrating local LLMs via Ollama (Zephyr/LLaMA3), Gemini Pro API, and Whisper for speech recognition.",
      longDescription: "Microservice architecture with FastAPI, Redis for caching, and PostgreSQL for usage analytics. Handles 1000+ requests per minute with sub-200ms response times. Includes rate limiting, authentication, and comprehensive API documentation.",
      tags: ["Python", "Ollama","zephyr", "Whisper", "Offline"],
      category: "AI/ML",
      image: "/thumbnails/JARVIS.png",
      github: "https://github.com/usersaketh/1234",
      demo: "https://example.com",
      featured: true
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects I've built, from AI applications to full-stack web solutions.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-4 h-4 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found for the selected category.
              </p>
            </div>
          )}

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
            >
              <a href="https://github.com/usersaketh" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;