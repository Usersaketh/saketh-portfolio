
import React, { ReactNode } from 'react';

interface CodeBlockProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`code-block ${className}`}>
      {title && (
        <div className="text-xs text-terminal-purple mb-2">// {title}</div>
      )}
      <div className="overflow-auto max-w-full">
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;
