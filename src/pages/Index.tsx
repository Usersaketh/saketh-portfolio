
import React from 'react';
import TypewriterText from '../components/TypewriterText';
import FadeInSection from '../components/FadeInSection';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <FadeInSection>
            <p className="text-terminal-green mb-2 font-mono">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              <TypewriterText text="Saketh." speed={100} />
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white/70">
              I build things for the web.
            </h2>
            <p className="max-w-lg text-white/60 mb-8 leading-relaxed">
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <Link to="/projects" className="inline-flex items-center gap-2 bg-terminal-purple bg-opacity-20 hover:bg-opacity-30 text-terminal-purple px-6 py-3 rounded-md transition-colors border border-terminal-purple/30">
              Check out my work
              <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4 bg-terminal-gray bg-opacity-30">
        <div className="container mx-auto">
          <FadeInSection>
            <h2 className="section-title">Featured Projects</h2>
          </FadeInSection>
          
          <div className="mt-8">
            <FadeInSection delay={100}>
              <div className="terminal-window mb-8">
                <TerminalHeader path="~/portfolio/projects" />
                <div className="terminal-body">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <FadeInSection>
            <h2 className="section-title">Skills & Expertise</h2>
          </FadeInSection>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeInSection delay={100}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/frontend" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-4 text-terminal-blue">Frontend</h3>
                  <ul className="space-y-2">
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
                  <h3 className="text-lg font-bold mb-4 text-terminal-blue">Backend</h3>
                  <ul className="space-y-2">
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
                  <h3 className="text-lg font-bold mb-4 text-terminal-blue">Tools & Others</h3>
                  <ul className="space-y-2">
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
          
          <div className="flex justify-center mt-8">
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
