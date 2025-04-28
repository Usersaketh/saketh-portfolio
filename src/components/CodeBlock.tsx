
import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  className?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = "javascript", 
  className = "",
  title
}) => {
  return (
    <div className={`code-block ${className}`}>
      {title && (
        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
          <span className="text-xs text-white/50">{title}</span>
          <span className="text-xs text-white/50">{language}</span>
        </div>
      )}
      <pre className="text-white">
        <code>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
