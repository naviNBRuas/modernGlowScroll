
import { useEffect, useRef } from 'react';
import { Sparkles, Shield, Zap, LineChart, Users } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import ScrollToTop from '@/components/ScrollToTop';
import FeatureCard from '@/components/FeatureCard';

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

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
      title: "Beautiful Aesthetics",
      description: "Elegant and minimalist design that puts your content in the spotlight with modern visual effects."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Fast Performance",
      description: "Optimized for speed with lightweight animations that don't compromise loading times."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Secure Codebase",
      description: "Built with the latest security best practices to protect your application and users."
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-500" />,
      title: "Analytics Ready",
      description: "Integrate with your favorite analytics tools to track user behavior and improve conversions."
    },
    {
      icon: <Users className="w-6 h-6 text-rose-500" />,
      title: "User Centered",
      description: "Designed with user experience as the top priority, making navigation intuitive and engaging."
    }
  ];

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
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
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
