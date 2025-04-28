
import React from 'react';
import FadeInSection from '../components/FadeInSection';
import SkillBar from '../components/SkillBar';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';

// Sample skill data
const frontendSkills = [
  { name: 'React', level: 92 },
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 88 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Next.js', level: 80 }
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 82 },
  { name: 'Django', level: 75 },
  { name: 'PostgreSQL', level: 78 },
  { name: 'MongoDB', level: 80 },
  { name: 'GraphQL', level: 72 }
];

const devOpsTools = [
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 75 },
  { name: 'AWS', level: 70 },
  { name: 'CI/CD', level: 78 },
  { name: 'Linux', level: 85 },
  { name: 'Nginx', level: 72 }
];

const Skills = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> Skills & Expertise
            </h1>
            <p className="text-white/60 max-w-2xl">
              A comprehensive overview of my technical skills and proficiency levels. 
              I'm constantly learning and expanding this list to stay current with industry trends.
            </p>
          </div>
        </FadeInSection>
        
        <div className="mb-16">
          <FadeInSection>
            <CodeBlock title="skills.js" className="mb-8">
              <span className="keyword">const</span> <span className="function">developerProfile</span> = {"{"}<br />
              &nbsp;&nbsp;name: <span className="string">"Saketh"</span>,<br />
              &nbsp;&nbsp;title: <span className="string">"Full Stack Developer"</span>,<br />
              &nbsp;&nbsp;yearsOfExperience: <span className="string">5</span>,<br />
              &nbsp;&nbsp;skills: {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;frontend: [<span className="string">"React"</span>, <span className="string">"TypeScript"</span>, <span className="string">"Next.js"</span>, <span className="string">"Tailwind"</span>],<br />
              &nbsp;&nbsp;&nbsp;&nbsp;backend: [<span className="string">"Node.js"</span>, <span className="string">"Express"</span>, <span className="string">"PostgreSQL"</span>, <span className="string">"GraphQL"</span>],<br />
              &nbsp;&nbsp;&nbsp;&nbsp;devOps: [<span className="string">"Git"</span>, <span className="string">"Docker"</span>, <span className="string">"AWS"</span>, <span className="string">"CI/CD"</span>]<br />
              &nbsp;&nbsp;{"}"},<br />
              &nbsp;&nbsp;learning: [<span className="string">"AI/ML"</span>, <span className="string">"Rust"</span>, <span className="string">"WebAssembly"</span>]<br />
              {"}"};
            </CodeBlock>
          </FadeInSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div>
            <FadeInSection>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/skills/frontend" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-blue">Frontend Development</h3>
                  {frontendSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color="bg-terminal-blue"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
          
          {/* Backend Skills */}
          <div>
            <FadeInSection delay={100}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/skills/backend" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-green">Backend Development</h3>
                  {backendSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color="bg-terminal-green"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
          
          {/* DevOps Skills */}
          <div>
            <FadeInSection delay={200}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/portfolio/skills/devops" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-purple">DevOps & Tools</h3>
                  {devOpsTools.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color="bg-terminal-purple"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
        
        <FadeInSection delay={300}>
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-4 text-white">Other Skills & Interests</h3>
            <div className="terminal-window">
              <TerminalHeader path="~/portfolio/skills/other" />
              <div className="terminal-body">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-terminal-gray bg-opacity-30 rounded-md border border-white/10">
                    <h4 className="font-bold mb-2 text-terminal-blue">Cloud Services</h4>
                    <ul className="space-y-1 text-sm">
                      <li>AWS (S3, EC2, Lambda)</li>
                      <li>Google Cloud Platform</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-terminal-gray bg-opacity-30 rounded-md border border-white/10">
                    <h4 className="font-bold mb-2 text-terminal-green">UI/UX</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Figma</li>
                      <li>Responsive Design</li>
                      <li>Accessibility (a11y)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-terminal-gray bg-opacity-30 rounded-md border border-white/10">
                    <h4 className="font-bold mb-2 text-terminal-purple">Currently Learning</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Machine Learning</li>
                      <li>Web3 / Blockchain</li>
                      <li>Rust Programming</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Skills;
