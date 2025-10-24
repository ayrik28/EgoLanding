import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
      )}
    </button>
  );
}
