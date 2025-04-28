
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
  showCursor?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 70,
  className = "",
  startDelay = 0,
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, isTyping]);

  return (
    <span ref={textRef} className={`inline-block ${className}`}>
      {displayText}
      {showCursor && isTyping && displayText.length < text.length && 
        <span className="animate-blink">|</span>
      }
    </span>
  );
};

export default TypewriterText;
