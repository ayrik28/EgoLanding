import { useLanguage } from '../context/LanguageContext';
import Globe from './lightswind/globe';

export function IntroSection() {
  const { language } = useLanguage();

  const content = {
    fa: {
      title: "مشکل عادات جدید",
      description: "بسیاری از ما برای ساختن عادات جدید به اپلیکیشنها پناه میبریم، اما اغلب پس از مدتی، انگیزهٔ خود را از دست داده و آن عادت به فراموشی سپرده میشود. ریشهٔ این مشکل چیست؟ نبود یک حامی و مربی که پیشرفت ما را پیگیری کند، با ما گفتگو کند و در لحظات سستیراهنماییمان دهد."
    },
    en: {
      title: "The New Habits Problem",
      description: "Many of us turn to apps to build new habits, but often after a while, we lose our motivation and that habit is forgotten. What is the root of this problem? The lack of a supporter and coach who tracks our progress, talks to us, and guides us in moments of weakness."
    }
  };

  const currentContent = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Globe component */}
        <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
          <Globe
            theta={0.25}
            dark={0}
            scale={1.1}
            diffuse={1.2}
            baseColor="#1a1a1a"
            markerColor="#ff0000"
            glowColor="#444444"
            className="w-full h-full"
          />
        </div>

        {/* Right side - Text content */}
        <div className={`space-y-8 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <div className={`max-w-2xl ${language === 'fa' ? 'text-right' : 'text-left'}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
