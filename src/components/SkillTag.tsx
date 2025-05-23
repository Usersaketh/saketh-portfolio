
import React from 'react';
import FadeInSection from './FadeInSection';

interface SkillTagProps {
  name: string;
  category: 'language' | 'framework' | 'technical' | 'tool';
  index: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ 
  name, 
  category,
  index
}) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'language':
        return 'bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30 hover:bg-terminal-blue/30';
      case 'framework':
        return 'bg-terminal-green/20 text-terminal-green border-terminal-green/30 hover:bg-terminal-green/30';
      case 'technical':
        return 'bg-terminal-purple/20 text-terminal-purple border-terminal-purple/30 hover:bg-terminal-purple/30';
      case 'tool':
        return 'bg-white/10 text-white border-white/20 hover:bg-white/20';
      default:
        return 'bg-white/10 text-white border-white/20 hover:bg-white/20';
    }
  };

  return (
    <FadeInSection delay={index * 50}>
      <div 
        className={`
          inline-block px-4 py-2 rounded-full border font-mono text-sm
          transition-all duration-300 hover:scale-105 cursor-default
          ${getCategoryStyles()}
        `}
      >
        {name}
      </div>
    </FadeInSection>
  );
};

export default SkillTag;
