
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import FeatureCard from '@/components/FeatureCard';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleReveal);
    handleReveal();
    
    return () => {
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <ContentSection
        id="features"
        title="Thoughtfully Designed"
        subtitle="Every detail crafted with precision and purpose, creating a seamless experience."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Minimalist Design",
              description: "Clean aesthetics that let content breathe. Our approach removes the unnecessary, focusing on what truly matters."
            },
            {
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Intuitive Interface",
              description: "Navigation that feels natural and effortless. Every interaction is designed to be immediately understandable."
            },
            {
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Thoughtful Interactions",
              description: "Subtle animations and transitions that enhance the experience without drawing attention to themselves."
            }
          ].map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </ContentSection>
      
      <ContentSection
        id="products"
        title="Premium Experience"
        subtitle="Refined details that create a sense of quality and thoughtfulness."
        light
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 reveal">
              <h3 className="text-2xl font-light">Refined Aesthetics</h3>
              <p className="opacity-80 leading-relaxed">
                Our design language embraces simplicity and clarity, creating interfaces that are both beautiful and functional.
              </p>
              <ul className="space-y-3">
                {[
                  "Consistent visual rhythm and spacing",
                  "Thoughtful typography hierarchy",
                  "Subtle animations that enhance, not distract",
                  "Carefully selected color palette"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-sm bg-primary text-primary-foreground p-1 rounded-full inline-flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-block text-sm link-hover">
                Learn more about our approach
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2 reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50 opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-xl bg-white/80 shadow-xl backdrop-blur-sm p-8 flex items-center justify-center">
                <h4 className="text-xl font-light text-center">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </h4>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        id="about"
        title="Our Philosophy"
        subtitle="We believe that less is more. That's why we focus on what truly matters."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              number: "01",
              title: "Simplicity",
              description: "Reducing complexity to create clear, focused experiences that are easy to understand and use."
            },
            {
              number: "02",
              title: "Function",
              description: "Every element serves a purpose. If it doesn't add value, it shouldn't be there."
            },
            {
              number: "03",
              title: "Quality",
              description: "Attention to detail in every pixel and interaction, creating a sense of craftsmanship."
            },
            {
              number: "04",
              title: "Clarity",
              description: "Clear communication and straightforward solutions that respect the user's time and attention."
            },
            {
              number: "05",
              title: "Harmony",
              description: "Creating balance between all elements to form a cohesive, unified experience."
            },
            {
              number: "06",
              title: "Evolution",
              description: "Continuously refining and improving, never settling for 'good enough'."
            }
          ].map((philosophy, index) => (
            <div 
              key={philosophy.title} 
              className="reveal"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="text-3xl font-light text-primary/20 mb-4">{philosophy.number}</div>
              <h3 className="text-xl font-medium mb-3">{philosophy.title}</h3>
              <p className="opacity-70 text-sm">{philosophy.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>
      
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
