import { ShinyText } from './ui/shiny-text';

export function HeroTextSection() {
  return (
    <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20 flex flex-col items-end space-y-4">
      <div className="text-right">
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
          EGO
        </ShinyText>
      </div>
      
      <div className="text-right max-w-xs">
        <p className="text-white/80 text-sm leading-relaxed">
          Experience the future of technology with EGO. 
          Revolutionary innovation that transforms the way you connect with the digital world.
        </p>
      </div>
    </div>
  );
}
