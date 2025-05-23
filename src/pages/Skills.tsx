
import React from 'react';
import FadeInSection from '../components/FadeInSection';
import SkillTag from '../components/SkillTag';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';

// Organized skill data by categories
const skillCategories = {
  languages: [
    'C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'
  ],
  frameworks: [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TensorFlow', 'Keras', 'Spring Boot'
  ],
  technical: [
    'Data Structures', 'Object-Oriented Programming', 'Deep Learning', 'Computer Vision', 
    'Prompt Engineering', 'Generative AI', 'REST APIs', 'Algorithm Design'
  ],
  tools: [
    'Git', 'GitHub', 'Figma', 'OpenCV', 'MediaPipe', 'Tailwind CSS', 'Firebase', 'Vercel'
  ]
};

const areasOfInterest = [
  'AI Research',
  'Ethical Hacking',
  'Deep Learning',
  'Computer Vision (CVIP)',
  'Machine Learning',
  'Web Development'
];

const Skills = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4 md:py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> Skills & Expertise
            </h1>
            <p className="text-white/60 max-w-2xl">
              A comprehensive overview of my technical skills and expertise areas. 
              I'm constantly learning and expanding this list to stay current with industry trends.
            </p>
          </div>
        </FadeInSection>
        
        <div className="mb-16">
          <FadeInSection>
            <CodeBlock title="skills.js" className="mb-8">
              <span className="keyword">const</span> <span className="function">developerProfile</span> = {"{"}<br />
              &nbsp;&nbsp;name: <span className="string">"Dussa Pranay Saketh"</span>,<br />
              &nbsp;&nbsp;title: <span className="string">"Web and AIML Developer"</span>,<br />
              &nbsp;&nbsp;expertise: {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;languages: [<span className="string">"C"</span>, <span className="string">"C++"</span>, <span className="string">"Java"</span>, <span className="string">"Python"</span>, <span className="string">"JavaScript"</span>, <span className="string">"TypeScript"</span>],<br />
              &nbsp;&nbsp;&nbsp;&nbsp;frameworks: [<span className="string">"React"</span>, <span className="string">"Next.js"</span>, <span className="string">"Node.js"</span>, <span className="string">"TensorFlow"</span>],<br />
              &nbsp;&nbsp;&nbsp;&nbsp;specialization: [<span className="string">"Deep Learning"</span>, <span className="string">"Computer Vision"</span>, <span className="string">"Generative AI"</span>]<br />
              &nbsp;&nbsp;{"}"}<br />
              {"}"};
            </CodeBlock>
          </FadeInSection>
        </div>
        
        <div className="space-y-12">
          {/* Programming Languages */}
          <FadeInSection>
            <div className="terminal-window">
              <TerminalHeader path="~/languages" />
              <div className="terminal-body">
                <h3 className="text-xl font-bold mb-6 text-terminal-blue flex items-center">
                  <span className="mr-3">💻</span>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategories.languages.map((skill, index) => (
                    <SkillTag
                      key={skill}
                      name={skill}
                      category="language"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Frameworks & Technologies */}
          <FadeInSection delay={100}>
            <div className="terminal-window">
              <TerminalHeader path="~/frameworks" />
              <div className="terminal-body">
                <h3 className="text-xl font-bold mb-6 text-terminal-green flex items-center">
                  <span className="mr-3">🚀</span>
                  Frameworks & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategories.frameworks.map((skill, index) => (
                    <SkillTag
                      key={skill}
                      name={skill}
                      category="framework"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Technical Expertise */}
          <FadeInSection delay={200}>
            <div className="terminal-window">
              <TerminalHeader path="~/technical-expertise" />
              <div className="terminal-body">
                <h3 className="text-xl font-bold mb-6 text-terminal-purple flex items-center">
                  <span className="mr-3">🧠</span>
                  Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategories.technical.map((skill, index) => (
                    <SkillTag
                      key={skill}
                      name={skill}
                      category="technical"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Tools & Platforms */}
          <FadeInSection delay={300}>
            <div className="terminal-window">
              <TerminalHeader path="~/tools" />
              <div className="terminal-body">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                  <span className="mr-3">🛠️</span>
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategories.tools.map((skill, index) => (
                    <SkillTag
                      key={skill}
                      name={skill}
                      category="tool"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Areas of Interest */}
          <FadeInSection delay={400}>
            <div className="terminal-window">
              <TerminalHeader path="~/interests" />
              <div className="terminal-body">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                  <span className="mr-3">🎯</span>
                  Areas of Interest
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {areasOfInterest.map((interest, index) => (
                    <FadeInSection key={interest} delay={index * 100}>
                      <div className="p-4 bg-terminal-gray/30 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-terminal-gray/40">
                        <span className="text-white font-mono text-sm">{interest}</span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Skills;
