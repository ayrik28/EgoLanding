import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ToggleThemeProps {
  duration?: number;
  animationType?: 'circle-spread' | 'diag-down-right' | 'diag-up-left' | 'wipe-left' | 'wipe-right' | 'fade';
  className?: string;
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({
  duration = 300,
  animationType = 'Swipe-left',
  className = 'bg-gray-100/20 dark:bg-gray-800/20'
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if View Transition API is supported
  const supportsViewTransitions = typeof document !== 'undefined' && 'startViewTransition' in document;

  const handleToggle = async () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (supportsViewTransitions) {
      // Apply custom animation first
      await applyCustomAnimation(animationType, duration);
      
      // Use View Transition API for smooth animations
      const transition = document.startViewTransition(() => {
        toggleTheme();
      });
      
      await transition.finished;
    } else {
      // Fallback for browsers without View Transition API
      toggleTheme();
    }

    setIsAnimating(false);
  };

  const applyCustomAnimation = async (type: string, duration: number) => {
    if (!supportsViewTransitions) return;
    
    switch (type) {
      case 'swipe-right':
        document.documentElement.animate(
          {
            clipPath: [
              `inset(0 100% 0 0)`,
              `inset(0 0% 0 0)`,
            ],
          },
          {
            duration,
            easing: "cubic-bezier(0.2, 0, 0, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
        break;
      default:
        // No custom animation for other types
        break;
    }
  };


  return (
    <button
      onClick={handleToggle}
      disabled={isAnimating}
      className={`
        flex items-center justify-center w-10 h-10 
        rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl 
        border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 
        transition-all duration-300 hover:scale-110 group
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-gray-700 group-hover:text-gray-900 transition-colors" />
      ) : (
        <Sun className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
      )}
    </button>
  );
};
