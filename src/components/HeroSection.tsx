import { useEffect, useState } from 'react';
import { Iphone16Pro } from './ui/Iphone16Pro';
import { HeroTextSection } from './HeroTextSection';
import InteractiveGridBackground from './ui/interactive-grid-background';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [showScreen, setShowScreen] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isVisible) return;

    const welcomeText = "welcome to Ego...";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        setTypingText(welcomeText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // After typing is complete, wait a bit then show the screen
        setTimeout(() => {
          setShowTyping(false);
          setShowScreen(true);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isVisible]);

  // Screen slide animation state
  const [screenSlideIn, setScreenSlideIn] = useState(false);

  // Trigger slide animation when screen should show
  useEffect(() => {
    if (showScreen) {
      const timer = setTimeout(() => {
        setScreenSlideIn(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showScreen]);

  // Determine the correct background image based on theme and language
  const getBackgroundImage = () => {
    if (theme === 'light' && language === 'en') {
      return '/assets/LightModeHeroAppEN.jpg';
    } else if (theme === 'light' && language === 'fa') {
      return '/assets/LightModeHeroApp.jpg';
    } else if (theme === 'dark' && language === 'fa') {
      return '/assets/DarkModeHeroApp.jpg';
    } else if (theme === 'dark' && language === 'en') {
      return '/assets/DarkModeHeroAppEN.jpg';
    }
    return '/assets/LightModeHeroApp.jpg'; // fallback
  };

  // Debug: Log current theme and language
  console.log('Current theme:', theme, 'Current language:', language, 'Background image:', getBackgroundImage());

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-200 via-red-100 to-gray-300 dark:from-black dark:via-gray-950 dark:to-black">
      {/* Full background coverage */}
      <div className="absolute inset-0 z-0 w-full h-full min-h-screen">
        {/* Fallback background with conditional blur */}
        <div className={`absolute inset-0 w-full h-full min-h-screen bg-gradient-to-br from-gray-200 via-red-100 to-gray-300 dark:from-black dark:via-gray-950 dark:to-black ${theme === 'light' ? 'backdrop-blur-lg' : ''}`} />
        
        <InteractiveGridBackground
          gridSize={50}
          gridColor="#d1d5db"
          darkGridColor="#1f2937"
          effectColor="rgba(0,255,255,0.3)"
          darkEffectColor="rgba(215, 33, 72, 0.45)"
          trailLength={3}
          glow
          glowRadius={20}
          showFade
          fadeIntensity={25}
          idleSpeed={0.01}
          idleRandomCount={2}
          className={`w-full h-full min-h-screen ${theme === 'light' ? 'backdrop-blur-lg' : ''}`}
        />
      </div>
      
      {/* Hero Text Section */}
      <HeroTextSection />

      <div className={`relative z-10 flex flex-col items-center justify-center transform transition-all duration-1500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}>
        <div className="relative">
          <div
            className={`transform transition-all duration-[900ms] ease-linear delay-0 ${
              isVisible ? 'translate-y-32 opacity-100 scale-100' : 'translate-y-96 opacity-100 scale-100'
            }`}
          >
            <div className="relative mx-auto -translate-x-32">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl animate-pulse opacity-0 transition-opacity duration-[900ms]"
                style={{
                  background: 'radial-gradient(circle, rgba(147,197,253,0.6) 0%, rgba(59,130,246,0.4) 30%, rgba(99,102,241,0.3) 60%, transparent 100%)',
                  animationDelay: '0ms',
                  opacity: isVisible ? 1 : 0
                }}
              />

              <div className={`absolute -inset-[150px] blur-3xl transition-opacity duration-[900ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  background: 'radial-gradient(circle at center, rgba(96,165,250,0.25) 0%, rgba(59,130,246,0.15) 40%, rgba(99,102,241,0.1) 70%, transparent 100%)',
                  animationDelay: '0ms'
                }}
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-lg animate-pulse opacity-0 transition-opacity duration-[900ms]"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(147,197,253,0.6) 50%, transparent 100%)',
                  animationDelay: '0ms',
                  opacity: isVisible ? 1 : 0
                }}
              />

                <div className="relative">
                <Iphone16Pro
                  width={433}
                  height={882}
                  src={showScreen ? getBackgroundImage() : ''}
                  showIsland={true}
                  islandWidth={130}
                  islandHeight={40}
                  frameColor="black"
                  frameDarkColor="black"
                  bezelColor="black"
                  screenRadius={55}
                  shadow={true}
                  rounded={true}
                  contentClassName={showScreen ? "object-cover" : ""}
                  contentStyle={{ 
                    borderRadius: '55px',
                    background: showTyping ? '#000000' : 'transparent',
                    transform: showScreen && screenSlideIn ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.8s ease-out'
                  }}
                  showCamera={true}
                  screenGradient="#ff00ff,#00ffff"
                  hoverAnimation={true}
                />
                  
                  {showTyping && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-full h-full bg-black rounded-[55px] flex items-center justify-center">
                        <div className="text-white text-3xl font-mono text-center">
                          {typingText}
                          <span className="animate-pulse">|</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1200 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
        </div>
      </div>

    </section>
  );
}
