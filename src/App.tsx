import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { IntroduceSection } from './components/IntroduceSection';
import { ThreeDMarquee, MarqueeImage } from './components/ui/3d-marquee';

function App() {
  // Gallery images from section3 folder - All 30 images
  const images: MarqueeImage[] = [
    {
      src: "/assets/section3/Screenshot_20251025-194710.jpg",
      alt: "EGO App Screenshot 1"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194716.jpg", 
      alt: "EGO App Screenshot 2"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194724.jpg",
      alt: "EGO App Screenshot 3"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194731.jpg",
      alt: "EGO App Screenshot 4"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194743.jpg",
      alt: "EGO App Screenshot 5"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194751.jpg",
      alt: "EGO App Screenshot 6"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194758.jpg",
      alt: "EGO App Screenshot 7"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194827.jpg",
      alt: "EGO App Screenshot 8"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194835.jpg",
      alt: "EGO App Screenshot 9"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194846.jpg",
      alt: "EGO App Screenshot 10"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194855.jpg",
      alt: "EGO App Screenshot 11"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194907.jpg",
      alt: "EGO App Screenshot 12"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194914.jpg",
      alt: "EGO App Screenshot 13"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194924.jpg",
      alt: "EGO App Screenshot 14"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194930.jpg",
      alt: "EGO App Screenshot 15"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194938.jpg",
      alt: "EGO App Screenshot 16"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194944.jpg",
      alt: "EGO App Screenshot 17"
    },
    {
      src: "/assets/section3/Screenshot_20251025-194950.jpg",
      alt: "EGO App Screenshot 18"
    },
    {
      src: "/assets/section3/Screenshot_20251025-201446.jpg",
      alt: "EGO App Screenshot 19"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211618.jpg",
      alt: "EGO App Screenshot 20"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211618 (1).jpg",
      alt: "EGO App Screenshot 21"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211626.jpg",
      alt: "EGO App Screenshot 22"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211630.jpg",
      alt: "EGO App Screenshot 23"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211634.jpg",
      alt: "EGO App Screenshot 24"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211638.jpg",
      alt: "EGO App Screenshot 25"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211643.jpg",
      alt: "EGO App Screenshot 26"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211647.jpg",
      alt: "EGO App Screenshot 27"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211654.jpg",
      alt: "EGO App Screenshot 28"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211704.jpg",
      alt: "EGO App Screenshot 29"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211738.jpg",
      alt: "EGO App Screenshot 30"
    },
    {
      src: "/assets/section3/Screenshot_20251025-211755.jpg",
      alt: "EGO App Screenshot 31"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <SideNav />
      <HeroSection />
      <IntroSection />
      
      {/* Images Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Gallery
          </h2>
          <ThreeDMarquee 
            images={images}
            onImageClick={(image: MarqueeImage, index: number) => {
              console.log('Clicked:', image.alt, 'at index:', index);
            }}
          />
        </div>
      </section>
      
      <IntroduceSection />
    </div>
  );
}

export default App;
