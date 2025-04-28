
import React from 'react';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <FadeInSection>
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                  Hello, I'm <br /><TypewriterText text="Dussa Pranay Saketh." speed={100} />
                </h1>
                <h2 className="text-xl md:text-3xl font-bold text-white/70 font-mono">
                  I build things for the web.
                </h2>
                <p className="max-w-lg text-white/60 leading-relaxed text-sm md:text-base">
                  I'm a software engineer specializing in building exceptional digital experiences.
                  Currently, I'm focused on creating accessible, human-centered products
                  that make a difference.
                </p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center gap-2 bg-terminal-purple/20 hover:bg-terminal-purple/30 text-terminal-purple px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 border border-terminal-purple/30 hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]"
                >
                  Check out my work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>

            {/* Right Column */}
            <div className="relative mt-6 lg:mt-0">
              <CodeEditorWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12 md:py-16 px-4 bg-terminal-gray bg-opacity-30">
        <div className="container mx-auto">
          <FadeInSection>
            <h2 className="section-title">Featured Projects</h2>
          </FadeInSection>
          
          <div className="mt-6 md:mt-8">
            <FadeInSection delay={100}>
              <div className="terminal-window mb-6 md:mb-8">
                <TerminalHeader path="~/portfolio/projects" />
                <div className="terminal-body overflow-x-auto">
                  <CodeBlock title="featured-projects.js">
                    <span className="keyword">const</span> <span className="function">featuredProjects</span> = [<br />
                    &nbsp;&nbsp;{"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="string">"AI-Powered Code Assistant"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;description: <span className="string">"A smart coding assistant that helps developers write better code."</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;tech: [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"GPT-4"</span>]<br />
                    &nbsp;&nbsp;{"}"},<br />
                    &nbsp;&nbsp;{"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="string">"Personal Finance Dashboard"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;description: <span className="string">"Interactive dashboard for tracking personal finances."</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;tech: [<span className="string">"TypeScript"</span>, <span className="string">"D3.js"</span>, <span className="string">"Firebase"</span>]<br />
                    &nbsp;&nbsp;{"}"}<br />
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
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <FadeInSection>
            <h2 className="section-title">Skills & Expertise</h2>
          </FadeInSection>
          
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FadeInSection delay={100}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/frontend" />
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
                      <span>CSS / SASS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/backend" />
                <div className="terminal-body">
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-terminal-blue">Backend</h3>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Node.js / Express</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Python / Django</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>MongoDB / PostgreSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>GraphQL / REST</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/tools" />
                <div className="terminal-body">
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-terminal-blue">Tools & Others</h3>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Git / GitHub</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Docker / AWS</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>CI/CD Pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>Agile Methodologies</span>
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
