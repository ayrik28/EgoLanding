import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  children: string;
  delay?: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  onComplete?: () => void;
}

export const TypingText: React.FC<TypingTextProps> = ({
  children,
  delay = 0,
  duration = 2,
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  color = 'text-white',
  letterSpacing = 'tracking-normal',
  align = 'left',
  className = '',
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentIndex(0);
      setDisplayedText('');
    };

    const timer = setTimeout(startTyping, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, children]);

  useEffect(() => {
    if (!isTyping || currentIndex >= children.length) {
      if (currentIndex >= children.length && onComplete) {
        onComplete();
      }
      return;
    }

    const typingSpeed = (duration * 1000) / children.length;
    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + children[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, children, duration, onComplete]);

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <span
        className={`${fontSize} ${fontWeight} ${color} ${letterSpacing} inline-block`}
      >
        {displayedText}
        {isTyping && currentIndex < children.length && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    </div>
  );
};
