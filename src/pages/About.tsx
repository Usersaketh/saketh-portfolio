
import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';

const About = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> cat about.md
            </h1>
            <p className="text-white/60 max-w-2xl">
              A bit about my background, interests, and what drives me as a developer.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FadeInSection>
              <div className="terminal-window">
                <TerminalHeader path="~/portfolio/about" />
                <div className="terminal-body">
                  <h2 className="text-xl font-bold mb-6 text-terminal-purple">
                    <span className="text-terminal-green">{">"}</span> whoami
                  </h2>
                  
                  <div className="space-y-4 text-white/80">
                    <p>
                      Hi, I'm Saketh! I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With a background in computer science, I've spent the last several years honing my skills in modern web technologies.
                    </p>
                    <p>
                      My journey into programming began when I was in high school, tinkering with HTML and CSS to create simple websites. What started as curiosity quickly evolved into a deep passion for software development. I went on to study Computer Science and have been actively coding and learning ever since.
                    </p>
                    <p>
                      I believe in writing clean, maintainable code and continuously improving my craft. I'm particularly interested in the intersection of technology and user experience - creating applications that not only function well but are also intuitive and enjoyable to use.
                    </p>
                    <p>
                      When I'm not coding, you might find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen. I also enjoy contributing to open-source projects and sharing my knowledge through technical blog posts.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4 text-terminal-blue">Work Experience</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold">Senior Frontend Developer</h4>
                      <p className="text-terminal-green text-sm">TechCorp Inc. | 2021 - Present</p>
                      <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                        <li>Led the frontend development for the company's flagship product</li>
                        <li>Implemented responsive designs and improved performance by 40%</li>
                        <li>Mentored junior developers and established coding standards</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold">Full Stack Developer</h4>
                      <p className="text-terminal-green text-sm">WebSolutions | 2018 - 2021</p>
                      <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                        <li>Developed and maintained client websites and web applications</li>
                        <li>Worked with React, Node.js, and MongoDB to build scalable applications</li>
                        <li>Collaborated with designers to implement pixel-perfect UIs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold">Junior Developer</h4>
                      <p className="text-terminal-green text-sm">StartupX | 2016 - 2018</p>
                      <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                        <li>Assisted in developing new features for the company's web platform</li>
                        <li>Participated in code reviews and quality assurance</li>
                        <li>Integrated third-party APIs and services</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4 text-terminal-blue">Education</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
                      <p className="text-terminal-green text-sm">University of Technology | 2012 - 2016</p>
                      <p className="text-white/70 mt-1">
                        Relevant coursework: Data Structures & Algorithms, Database Systems, Web Development, Software Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
          
          <div>
            <FadeInSection delay={100}>
              <div className="terminal-window mb-8">
                <TerminalHeader path="~/portfolio/interests" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-4 text-terminal-purple">Personal Interests</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Open Source</strong>: Contributing to projects that make the web better for everyone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Tech Writing</strong>: Sharing knowledge through tutorials and blog posts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Hiking</strong>: Exploring trails and disconnecting from technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Reading</strong>: Science fiction, technology, and philosophy</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="terminal-window">
                <TerminalHeader path="~/portfolio/values" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-4 text-terminal-blue">My Values</h3>
                  
                  <CodeBlock>
                    <span className="keyword">function</span> <span className="function">developerValues</span>() {"{"}<br />
                    &nbsp;&nbsp;<span className="keyword">return</span> [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Clean & maintainable code"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Continuous learning"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"User-centered design"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Collaborative problem solving"</span><br />
                    &nbsp;&nbsp;];<br />
                    {"}"}
                  </CodeBlock>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
