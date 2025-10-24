import React, { useEffect, useRef } from 'react';

interface ShinyTextProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  baseColor?: string;
  shineColor?: string;
  speed?: number;
  direction?: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
  intensity?: number;
  shineWidth?: number;
  pauseOnHover?: boolean;
  repeat?: number;
  gradientType?: 'linear' | 'radial';
  disabled?: boolean;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  size = 'lg',
  weight = 'normal',
  baseColor = 'rgba(255, 255, 255, 0.3)',
  shineColor = 'rgba(255, 255, 255, 0.9)',
  speed = 1,
  direction = 'left-to-right',
  intensity = 0.8,
  shineWidth = 20,
  pauseOnHover = false,
  repeat = Infinity,
  gradientType = 'linear',
  disabled = false,
  className = '',
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (disabled || !textRef.current) return;

    const element = textRef.current;
    let animationId: number;
    let startTime: number;
    let isPaused = false;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      if (!isPaused) {
        const elapsed = timestamp - startTime;
        const progress = (elapsed / (2000 / speed)) % 1;
        
        const gradient = gradientType === 'radial' 
          ? `radial-gradient(circle at ${progress * 100}% 50%, ${shineColor} 0%, ${baseColor} ${shineWidth}%, ${baseColor} 100%)`
          : direction === 'left-to-right'
          ? `linear-gradient(90deg, ${baseColor} 0%, ${shineColor} ${(progress * 100 - shineWidth)}%, ${shineColor} ${(progress * 100)}%, ${baseColor} ${(progress * 100 + shineWidth)}%, ${baseColor} 100%)`
          : direction === 'right-to-left'
          ? `linear-gradient(270deg, ${baseColor} 0%, ${shineColor} ${(progress * 100 - shineWidth)}%, ${shineColor} ${(progress * 100)}%, ${baseColor} ${(progress * 100 + shineWidth)}%, ${baseColor} 100%)`
          : direction === 'top-to-bottom'
          ? `linear-gradient(180deg, ${baseColor} 0%, ${shineColor} ${(progress * 100 - shineWidth)}%, ${shineColor} ${(progress * 100)}%, ${baseColor} ${(progress * 100 + shineWidth)}%, ${baseColor} 100%)`
          : `linear-gradient(0deg, ${baseColor} 0%, ${shineColor} ${(progress * 100 - shineWidth)}%, ${shineColor} ${(progress * 100)}%, ${baseColor} ${(progress * 100 + shineWidth)}%, ${baseColor} 100%)`;

        element.style.background = gradient;
        element.style.backgroundClip = 'text';
        element.style.webkitBackgroundClip = 'text';
        element.style.webkitTextFillColor = 'transparent';
      }
      
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      startTime = 0;
      animationId = requestAnimationFrame(animate);
    };

    startAnimation();

    if (pauseOnHover) {
      const handleMouseEnter = () => { isPaused = true; };
      const handleMouseLeave = () => { isPaused = false; startTime = 0; };
      
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        cancelAnimationFrame(animationId);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => cancelAnimationFrame(animationId);
  }, [baseColor, shineColor, speed, direction, intensity, shineWidth, pauseOnHover, gradientType, disabled]);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  };

  return (
    <span
      ref={textRef}
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${className}`}
      style={{
        background: disabled ? 'none' : undefined,
        backgroundClip: disabled ? 'unset' : undefined,
        WebkitBackgroundClip: disabled ? 'unset' : undefined,
        WebkitTextFillColor: disabled ? 'inherit' : undefined,
      }}
    >
      {children}
    </span>
  );
};
