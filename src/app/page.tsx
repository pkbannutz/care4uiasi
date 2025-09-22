import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactModal from '@/components/sections/ContactModal';
import ServiceModal from '@/components/ServiceModal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactModal />
      <ServiceModal />
    </main>
  );
}
