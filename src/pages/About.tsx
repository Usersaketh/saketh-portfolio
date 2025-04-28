import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TerminalHeader from '../components/TerminalHeader';
import CodeBlock from '../components/CodeBlock';

const About = () => {
  return (
    <div className="min-h-screen">
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
                <TerminalHeader path="~/about" />
                <div className="terminal-body">
                  <h2 className="text-xl font-bold mb-6 text-terminal-purple">
                    <span className="text-terminal-green">{">"}</span> whoami
                  </h2>

                  <div className="space-y-4 text-white/80">
                    <p>
                      Hi, I'm Saketh! I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With a background in computer science and a specialization in AI and Machine Learning (AIML), I've spent the last several years honing my skills in modern web technologies and exploring the intersection of web development and intelligent systems.
                    </p>
                    <p>
                      My journey into programming started in college, where I dove into web development and began working on full-stack projects using technologies like React, Node.js, and Java. Along the way, I developed a strong interest in AI and machine learning, and I'm now focused on integrating intelligent systems into the applications I build.
                    </p>
                    <p>
                      I believe in writing clean, maintainable code and continuously improving my craft. I'm particularly interested in how web development and AI can come together to create dynamic, intelligent applications that offer a seamless user experience.
                    </p>
                    <p>
                      When I'm not coding, I enjoy exploring new tech trends, Playing mobile games, and watching movies. I'm also passionate about AI research, and I keep experimenting with new techniques to integrate machine learning models into real-world applications.
                    </p>
                  </div>


                  <h3 className="text-xl font-bold mt-8 mb-4 text-terminal-blue">Work Experience</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold">Frontend Developer Intern</h4>
                      <p className="text-terminal-green text-sm">Coding Rajas Technologies Ltd. | Jan 2024 - Feb 2024</p>
                      <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                        <li>Developed a fully functional music player application using front-end technologies (HTML, CSS, JavaScript).</li>
                        <li>Improved the user interface and user experience by redesigning key elements, enhancing the overall usability of the player.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold">Data Analyst Intern</h4>
                      <p className="text-terminal-green text-sm">Deloitte Australia | Mar 2025</p>
                      <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                        <li>Worked with large datasets, performing data cleaning and pre-processing to ensure quality and consistency for analysis.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-terminal-blue">Education</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">Bachelor of Technology - Computer Science Engineering (AIML)</h4>
                      <p className="text-terminal-green text-sm">Kakatiya Institute of Technology and Science, Warangal | Nov 2022 – Present</p>
                      <p className="text-white/70 mt-1">
                        Relevant courses: Data Structures, Analysis of Algorithms, Artificial Intelligence, Machine Learning, Databases.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold">Board of Intermediate Education - MPC</h4>
                      <p className="text-terminal-green text-sm">Sri Chaitanya Jr. College, Khammam | Aug 2020 – Apr 2022</p>
                      <p className="text-white/70 mt-1">Percentage: 97.3%</p>
                    </div>

                    <div>
                      <h4 className="font-bold">Board of Secondary Education - SSC</h4>
                      <p className="text-terminal-green text-sm">Montessori High School, Khammam | March 2020</p>
                      <p className="text-white/70 mt-1">GPA: 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div>
            <FadeInSection delay={100}>
            <div className="terminal-window mb-8">
              <TerminalHeader path="~/certifications" />
              <div className="terminal-body">
                <h3 className="text-lg font-bold mb-4 text-terminal-purple">Certifications</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-terminal-green mr-2">▹</span>
                    <span><strong>Cisco</strong>: Python Essentials 1 (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terminal-green mr-2">▹</span>
                    <span><strong>Coursera</strong>: Introduction to HTML, CSS, & JavaScript (IBM) (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terminal-green mr-2">▹</span>
                    <span><strong>Coursera</strong>: Python Crash Course (Google) (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terminal-green mr-2">▹</span>
                    <span><strong>Coursera</strong>: Introduction to Generative AI (IBM) (2024)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terminal-green mr-2">▹</span>
                    <span><strong>Google Cloud</strong>: Specialization in Generative AI Learning Path (Intro to Gen AI, LLMs, Responsible AI) (2024)</span>
                  </li>
                </ul>
              </div>
            </div>

              <div className="terminal-window mb-8">
                <TerminalHeader path="~/interests" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-4 text-terminal-purple">Personal Interests</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Mobile & Video Games</strong>: Exploring new games and gaming technology.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Exploring Tech/Web</strong>: Staying updated on the latest in tech and web development.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Movies</strong>: Watching and analyzing films, particularly in the sci-fi and Romantic genres.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span><strong>Travelling</strong>: Exploring new places and experiencing different cultures.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="terminal-window">
                <TerminalHeader path="~/values" />
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
