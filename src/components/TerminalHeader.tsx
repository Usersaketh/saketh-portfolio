
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface TerminalHeaderProps {
  path?: string;
  className?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ 
  path = "~/portfolio", 
  className = "" 
}) => {
  console.log('TerminalHeader rendering with path:', path);
  const isMobile = useIsMobile();
  
  return (
    <div className={`terminal-header ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-sm opacity-80 flex-1 line-clamp-1 mx-1 ">
        <span className="text-terminal-green">{isMobile ? '@' : '\u00A0saketh@portfolio'}</span>
        <span className="text-gray-400">:</span>
        <span className="text-terminal-blue">{ path }</span>
        <span className="text-gray-400">$</span>
      </div>
      
    </div>
  );
};

export default TerminalHeader;
