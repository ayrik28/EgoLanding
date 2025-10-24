import React, { useState } from 'react';

interface Iphone16ProProps {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
  showIsland?: boolean;
  islandWidth?: number;
  islandHeight?: number;
  frameColor?: string;
  frameDarkColor?: string;
  bezelColor?: string;
  screenRadius?: number;
  shadow?: boolean;
  rounded?: boolean;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  showCamera?: boolean;
  screenGradient?: string;
  hoverAnimation?: boolean;
}

export const Iphone16Pro: React.FC<Iphone16ProProps> = ({
  width = 433,
  height = 882,
  src,
  videoSrc,
  showIsland = true,
  islandWidth = 130,
  islandHeight = 40,
  frameColor = "white",
  frameDarkColor = "black",
  bezelColor = "neutral-100",
  screenRadius = 55,
  shadow = true,
  rounded = true,
  contentClassName = "object-cover",
  contentStyle = { borderRadius: '55px' },
  showCamera = true,
  screenGradient = "#ff00ff,#00ffff",
  hoverAnimation = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const frameStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: frameColor,
    borderRadius: rounded ? '60px' : '0px',
    boxShadow: shadow ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
    position: 'relative' as const,
    overflow: 'hidden',
    transition: hoverAnimation ? 'transform 0.3s ease' : 'none',
    transform: isHovered && hoverAnimation ? 'scale(1.02)' : 'scale(1)',
  };

  const bezelStyle = {
    position: 'absolute' as const,
    top: '8px',
    left: '8px',
    right: '8px',
    bottom: '8px',
    backgroundColor: `var(--${bezelColor})`,
    borderRadius: `${screenRadius}px`,
    overflow: 'hidden' as const,
  };

  const screenStyle = {
    width: '100%',
    height: '100%',
    background: screenGradient ? `linear-gradient(135deg, ${screenGradient})` : 'transparent',
    position: 'relative' as const,
    ...contentStyle,
  };

  const islandStyle = {
    position: 'absolute' as const,
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: `${islandWidth}px`,
    height: `${islandHeight}px`,
    backgroundColor: 'black',
    borderRadius: '20px',
    zIndex: 10,
  };

  const cameraStyle = {
    position: 'absolute' as const,
    top: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '8px',
    height: '8px',
    backgroundColor: 'black',
    borderRadius: '50%',
    zIndex: 11,
  };

  return (
    <div
      style={frameStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={bezelStyle}>
        {showIsland && <div style={islandStyle} />}
        {showCamera && <div style={cameraStyle} />}
        
        <div style={screenStyle}>
          {videoSrc ? (
            <video
              src={videoSrc}
              className={contentClassName}
              style={{ width: '100%', height: '100%', ...contentStyle }}
              autoPlay
              loop
              muted
            />
          ) : src ? (
            <img
              src={src}
              alt="iPhone content"
              className={contentClassName}
              style={{ width: '100%', height: '100%', ...contentStyle }}
            />
          ) : (
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: screenGradient ? `linear-gradient(135deg, ${screenGradient})` : '#000',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold'
              }}
            >
              iPhone 16 Pro
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
