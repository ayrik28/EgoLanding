import { Home, Sparkles, Info, Mail } from 'lucide-react';

export function SideNav() {
  const navItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: Sparkles, label: 'Features', href: '#introduce' },
    { icon: Info, label: 'About', href: '#about' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 bg-gray-200/20 dark:bg-gray-300/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-300/20 dark:border-gray-400/15 hover:shadow-xl transition-all duration-500 hover:scale-102 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-orange-200/10 before:to-transparent before:pointer-events-none">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100/30 dark:bg-gray-200/20 hover:bg-gray-200/40 dark:hover:bg-gray-300/25 transition-all duration-300 hover:scale-105 hover:rotate-2 shadow-sm hover:shadow-md backdrop-blur-sm border border-gray-300/15 dark:border-gray-400/10 hover:border-orange-300/20 dark:hover:border-orange-400/15"
          aria-label={item.label}
        >
          <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
          <span className="absolute left-full ml-3 px-2 py-1.5 bg-gray-200/40 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-gray-300/20 dark:border-gray-600/20 backdrop-blur-sm">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
