
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import ScrollToTop from '@/components/ScrollToTop';

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navbar />
      <main>
        <HeroSection />
        <ContentSection 
          id="features" 
          title="Our Features" 
          subtitle="Discover what makes our platform unique"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Content will be added by the FeatureCard component */}
          </div>
        </ContentSection>
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
