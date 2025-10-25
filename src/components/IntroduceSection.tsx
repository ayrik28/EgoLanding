import { Brain, Heart, Target } from 'lucide-react';

export function IntroduceSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Coaching',
      description: 'Personalized guidance powered by advanced artificial intelligence that understands your unique journey and adapts to your needs.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Deep emotional understanding that helps you navigate life\'s challenges with empathy, wisdom, and genuine care for your wellbeing.',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Structured approach to personal growth with clear milestones, actionable insights, and measurable progress toward your dreams.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="introduce" className="min-h-screen py-32 pl-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            Your Personal Growth Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the three pillars that make EGO your perfect companion for personal development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s backwards`
              }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-3xl blur transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
