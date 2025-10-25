import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'left' | 'center' | 'right';
  variant?: 'primary' | 'secondary' | 'accent';
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  staggerDelay?: number;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
  };
  className?: string;
  textClassName?: string;
}

export function ScrollReveal({
  children,
  size = 'md',
  align = 'left',
  variant = 'primary',
  enableBlur = false,
  baseOpacity = 0.1,
  baseRotation = 2,
  blurStrength = 3,
  staggerDelay = 0.05,
  springConfig = {
    damping: 15,
    stiffness: 200,
    mass: 0.5,
  },
  className = '',
  textClassName = '',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger animation with spring easing
            animateElement();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const animateElement = () => {
    const startTime = Date.now();
    const duration = 1000; // 1 second animation

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Spring easing function
      const springProgress = 1 - Math.pow(1 - progress, 3);
      
      setAnimationProgress(springProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const getSizeClasses = () => {
    const sizeMap = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    };
    return sizeMap[size];
  };

  const getAlignClasses = () => {
    const alignMap = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };
    return alignMap[align];
  };

  const getVariantClasses = () => {
    const variantMap = {
      primary: 'text-white',
      secondary: 'text-gray-300',
      accent: 'text-blue-400',
    };
    return variantMap[variant];
  };

  const getTransformStyle = () => {
    const translateY = (1 - animationProgress) * 30;
    const opacity = baseOpacity + (animationProgress * (1 - baseOpacity));
    const rotation = (1 - animationProgress) * baseRotation;
    const blur = enableBlur ? (1 - animationProgress) * blurStrength : 0;

    return {
      transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
      opacity: opacity,
      filter: enableBlur ? `blur(${blur}px)` : 'none',
      transition: 'all 0.3s ease-out',
    };
  };

  return (
    <div
      ref={elementRef}
      className={`${getSizeClasses()} ${getAlignClasses()} ${getVariantClasses()} ${className}`}
      style={isVisible ? getTransformStyle() : {
        transform: `translateY(30px) rotate(${baseRotation}deg)`,
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      }}
    >
      <div className={textClassName}>
        {children}
      </div>
    </div>
  );
}
