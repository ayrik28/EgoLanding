import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ToggleTheme } from './ui/toggle-theme';
import { Switch } from './lightswind/switch';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-white/20 dark:border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center h-12 relative">
          {/* Left side - empty for balance */}
          <div className="flex-1"></div>

          {/* Center - Brand Name */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Egoapp
            </h1>
          </div>

          {/* Right side - Both Switches */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">FA</span>
              <Switch
                checked={language === 'en'}
                onCheckedChange={toggleLanguage}
                size="sm"
                trackColor={language === 'en' ? '#3b82f6' : '#6b7280'}
                thumbColor="#ffffff"
                animation="smooth"
              />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">EN</span>
            </div>
            
            {/* Theme Toggle */}
            <ToggleTheme 
              duration={600}
              animationType="swipe-right"
              className="bg-gray-100/20 dark:bg-gray-800/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
