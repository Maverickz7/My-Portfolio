import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  characters?: string;
  speed?: number;
}

const TextScramble: React.FC<TextScrambleProps> = ({ 
  text, 
  className = "", 
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*", 
  speed = 40 
}) => {
  const [displayText, setDisplayText] = useState("");
  const iterationRef = useRef(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    iterationRef.current = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterationRef.current >= text.length) {
        clearInterval(intervalRef.current);
      }

      iterationRef.current += 1 / 3; // Slow down the reveal
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, characters, speed]);

  return <span className={className}>{displayText}</span>;
};

export default TextScramble;