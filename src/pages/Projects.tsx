
import React from 'react';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';
import TerminalHeader from '../components/TerminalHeader';

// Sample project data
const projects = [
  {
    title: "AI-Powered Code Assistant",
    description: "A smart coding assistant that helps developers write better code faster by providing intelligent code suggestions and debugging assistance.",
    technologies: ["React", "TypeScript", "Node.js", "GPT-4", "MongoDB"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Personal Finance Dashboard",
    description: "Interactive dashboard for tracking personal finances with visualizations and insights to help users make informed financial decisions.",
    technologies: ["TypeScript", "D3.js", "Firebase", "React", "Redux"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management system.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Real-time Chat Application",
    description: "Secure and scalable real-time chat application with features like user authentication, message encryption, and file sharing.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  },
  {
    title: "Task Management System",
    description: "Collaborative task management system with kanban board, task assignments, deadlines, and progress tracking.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Weather Forecasting App",
    description: "Elegant weather forecasting application with location detection, hourly and weekly forecasts, and weather alerts.",
    technologies: ["React Native", "OpenWeatherMap API", "Redux", "Geolocation"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> Projects.map(project =&gt; render(project))
            </h1>
            <p className="text-white/60 max-w-2xl">
              A collection of projects I've built throughout my journey as a developer. 
              Each project reflects my passion for clean code, user experience, and solving real-world problems.
            </p>
          </div>
        </FadeInSection>

        <div className="terminal-window mb-10">
          <TerminalHeader path="~/portfolio/projects" />
          <div className="terminal-body">
            <p className="text-terminal-green">$ ls -la</p>
            <p className="text-white">total {projects.length}</p>
            {projects.map((project, index) => (
              <p key={index} className="text-white/80">
                <span className="text-terminal-blue mr-2">project_{index + 1}</span> 
                <span className="text-white/50">{project.title}</span>
              </p>
            ))}
            <p className="text-terminal-green mt-4">$ cat README.md</p>
            <p className="text-white/80 mt-2">
              # Projects Directory<br />
              This directory contains all my major projects. Feel free to explore each one!<br />
              For questions or collaborations, reach out via the contact page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
