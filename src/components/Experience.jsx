import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Award, Trophy } from 'lucide-react';

const Experience = () => {
  // Experience data directly in component
  const experienceData = {
    experience: [
      {
        id: 1,
        position: "Frontend Developer Intern",
        company: "Coding Rajas Technologies Ltd.",
        duration: "Jan 2024 - Feb 2024",
        location: "Online",
        description: [
          "Developed a fully functional music player application using front-end technologies (HTML, CSS, Javascript).",
          "Improved the user interface and user experience by redesigning key elements, enhancing the overall usability of the player."
        ]
      }
    ],
    certifications: [
      {
        name: "Oracle Certified Foundations Associate",
        year: "2025"
      },
      {
        name: "Google Cloud: Generative AI Learning Path (LLMs, GenAI, Responsible AI)",
        year: "2024"
      },
      {
        name: "Deeplearning.AI: Building AI Applications with Haystack",
        year: "2025"
      },
      {
        name: "Coursera: Python Crash Course (Google)",
        year: "2023"
      },
      {
        name: "Coursera: Introduction to Generative AI (IBM)",
        year: "2024"
      }
    ],
    achievements: [
      {
        title: "STACKATHON 2025 – 1st Prize",
        year: "2025",
        description: "Won first prize for Odyssey, a production-style travel journaling platform handling 2K–5K concurrent users with containerized deployment.",
        link: "https://lnkd.in/p/g8YmunNA",
        linkText: "View on LinkedIn"
      },
      {
        title: "OnePlus Bug Bounty – Master-Hand Contributor",
        year: "2025",
        description: "Recognized by OnePlus for reporting a validated security issue and rewarded under their bug bounty program.",
        link: "https://security.oneplus.com/en/charts",
        linkText: "Check Oneplus Hall of Fame"
      },
      {
        title: "Greenthicks – Full Stack Developer (Tech Collaborator)",
        year: "2025",
        description: "Contributed to Greenthicks, an early-stage farm-to-table startup, helping build core website pages and supporting product iterations based on real user feedback.",
        link: "https://greenthicks.live/",
        linkText: "Visit Website"
      },
      {
        title: "Enterprise-Level Projects",
        year: "2025",
        description: "Built multiple production-style projects including StockPulse (distributed ETL for 65+ companies), Worknix (job portal with thousands of listings), and ResumeGPT (AI-based resume enhancer).",
        link: "https://github.com/usersaketh",
        linkText: "Check GitHub"
      }
    ]

  };

  const { experience, certifications, achievements } = experienceData;

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Experience & <span className="text-blue-500">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey, certifications, and key achievements in technology and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Experience & Achievements */}
            <div className="space-y-8">
              {/* Work Experience */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Work Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.map((exp, index) => (
                      <div key={exp.id} className={`${index > 0 ? 'border-t border-border/50 pt-4' : ''}`}>
                        <div className="mb-4">
                          <h4 className="font-semibold text-lg">{exp.position}</h4>
                          <p className="text-blue-500 font-medium">{exp.company} | {exp.duration}</p>
                          <p className="text-muted-foreground text-sm">{exp.location}</p>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex">
                              <span className="text-blue-500 mr-2">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Key Achievements
                  </h3>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`${index > 0 ? 'border-t border-border/50 pt-2' : ''}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-base">{achievement.title}</h4>
                          <Badge variant="outline" className="text-blue-500 border-blue-500/30">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                          {achievement.description}
                        </p>
                        {achievement.link && (
                          <a 
                            href={achievement.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-blue-500 hover:text-blue-400 transition-colors"
                          >
                            {achievement.linkText} →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Certifications */}
            <div className="space-y-8">
              {/* Certifications */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Certifications
                  </h3>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className={`${index > 0 ? 'border-t border-border/50 ' : ''}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pt-2">
                            <h4 className="font-semibold text-base">{cert.name+"  "}
                            <Badge variant="outline" className="text-blue-500 border-blue-500/30">
                                {cert.year}
                            </Badge></h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills Timeline */}
              <Card className="p-6 bg-background border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-blue-500">
                    Learning Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                      <div>
                        <p className="font-medium">AI/ML Specialization</p>
                        <p className="text-sm text-muted-foreground">2024 - Present</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                      <div>
                        <p className="font-medium">Full-Stack Development</p>
                        <p className="text-sm text-muted-foreground">2023 - 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-300 rounded-full mr-4"></div>
                      <div>
                        <p className="font-medium">Programming Fundamentals</p>
                        <p className="text-sm text-muted-foreground">2022 - 2023</p>
                      </div>
                    </div>
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

export default Experience;
