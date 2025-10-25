"use client";

import { motion } from "framer-motion";
import React from "react";

export interface MarqueeImage {
  src: string;
  alt: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface ThreeDMarqueeProps {
  images: MarqueeImage[];
  className?: string;
  cols?: number; // default is 4
  onImageClick?: (image: MarqueeImage, index: number) => void;
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  images,
  className = "",
  onImageClick,
}) => {
  // Clone the image list twice for seamless loop
  const duplicatedImages = [...images, ...images];

  const handleImageClick = (image: MarqueeImage, globalIndex: number) => {
    if (onImageClick) {
      onImageClick(image, globalIndex);
    } else if (image.href) {
      window.open(image.href, image.target || "_self");
    }
  };

  return (
    <section
      className={`mx-auto block h-[600px] max-sm:h-[400px] 
        overflow-hidden rounded-2xl bg-white dark:bg-black ${className}`}
    >
      <div
        className="flex w-full h-full items-center justify-center"
        style={{
          transform: "rotateX(55deg) rotateY(0deg) rotateZ(45deg)",
        }}
      >
        <div className="w-full overflow-hidden scale-90 sm:scale-100">
           <div className="relative h-full w-full origin-center gap-4 transform">
             {/* First Row */}
             <div className="flex gap-4 mb-4">
               {duplicatedImages.slice(0, Math.ceil(duplicatedImages.length / 3)).map((image, idx) => {
                 const isClickable = image.href || onImageClick;

                 return (
                   <motion.div
                     key={`row1-image-${idx}`}
                     animate={{ x: [0, -100, 0] }}
                     transition={{
                       duration: 20,
                       repeat: Infinity,
                       ease: "linear",
                     }}
                     className="flex-shrink-0 relative"
                   >
                     <motion.img
                       whileHover={{ y: -10 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                       src={image.src}
                       alt={image.alt}
                       width={400}
                       height={700}
                       className={`aspect-[400/700] w-full max-w-[140px] rounded-lg object-cover ring ring-gray-300/30 dark:ring-gray-800/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                         isClickable ? "cursor-pointer" : ""
                       }`}
                       onClick={() => handleImageClick(image, idx)}
                     />
                   </motion.div>
                 );
               })}
             </div>

             {/* Second Row */}
             <div className="flex gap-4 mb-4">
               {duplicatedImages.slice(Math.ceil(duplicatedImages.length / 3), Math.ceil(duplicatedImages.length * 2 / 3)).map((image, idx) => {
                 const isClickable = image.href || onImageClick;

                 return (
                   <motion.div
                     key={`row2-image-${idx}`}
                     animate={{ x: [0, 100, 0] }}
                     transition={{
                       duration: 25,
                       repeat: Infinity,
                       ease: "linear",
                     }}
                     className="flex-shrink-0 relative"
                   >
                     <motion.img
                       whileHover={{ y: -10 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                       src={image.src}
                       alt={image.alt}
                       width={400}
                       height={700}
                       className={`aspect-[400/700] w-full max-w-[140px] rounded-lg object-cover ring ring-gray-300/30 dark:ring-gray-800/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                         isClickable ? "cursor-pointer" : ""
                       }`}
                       onClick={() => handleImageClick(image, idx + Math.ceil(duplicatedImages.length / 3))}
                     />
                   </motion.div>
                 );
               })}
             </div>

             {/* Third Row */}
             <div className="flex gap-4">
               {duplicatedImages.slice(Math.ceil(duplicatedImages.length * 2 / 3)).map((image, idx) => {
                 const isClickable = image.href || onImageClick;

                 return (
                   <motion.div
                     key={`row3-image-${idx}`}
                     animate={{ x: [0, -80, 0] }}
                     transition={{
                       duration: 30,
                       repeat: Infinity,
                       ease: "linear",
                     }}
                     className="flex-shrink-0 relative"
                   >
                     <motion.img
                       whileHover={{ y: -10 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                       src={image.src}
                       alt={image.alt}
                       width={400}
                       height={700}
                       className={`aspect-[400/700] w-full max-w-[140px] rounded-lg object-cover ring ring-gray-300/30 dark:ring-gray-800/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                         isClickable ? "cursor-pointer" : ""
                       }`}
                       onClick={() => handleImageClick(image, idx + Math.ceil(duplicatedImages.length * 2 / 3))}
                     />
                   </motion.div>
                 );
               })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
