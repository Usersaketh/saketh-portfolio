import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  // Portfolio data directly in component
  const portfolioData = {
    personal: {
      name: "DUSSA PRANAY SAKETH",
      whoami: "Hi, I'm Saketh! I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With a background in computer science and a specialization in AI and Machine Learning (AIML), I've spent the last several years honing my skills in modern web technologies and exploring the intersection of web development and intelligent systems.",
      journey: "My journey into programming started in college, where I dove into web development and began working on full-stack projects using technologies like React, Node.js, and Java. Along the way, I developed a strong interest in AI and machine learning, and I'm now focused on integrating intelligent systems into the applications I build.",
      philosophy: "I believe in writing clean, maintainable code and continuously improving my craft. I'm particularly interested in how web development and AI can come together to create dynamic, intelligent applications that offer a seamless user experience.",
      interests_note: "When I'm not coding, I enjoy exploring new tech trends, playing mobile games, and watching movies. I'm also passionate about AI research, and I keep experimenting with new techniques to integrate machine learning models into real-world applications.",
      location: "Warangal, Telangana",
      values: [
        "Clean & maintainable code",
        "Continuous learning",
        "User-centered design",
        "Collaborative problem solving"
      ]
    },
    education: [
      {
        id: 1,
        degree: "Bachelor of Technology - Computer Science Engineering (AIML)",
        institution: "Kakatiya Institute of Technology and Science, Warangal",
        duration: "Nov 2022 - Present",
        location: "Warangal, Telangana",
        courses: "Data Structures, Analysis of Algorithms, Artificial Intelligence, Machine Learning, Databases",
        GPA: "9.17"
      },
      {
        id: 2,
        degree: "Board of Intermediate Education - MPC", 
        institution: "Sri Chaitanya Jr. College, Khammam",
        duration: "Aug 2020 - Apr 2022",
        location: "Khammam, Telangana",
        percentage: "97.3%"
      },
      {
        id: 3,
        degree: "Board of Secondary Education - SSC",
        institution: "Montessori High School, Khammam", 
        duration: "March 2020",
        location: "Khammam, Telangana",
        gpa: "10"
      }
    ],
    experience: [],
    personalInterests: [
      "Mobile & Video Games: Exploring new games and gaming technology",
      "Exploring Tech/Web: Staying updated on the latest in tech and web development", 
      "Movies: Watching and analyzing films, particularly in the sci-fi and Romantic genres",
      "Travelling: Exploring new places and experiencing different cultures"
    ],
    certifications: []
  };

  const { personal, education, personalInterests } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-20">
        <div className="w-full ">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and what drives my passion for technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Takes 2/3 of the space */}
            <div className="lg:col-span-2 space-y-8">
              {/* Whoami Section */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-blue-500">
                    <span className="text-blue-300">&gt;</span> Who Am I ?
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{personal.whoami}</p>
                    <p>{personal.journey}</p>
                    <p>{personal.philosophy}</p>
                    <p>{personal.interests_note}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-blue-500 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Education
                  </h3>
                  <div className="space-y-2">
                    {education.map((edu, index) => (
                      <div key={edu.id} className={`${index > 0 ? 'border-t border-border/50 pt-2' : ''}`}>
                        <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                        <p className="text-blue-500 font-medium mb-2">{edu.institution} | {edu.duration}</p>
                        {edu.courses && (
                          <div className="space-y-2">
                            <p className="text-muted-foreground text-sm">
                              <span className="font-medium">Relevant courses:</span> {edu.courses}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              <span className="font-medium">CGPA: </span> {edu.GPA}
                            </p>
                          </div>

                        )}
                        {edu.percentage && (
                          <p className="text-muted-foreground text-sm">
                            <span className="font-medium">Percentage:</span> {edu.percentage}
                          </p>
                        )}
                        {edu.gpa && (
                          <p className="text-muted-foreground text-sm">
                            <span className="font-medium">GPA:</span> {edu.gpa}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Takes 1/3 of the space */}
            <div className="lg:col-span-1 space-y-8">
              {/* Personal Interests */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-blue-500">
                    Personal Interests
                  </h3>
                  <ul className="space-y-3">
                    {personalInterests.map((interest, index) => (
                      <li key={index} className="text-muted-foreground text-sm leading-relaxed flex">
                        <span className="text-blue-500 mr-3">▸</span>
                        {interest}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* My Values - Terminal Style */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  

                  <h3 className="text-xl font-semibold mb-6 text-blue-500">
                    My Values
                  </h3>
                  
                  <div className="font-mono text-sm">
                    <div className="text-blue-400 mb-2">function developerValues() {'{'}</div>
                    <div className="text-blue-400 ml-4 mb-2">return [</div>
                    {personal.values.map((value, index) => (
                      <div key={index} className="ml-8 text-blue-400">
                        "{value}"{index < personal.values.length - 1 ? ',' : ''}
                      </div>
                    ))}
                    <div className="text-blue-400 ml-4">];</div>
                    <div className="text-blue-400">{'}'}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;