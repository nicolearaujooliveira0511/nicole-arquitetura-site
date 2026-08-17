import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SkipToContent from '@/components/base/SkipToContent';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';

export default function Home() {
  useKeyboardNavigation();

  return (
    <>
      <SkipToContent />
      <main id="conteudo-principal">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ProcessSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}