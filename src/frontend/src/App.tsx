import { HeroSection } from './components/marketing/sections/HeroSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { TourPackagesSection } from './components/marketing/sections/TourPackagesSection';
import { ServicesSection } from './components/marketing/sections/ServicesSection';
import { VehicleFleetSection } from './components/marketing/sections/VehicleFleetSection';
import { WhyChooseUsSection } from './components/marketing/sections/WhyChooseUsSection';
import { PopularRoutesSection } from './components/marketing/sections/PopularRoutesSection';
import { ReviewsSection } from './components/marketing/sections/ReviewsSection';
import { GallerySection } from './components/marketing/sections/GallerySection';
import { ContactSection } from './components/marketing/sections/ContactSection';
import { TopNav } from './components/marketing/TopNav';
import { StickyMobileCtaBar } from './components/marketing/StickyMobileCtaBar';
import { Footer } from './components/marketing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <AboutSection />
        <TourPackagesSection />
        <ServicesSection />
        <VehicleFleetSection />
        <WhyChooseUsSection />
        <PopularRoutesSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCtaBar />
    </div>
  );
}

export default App;
