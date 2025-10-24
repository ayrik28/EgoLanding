import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { HeroSection } from './components/HeroSection';
import { IntroduceSection } from './components/IntroduceSection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <SideNav />
      <HeroSection />
      <IntroduceSection />
    </div>
  );
}

export default App;
