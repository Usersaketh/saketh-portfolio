import React, { useState, useMemo, memo, useCallback } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

// Simplified ProjectCard with minimal re-renders
const ProjectCard = memo(({ project }) => {
  const handleDemoClick = useCallback((e) => {
    if (project.demoDisabled) {
      e.preventDefault();
      return;
    }
  }, [project.demoDisabled]);

  return (
    <div 
      className="overflow-hidden bg-background border border-border/50 rounded-lg" 
      style={{ 
        contain: 'layout style paint',
        willChange: 'auto'
      }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="400"
          height="192"
          className="w-full h-48 object-cover"
          style={{ contentVisibility: 'auto' }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-background/80 text-xs px-2 py-1 rounded border">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag} 
                className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex space-x-3 w-full">
          {project.demoDisabled ? (
            <button 
              disabled
              className="flex-1 bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed px-4 py-2 rounded text-sm"
              title={project.demoReason || "Demo not available"}
            >
              <ExternalLink className="w-4 h-4 mr-2 inline" />
              Demo Unavailable
            </button>
          ) : (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm text-center"
            >
              <ExternalLink className="w-4 h-4 mr-2 inline" />
              Live Demo
            </a>
          )}
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-blue-500/30 text-blue-500 hover:bg-blue-500/10 px-4 py-2 rounded text-sm"
          >
            <Github className="w-4 h-4 mr-2 inline" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Projects data directly in component
  const projects = [
  {
    id: 1,
    title: "StockPulse - Financial Data ETL Platform",
    description: "Enterprise-grade ETL pipeline for NSE/BSE stock data, scalable across multiple sectors.",
    longDescription: "Built using Python, Pandas, NumPy, yfinance API, Supabase PostgreSQL, and Streamlit. Scaled to 63+ companies across 10 sectors, includes robust error handling, modular stock universe management, dynamic dashboards, and technical/risk analytics (SMA, Sharpe ratio, VaR).",
    tags: ["Python", "Pandas", "NumPy", "Supabase", "PostgreSQL", "Streamlit", "ETL", "Data Engineering"],
    category: "Data Engineering",
    image: "/thumbnails/Stockpulse.avif",
    github: "https://github.com/Usersaketh/Stockpulse",
    demo: "https://stockpulse-visualizer.streamlit.app/",
    featured: true
  },
  {
    id: 2,
    title: "Worknix - Modern Job Portal",
    description: "Scalable job portal with advanced search, filters, SEO-optimized listings, and PWA support.",
    longDescription: "Built a full-featured job portal supporting client-side search, filters, featured roles carousel, and optional real-time notifications via Supabase. Integrated AdSense monetization and optimized for SEO and progressive web app capabilities.",
    tags: ["React (Vite)", "TypeScript", "Tailwind CSS", "ShadCN UI", "Supabase", "PWA", "SEO", "AdSense"],
    category: "Full-Stack",
    image: "/thumbnails/Worknix.jpg",
    github: "https://github.com/Usersaketh/Worknix",
    demo: "https://worknix.tech",
    featured: true
  },
  {
    id: 3,
    title: "ResumeGPT - AI-Powered Resume Enhancer",
    description: "Smart resume generator and enhancer that improves content, design, and job-matchability using AI.",
    longDescription: "Built with Next.js, Tailwind CSS, Python, and Gemini API. Generates optimized resumes, benchmarks against job roles, produces ATS-friendly output, and automates cover letter generation. Integrated with Gemini API for core insights and recommendations.",
    tags: ["Next.js", "Tailwind CSS", "Python", "Gemini API", "AI", "ATS"],
    category: "AI/ML",
    image: "/thumbnails/RESUME_ENHANCER.jpg",
    github: "https://github.com/Usersaketh/ResumeGPT-ResumeEnhancer",
    demo: "https://ai-resume-gpt.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "Odyssey - Travel Journal & Map Diary App",
    description: "Full-stack travel journal to record experiences, upload media, and map visited places.",
    longDescription: "Developed with React, Spring Boot, MySQL, Tailwind CSS, and GeoAPIFY for map integration and geocoding. Features include social interaction, sharing, timeline and interactive map visualizations. Optimized for 2K–5K concurrent users.",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "GeoAPIFY", "Full-Stack"],
    category: "Full-Stack",
    image: "/thumbnails/TRAVEL_JOURNAL.avif",
    github: "https://github.com/usersaketh/odyssey",
    demo: null,
    demoDisabled: true,
    demoReason: "Springboot backend priced - not hostable",
    featured: true
  },
  {
    id: 5,
    title: "J.A.R.V.I.S. - Modular AI Assistant",
    description: "Desktop AI assistant integrating local LLMs, speech recognition, and multi-agent workflows.",
    longDescription: "Built with Python, FastAPI, Redis, PostgreSQL, Ollama (Zephyr/LLaMA3), Gemini API, and Whisper. Handles 1000+ requests/min with sub-200ms response times. Features include microservice architecture, authentication, rate limiting, and usage analytics.",
    tags: ["Python", "Ollama", "Whisper", "FastAPI", "Redis", "PostgreSQL", "Agentic AI"],
    category: "AI/ML",
    image: "/thumbnails/JARVIS.png",
    github: "https://github.com/usersaketh/J.A.R.V.I.S.",
    demo: null,
    demoDisabled: true,
    demoReason: "Desktop application - not hostable",
    featured: true
  },
  {
    id: 6,
    title: "Enhanced Weather App - Real-Time Weather Dashboard",
    description: "A robust weather application with console and web interfaces, featuring detailed weather and air quality data.",
    longDescription: "Built with Python, Flask, and OpenWeather API. Provides current temperature, feels like, humidity, wind, pressure, visibility, UV index, and air quality measurements (PM2.5, PM10, CO, NO2, O3). Offers two modes: console CLI and modern responsive web interface with dynamic city selection. Handles network errors, API limits, and invalid locations gracefully.",
    tags: ["Python", "Flask", "OpenWeather API", "Data Visualization", "CLI", "Web Interface", "Error Handling"],
    category: "Full-Stack / AI",
    image: "/thumbnails/Wheather_app.jpg",
    github: "https://github.com/Usersaketh/WEATHER-APP",
    demo: null,
    demoDisabled: true,
    demoReason: "Python flask application - not hostable",
    featured: true
  }

];

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(projects.map(p => p.category)))], 
    [projects]
  );
  
  const filteredProjects = useMemo(() => 
    selectedCategory === 'All' 
      ? projects 
      : projects.filter(p => p.category === selectedCategory),
    [selectedCategory, projects]
  );

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
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-sm transition-colors ${
                  selectedCategory === category 
                    ? "bg-blue-500 text-white"
                    : "border border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            style={{ contain: 'layout' }}
          >
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
            <a 
              href="https://github.com/usersaketh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-blue-500/30 text-blue-500 hover:bg-blue-500/10 rounded transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;