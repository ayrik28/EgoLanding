import { useLanguage } from '../context/LanguageContext';
import Globe from './lightswind/globe';
import TextScrollMarquee from './ui/TextScrollMarquee';
import BeamCircle from './ui/beam-circle';
import { ScrollReveal } from './ui/scroll-reveal';
import { Zap } from 'lucide-react';

export function IntroSection() {
  const { language } = useLanguage();

  const content = {
    fa: {
      title: "مشکل عادات جدید",
      description: "بسیاری از ما برای ساختن عادات جدید به اپلیکیشنها پناه میبریم، اما اغلب پس از مدتی، انگیزهٔ خود را از دست داده و آن عادت به فراموشی سپرده میشود. ریشهٔ این مشکل چیست؟ نبود یک حامی و مربی که پیشرفت ما را پیگیری کند، با ما گفتگو کند و در لحظات سستیراهنماییمان دهد.",
      marqueeText: "🌟 مشکل عادات جدید - چرا اپلیکیشن‌ها کافی نیستند؟ 🌟",
      solutionTitle: "راه حل ایگو",
      solutionDescription: "یادت می‌ره ورزش کنی؟ کتاب بخونی؟ یا یک مهارت جدید یاد بگیری؟ ما توی ایگو باور می‌کنیم که مشکل، اراده نیست، مشکل روش است!",
      solution: [
        "اول، هر هدف بزرگی را به عادت‌های کوچک و روزانه تبدیل می‌کنیم.",
        "بعد، «کوچ هوشمند» ما میاد کنارت می‌شینه و مثل یک دوست آگاه، پیشرفتت را دنبال می‌کند و تو راه نگت می‌دارد.",
        "قبل از اینکه حتی بفهمی، آن کار جدید، جزئی از زندگیت شده! در واقع ایگو کمک می‌کند تا به بهترین نسخهٔ خودت تبدیل بشی."
      ]
    },
    en: {
      title: "The New Habits Problem",
      description: "Many of us turn to apps to build new habits, but often after a while, we lose our motivation and that habit is forgotten. What is the root of this problem? The lack of a supporter and coach who tracks our progress, talks to us, and guides us in moments of weakness.",
      marqueeText: "🌟 The New Habits Problem - Why Apps Aren't Enough? 🌟",
      solutionTitle: "EGO's Solution",
      solutionDescription: "Do you forget to exercise? Read books? Or learn a new skill? We at EGO believe that the problem is not willpower, it's the method!",
      solution: [
        "First, we transform every big goal into small daily habits.",
        "Then, our 'Smart Coach' comes and sits beside you, like an aware friend, tracking your progress and guiding you on the path.",
        "Before you even realize it, that new activity has become part of your life! In fact, EGO helps you become the best version of yourself."
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="min-h-screen flex flex-col justify-start py-20 px-4 bg-black">
      {/* Header with TextScrollMarquee - positioned above the problem section */}
      <div className="w-full mb-8">
        <TextScrollMarquee
          baseVelocity={0.01}
          direction="left"
          className="text-3xl font-bold uppercase text-white"
          scrollDependent={false}
          delay={500}
        >
          {currentContent.marqueeText}
        </TextScrollMarquee>
      </div>

      {/* Main content - New Habits Problem section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', direction: language === 'fa' ? 'rtl' : 'ltr' }}>
              {currentContent.title}
            </h2>
            
             <div className={`max-w-2xl ${language === 'fa' ? 'text-right' : 'text-left'}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
               <ScrollReveal
                 size="lg"
                 align={language === 'fa' ? 'right' : 'left'}
                 variant="secondary"
                 enableBlur={true}
                 baseOpacity={0.1}
                 baseRotation={2}
                 blurStrength={3}
                 staggerDelay={0.1}
               >
                 <p className="text-lg text-gray-300 leading-relaxed">
                   {currentContent.description}
                 </p>
               </ScrollReveal>
             </div>
          </div>
        </div>
      </div>

      {/* Second part - Solution with BeamCircle */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
        {/* Left side - Text content */}
        <div className={`space-y-8 ml-8 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', direction: 'rtl' }}>
              {currentContent.solutionTitle}
            </h2>
            
             <div className={`max-w-2xl ${language === 'fa' ? 'text-right' : 'text-left'}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
               <ScrollReveal
                 size="lg"
                 align={language === 'fa' ? 'right' : 'left'}
                 variant="secondary"
                 enableBlur={true}
                 baseOpacity={0.1}
                 baseRotation={2}
                 blurStrength={3}
                 staggerDelay={0.1}
               >
                 <p className="text-lg text-gray-300 leading-relaxed mb-6">
                   {currentContent.solutionDescription}
                 </p>
               </ScrollReveal>
               
               <div className="space-y-4">
                 {currentContent.solution.map((item, index) => (
                   <ScrollReveal
                     key={index}
                     size="md"
                     align={language === 'fa' ? 'right' : 'left'}
                     variant="secondary"
                     enableBlur={true}
                     baseOpacity={0.1}
                     baseRotation={1}
                     blurStrength={2}
                     staggerDelay={index * 0.1}
                   >
                     <div className="flex items-start space-x-3">
                       <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                         {index + 1}
                       </div>
                       <p className="text-gray-300 leading-relaxed">
                         {item}
                       </p>
                     </div>
                   </ScrollReveal>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Right side - BeamCircle component */}
        <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
          <BeamCircle
            size={400}
            centerIcon={<Zap className="text-yellow-400" size={40} />}
          />
        </div>
      </div>
    </section>
  );
}
