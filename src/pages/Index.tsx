import TypewriterText from '../components/TypewriterText';
import FadeInSection from '../components/FadeInSection';
import CodeEditorWindow from '../components/CodeEditorWindow';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-24 md:py-40">
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 md:items-center">
            {/* Left Column */}
            <FadeInSection>
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                  Hello, I'm <br /><TypewriterText text="Dussa Pranay Saketh." speed={150} />
                </h1>
                <h2 className="text-xl md:text-3xl font-bold text-white/70 font-mono">
                  Aspiring AI/ML Engineer | MERN Developer
                </h2>
                <p className="max-w-xl text-white/60 text-sm md:text-base">
                A creative full-stack engineer and AI/ML practitioner who loves building smart, data-driven applications that deliver intuitive user experiences.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-terminal-green/10 hover:bg-terminal-green/20 text-terminal-green px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 border border-terminal-green/30 hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(50,205,50,0.3)]"
                  >
                    About Me
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 bg-terminal-blue/10 hover:bg-terminal-blue/20 text-terminal-blue px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 border border-terminal-blue/30 hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(100,200,255,0.3)]"
                  >Check out my work
                    
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-terminal-purple/20 hover:bg-terminal-purple/30 text-terminal-purple px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 border border-terminal-purple/30 hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]"
                  >
                    Get in touch
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeInSection>

            {/* Right Column */}
            {isMobile? null : (
            <div className="relative mt-6 lg:mt-0">
              <CodeEditorWindow />
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12 md:py-16  bg-terminal-gray bg-opacity-30">
        <div className="container">
          <FadeInSection>
            <h2 className="section-title">Featured Projects</h2>
          </FadeInSection>
          
          <div className="mt-6 md:mt-8">
            <FadeInSection delay={50}>
              <div className="terminal-window mb-6 md:mb-8">
                <TerminalHeader path="~/projects" />
                <div className="terminal-body overflow-x-auto">
                <CodeBlock title="featured-projects.js">
                  <span className="keyword">const</span> <span className="function">featuredProjects</span> = [<br />
                  &nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="string">"Driver Drowsiness Detection System"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;description: <span className="string">"Real-time drowsiness detection using Eye Aspect Ratio (EAR) and a CNN model trained on the NTHU dataset."</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;tech: [<span className="string">"Python"</span>, <span className="string">"OpenCV"</span>, <span className="string">"TensorFlow"</span>, <span className="string">"MediaPipe"</span>]<br />
                  &nbsp;&nbsp;{"}"},<br />
                  &nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="string">"Resume-Revamp (AI-Powered Resume Builder)"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;description: <span className="string">"AI-driven resume builder offering smart suggestions, keyword optimization, and Firebase integration."</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;tech: [<span className="string">"React"</span>, <span className="string">"Firebase"</span>, <span className="string">"Gemini API"</span>]<br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  ];
                </CodeBlock>

                </div>
              </div>
            </FadeInSection>
            
            <div className="flex justify-center">
              <Link to="/projects" className="text-terminal-blue hover:text-terminal-purple transition-colors flex items-center space-x-1">
                <span>View all projects</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <FadeInSection>
            <h2 className="section-title">Skills & Expertise</h2>
          </FadeInSection>
          
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FadeInSection delay={100}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/frontend" />
                <div className="terminal-body">
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-terminal-blue">Frontend</h3>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>React / Next.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>	Shadcn / UI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={100}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/backend" />
                <div className="terminal-body">
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-terminal-blue">Backend</h3>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Node.js / Express</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>JAVA / Springboot</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>MongoDB / MYSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Firebase</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={150}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/tools" />
                <div className="terminal-body">
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-terminal-blue">Tools & Others</h3>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Git / GitHub - Version Control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>TensorFlow / Keras </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>OpenCV / MediaPipe</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Canva / Figma - UI prototyping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
          
          <div className="flex justify-center mt-6 md:mt-8">
            <Link to="/skills" className="text-terminal-blue hover:text-terminal-purple transition-colors flex items-center space-x-1">
              <span>View all skills</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
