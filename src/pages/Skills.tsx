import React from 'react';
import FadeInSection from '../components/FadeInSection';
import SkillBar from '../components/SkillBar';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';

// Sample skill data based on your provided list
const languages = [
  { name: 'C', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'Java', level: 85 },
  { name: 'Python', level: 90 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'SQL', level: 80 }
];

const frameworks = [
  { name: 'MERN Stack (MongoDB, Express, React, Node.js)', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'TensorFlow & Keras', level: 70 },
  { name: 'OpenCV & MediaPipe', level: 80 },
  { name: 'Spring Boot', level: 75 },
  { name: 'Git', level: 90 },
  { name: 'Figma', level: 85 },
  { name: 'REST APIs', level: 80 }
];

const technicalAreas = [
  { name: 'Data Structures', level: 90 },
  { name: 'Object-Oriented Programming (OOP)', level: 85 },
  { name: 'Deep Learning (DL)', level: 80 },
  { name: 'Computer Vision (CVIP)', level: 80 },
  { name: 'Prompt Engineering', level: 95 },
  { name: 'Generative AI (Gen AI)', level: 90 }
];

const areasOfInterest = [
  'AI Research',
  'Hacking',
  'Deep Learning',
  'Computer Vision (CVIP)'
];

const softSkills = [
  'Leadership',
  'Communication',
  'Teamwork',
  'Problem-Solving',
  'Time Management'
];

const Skills = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> Skills & Expertise
            </h1>
            <p className="text-white/60 ">
              A comprehensive overview of my technical skills and proficiency levels. 
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
              &nbsp;&nbsp;skills: {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;languages: [<span className="string">"C"</span>, <span className="string">"C++"</span>, <span className="string">"Java"</span>, <span className="string">"Python"</span>, <span className="string">"HTML"</span>, <span className="string">"CSS"</span>, <span className="string">"JavaScript"</span>, <span className="string">"SQL"</span>],<br />
              &nbsp;&nbsp;&nbsp;&nbsp;frameworks: [<span className="string">"MERN Stack"</span>, <span className="string">"Next.js"</span>, <span className="string">"Tailwind CSS"</span>, <span className="string">"TensorFlow & Keras"</span>, <span className="string">"OpenCV & MediaPipe"</span>, <span className="string">"Spring Boot"</span>, <span className="string">"Firebase"</span>, <span className="string">"Git"</span>, <span className="string">"Figma"</span>],<br />
              &nbsp;&nbsp;&nbsp;&nbsp;technicalAreas: [<span className="string">"Data Structures"</span>, <span className="string">"OOP"</span>, <span className="string">"Deep Learning"</span>, <span className="string">"Computer Vision"</span>, <span className="string">"Prompt Engineering"</span>, <span className="string">"Generative AI"</span>]<br />
              &nbsp;&nbsp;{"}"}<br />
              &nbsp;&nbsp;learning: [<span className="string">"AI Research"</span>, <span className="string">"Hacking"</span>, <span className="string">"Deep Learning"</span>, <span className="string">"Computer Vision"</span>]<br />
              {"}"};
            </CodeBlock>
          </FadeInSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Languages */} 
          <div>
            <FadeInSection>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/languages" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-blue">Languages</h3>
                  {languages.map((skill, index) => (
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

          {/* Frameworks */} 
          <div>
            <FadeInSection delay={100}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/frameworks" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-green">Frameworks</h3>
                  {frameworks.map((skill, index) => (
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

          {/* Technical Areas */} 
          <div>
            <FadeInSection delay={200}>
              <div className="terminal-window h-full">
                <TerminalHeader path="~/technical-areas" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-purple">Technical Areas</h3>
                  {technicalAreas.map((skill, index) => (
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
              <TerminalHeader path="~/others" />
              <div className="terminal-body">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-terminal-gray bg-opacity-30 rounded-md border border-white/10">
                    <h4 className="font-bold mb-2 text-terminal-blue">AI Research & Hacking</h4>
                    <ul className="space-y-1 text-sm">
                      <li>AI Research</li>
                      <li>Hacking</li>
                      <li>Generative AI</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-terminal-gray bg-opacity-30 rounded-md border border-white/10">
                    <h4 className="font-bold mb-2 text-terminal-green">Deep Learning & Computer Vision</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Deep Learning (DL)</li>
                      <li>Computer Vision (CVIP)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-terminal-gray bg-opacity-30 rounded-md border border-white/10">
                    <h4 className="font-bold mb-2 text-terminal-purple">Soft Skills</h4>
                    <ul className="space-y-1 text-sm">
                      {softSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
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
