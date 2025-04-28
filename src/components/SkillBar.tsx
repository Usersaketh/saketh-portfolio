
import React from 'react';
import FadeInSection from './FadeInSection';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  level, 
  color = "bg-terminal-purple",
  index
}) => {
  return (
    <FadeInSection delay={index * 100}>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-white font-mono">{name}</span>
          <span className="text-white/50 font-mono text-sm">{level}%</span>
        </div>
        <div className="h-2 bg-terminal-gray rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} rounded-full`} 
            style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
          ></div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default SkillBar;
