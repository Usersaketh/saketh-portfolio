
import React from 'react';

interface TerminalHeaderProps {
  path?: string;
  className?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ 
  path = "~/portfolio", 
  className = "" 
}) => {
  console.log('TerminalHeader rendering with path:', path);
  
  return (
    <div className={`terminal-header ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-sm text-center opacity-80 flex-1">
        <span className="text-terminal-green">user@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-terminal-blue">{path}</span>
        <span className="text-gray-400">$</span>
      </div>
      <div className="w-16"></div>
    </div>
  );
};

export default TerminalHeader;
