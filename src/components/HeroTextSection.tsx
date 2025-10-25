import { ShinyText } from './ui/shiny-text';
import { useLanguage } from '../context/LanguageContext';

export function HeroTextSection() {
  const { language } = useLanguage();

  const content = {
    fa: {
      title: "EGO",
      description: "همراه تو در مسیر رشد فردی‌ست — با کوچینگ هوش مصنوعی که تو را می‌شناسد، می‌فهمد و راهنمایی‌ات می‌کند تا به بهترین خودت برسی."
    },
    en: {
      title: "EGO",
      description: "Your companion on the path of personal growth — with AI coaching that knows you, understands you, and guides you to become your best self."
    }
  };

  const currentContent = content[language];

  return (
    <div className={`absolute top-1/3 right-24 -translate-y-1/2 z-20 flex flex-col space-y-4 ${language === 'fa' ? 'items-end' : 'items-start'}`}>
      <div className={language === 'fa' ? 'text-right' : 'text-left'}>
        <ShinyText 
          size="4xl" 
          weight="bold"
          baseColor="rgba(255, 255, 255, 0.3)"
          shineColor="rgba(255, 255, 255, 0.9)"
          speed={2}
          direction="left-to-right"
          intensity={0.8}
          shineWidth={25}
          pauseOnHover={true}
          gradientType="linear"
        >
          {currentContent.title}
        </ShinyText>
      </div>
      
      <div className={`max-w-sm ${language === 'fa' ? 'text-right' : 'text-left'}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
        <p className="text-white/90 text-lg font-medium leading-relaxed">
          {currentContent.description}
        </p>
      </div>
    </div>
  );
}
