
import React from 'react';
import { Github, Link } from 'lucide-react';
import FadeInSection from './FadeInSection';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  imageUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  imageUrl,
  index
}) => {
  return (
    <FadeInSection delay={index * 100} className="w-full">
      <div className="terminal-window h-full flex flex-col">
        <div className="terminal-header">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-white opacity-80 flex-1 text-center truncate">
            &nbsp;{title}.exe
          </div>
          <div className="w-16"></div>
        </div>
        
        <div className="terminal-body flex-1 flex flex-col">
          {imageUrl && (
            <div className="mb-4 rounded overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-48 object-cover object-top "
              />
            </div>
          )}
          
          <h3 className="text-lg font-bold mb-2 text-white">
            <span className="text-terminal-purple">&gt;</span> {title}
          </h3>
          
          <p className="text-white/70 mb-4 flex-1">{description}</p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-terminal-gray border border-white/10 text-terminal-blue text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-8">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white flex items-center space-x-1 transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white flex items-center space-x-1 transition-colors"
              >
                <Link size={16} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ProjectCard;
