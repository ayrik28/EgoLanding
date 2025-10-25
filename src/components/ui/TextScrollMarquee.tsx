import React, { useEffect, useRef, useState } from 'react';

interface TextScrollMarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 'left' | 'right';
  className?: string;
  scrollDependent?: boolean;
  delay?: number;
}

export default function TextScrollMarquee({
  children,
  baseVelocity = 1,
  direction = 'left',
  className = '',
  scrollDependent = false,
  delay = 0
}: TextScrollMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!containerRef.current || !isVisible) return;

    const container = containerRef.current;
    const textElements = container.querySelectorAll('.marquee-text');
    
    let animationId: number;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      
      const velocity = scrollDependent 
        ? baseVelocity * (1 + window.scrollY / 1000)
        : baseVelocity;
      
      const translateX = direction === 'left' 
        ? -(elapsed * velocity) % 100
        : (elapsed * velocity) % 100;

      textElements.forEach((element) => {
        (element as HTMLElement).style.transform = `translateX(${translateX}%)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [baseVelocity, direction, scrollDependent, isVisible]);

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
    >
      <div className="inline-block marquee-text">
        {children}
      </div>
      <div className="inline-block marquee-text ml-8">
        {children}
      </div>
      <div className="inline-block marquee-text ml-8">
        {children}
      </div>
    </div>
  );
}
