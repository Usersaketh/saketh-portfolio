
import React from 'react';

interface SkillTagProps {
  name: string;
  category: 'language' | 'framework' | 'technical' | 'tool';
  index: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, category, index }) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'language':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800';
      case 'framework':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800';
      case 'technical':
        return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800';
      case 'tool':
        return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800';
      default:
        return 'bg-secondary text-secondary-foreground border-border';
    }
  };

  return (
    <div 
      className={`
        inline-block px-4 py-2 rounded-lg border text-sm font-medium
        transition-all duration-300 hover:scale-105 cursor-default
        ${getCategoryStyles()}
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {name}
    </div>
  );
};

export default SkillTag;
