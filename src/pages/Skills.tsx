
import React from 'react';
import SkillTag from '../components/SkillTag';

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
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise areas. 
            I'm constantly learning and expanding this list to stay current with industry trends.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Programming Languages */}
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-600 dark:text-blue-400">
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

          {/* Frameworks & Technologies */}
          <div className="animate-fade-in-up animate-delay-100">
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-green-600 dark:text-green-400">
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

          {/* Technical Expertise */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-purple-600 dark:text-purple-400">
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

          {/* Tools & Platforms */}
          <div className="animate-fade-in-up animate-delay-300">
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-orange-600 dark:text-orange-400">
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

          {/* Areas of Interest */}
          <div className="animate-fade-in-up animate-delay-300">
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Areas of Interest
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {areasOfInterest.map((interest, index) => (
                  <div
                    key={interest}
                    className="p-4 bg-muted rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
