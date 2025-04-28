
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';
import TerminalHeader from '../components/TerminalHeader';


// Sample project data
const projects = [
  {
    title: "Driver Drowsiness Detection System",
    description: "Real-time drowsiness detection using Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) with MediaPipe FaceMesh, enhanced by a pretrained CNN model (NTHU datasets).",
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "MediaPipe"],
    githubLink: "https://github.com/Usersaketh/drowsiness-detection",
    demoLink: "https://demo.com/drowsiness-detection", 
    imageUrl: "/thumbnails/Drowsiness_Detection.jpeg" 
  },
  {
    title: "JARVIS AI Assistant (AI, NLP)",
    description: "AI assistant using Gemini API for voice commands, web search, email automation, and weather updates.",
    technologies: ["Python", "Gemini API", "SpeechRecognition", "pyttsx3"],
    githubLink: "https://github.com/Usersaketh/jarvis-ai",
    demoLink: "https://demo.com/jarvis-ai", 
    imageUrl: "/thumbnails/JARVIS.png" 
  },
  {
    title: "Odyssey - Travel Journal App (Full Stack)",
    description: "Full-stack app for travel journaling with authentication, multimedia management, and interactive timeline.",
    technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/Usersaketh/odyssey",
    demoLink: "https://demo.com/odyssey", 
    imageUrl: "/thumbnails/TRAVEL_JOURNAL.avif" 
  },
  {
    title: "Resume-Revamp (AI-Powered Resume Builder)",
    description: "AI-driven resume tool with smart suggestions, keyword optimization, and Firebase integration.",
    technologies: ["React", "Firebase", "Clark Authentication", "Gemini API"],
    githubLink: "https://github.com/Usersaketh/resume-revamp",
    demoLink: "https://demo.com/resume-revamp", 
    imageUrl: "/thumbnails/RESUME_ENHANCER.jpg" 
  }
];


const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> Projects.map( project =&gt; render(project))
            </h1>
            <p className="text-white/60">
            A collection of projects I've built throughout my journey as a developer.
            Each project showcases my commitment to clean code, intuitive user interfaces, and solving real-world challenges. 
            From full-stack applications to AI-driven solutions, these projects reflect my passion for technology and continuous growth as a developer.
            </p>
          </div>
        </FadeInSection>

        <div className="terminal-window mb-10">
          <TerminalHeader path="~/projects" />
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
