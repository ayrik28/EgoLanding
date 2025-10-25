import React, { useEffect, useRef } from 'react';

interface InteractiveGridBackgroundProps {
  children?: React.ReactNode;
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  effectColor?: string;
  darkEffectColor?: string;
  trailLength?: number;
  glow?: boolean;
  glowRadius?: number;
  showFade?: boolean;
  fadeIntensity?: number;
  className?: string;
}

export const InteractiveGridBackground: React.FC<InteractiveGridBackgroundProps> = ({
  children,
  gridSize = 20,
  gridColor = '#e5e7eb',
  darkGridColor = '#374151',
  effectColor = 'rgba(59, 130, 246, 0.5)',
  darkEffectColor = 'rgba(147, 51, 234, 0.5)',
  trailLength = 3,
  glow = false,
  glowRadius = 20,
  showFade = false,
  fadeIntensity = 20,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<Array<{ x: number; y: number; life: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get current theme
      const isDark = document.documentElement.classList.contains('dark');
      const currentGridColor = isDark ? darkGridColor : gridColor;
      const currentEffectColor = isDark ? darkEffectColor : effectColor;
      
      // Debug: Log canvas dimensions
      console.log('Canvas size:', canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = currentGridColor;
      ctx.lineWidth = 1;
      ctx.beginPath();

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Draw trail
      if (trailRef.current.length > 0) {
        trailRef.current.forEach((point, index) => {
          const alpha = point.life / trailLength;
          const size = (point.life / trailLength) * 10;
          
          ctx.save();
          ctx.globalAlpha = alpha;
          
          if (glow) {
            const gradient = ctx.createRadialGradient(
              point.x, point.y, 0,
              point.x, point.y, glowRadius
            );
            gradient.addColorStop(0, currentEffectColor);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(
              point.x - glowRadius,
              point.y - glowRadius,
              glowRadius * 2,
              glowRadius * 2
            );
          }

          ctx.fillStyle = currentEffectColor;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }
    };

    const animate = () => {
      // Update trail
      trailRef.current = trailRef.current
        .map(point => ({ ...point, life: point.life - 1 }))
        .filter(point => point.life > 0);

      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      trailRef.current.push({ x: e.clientX, y: e.clientY, life: trailLength });
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [gridSize, gridColor, darkGridColor, effectColor, darkEffectColor, trailLength, glow, glowRadius]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      {showFade && (
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,${fadeIntensity / 100}) 100%)`,
            zIndex: 2
          }}
        />
      )}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};
