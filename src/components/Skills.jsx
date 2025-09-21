import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Database, Globe, Server, Brain, Cloud, GitBranch, Terminal, Zap, Cpu, Sparkles, HardDrive, Container, Component } from 'lucide-react';

const SkillIcon = ({ iconName }) => {
  const iconMap = {
    Code2: Code2,
    Terminal: Terminal,
    Component: Component,
    Globe: Globe,
    Server: Server,
    Zap: Zap,
    Brain: Brain,
    Cpu: Cpu,
    Sparkles: Sparkles,
    Database: Database,
    HardDrive: HardDrive,
    Container: Container,
    Cloud: Cloud,
    GitBranch: GitBranch
  };
  
  const IconComponent = iconMap[iconName] || Code2;
  
  return (
    <div className="w-6 h-6 text-blue-500">
      <IconComponent size={24} />
    </div>
  );
};

const Skills = () => {
  // Skills data directly in component
  const skillCategories = {
  "Programming & Scripting": {
    icon: "Code2",
    skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "SQL"]
  },
  "Frontend Development": {
    icon: "Globe",
    skills: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI", "HTML5", "CSS3", "Streamlit"]
  },
  "Backend & APIs": {
    icon: "Server",
    skills: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "JWT Auth", "Clerk"]
  },
  "AI/ML & NLP": {
    icon: "Brain",
    skills: ["TensorFlow", "OpenCV", "LLM API's", "CNNs & RNNs", "Agentic AI", "NLP pipelines"]
  },
  "Data Engineering & Databases": {
    icon: "Database",
    skills: ["Supabase PostgreSQL", "MongoDB", "Redis", "ETL pipelines", "Data Visualization"]
  },
  "DevOps & Deployment": {
    icon: "Cloud",
    skills: ["Git", "GitHub Actions", "Vercel", "Netlify", "Deployment workflows"]
  },
  "Other Tools": {
    icon: "Zap",
    skills: ["Figma", "SpeechRecognition", "Markdown/MDX", "Notion integrations"]
  },
  "Soft Skills": {
    icon: "Sparkles",
    skills: ["Fast Learner", "Independent Executor", "Debugging", "Peer Mentorship", "Time Management", "Problem-Solving"]
  },
  "Areas of Interest": {
    icon: "Cpu",
    skills: ["AI/ML Research", "Full-Stack Dev", "Agentic AI", "Hacking"]
  }
};


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-blue-500">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build amazing applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, categoryData]) => (
              <Card key={category} className="p-6 bg-background border-border/50 hover:border-blue-500/30 transition-colors duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-blue-500 uppercase tracking-wider flex items-center">
                    <SkillIcon iconName={categoryData.icon} />
                    <span className="ml-3">{category}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryData.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-muted/30 text-foreground border-border/50 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-blue-500/5 to-blue-600/5 border-blue-500/20">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                  Always Learning
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Technology evolves rapidly, and I'm committed to continuous learning. 
                  I'm always exploring new programming languages, frameworks, and AI technologies to stay at the 
                  forefront of software development and artificial intelligence innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;