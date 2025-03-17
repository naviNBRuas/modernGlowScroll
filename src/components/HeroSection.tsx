
import { useParallax } from '@/hooks/useParallax';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const layer1 = useParallax({ speed: 0.05 });
  const layer2 = useParallax({ speed: 0.1, direction: 'down' });
  const layer3 = useParallax({ speed: 0.15 });
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background elements with parallax */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: layer1.transform }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-200 filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: layer2.transform }}
      >
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-200 filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-amber-200 filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: layer3.transform }}
      >
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-rose-200 filter blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center px-8 z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6 reveal"
          style={{ transitionDelay: '0.2s' }}
        >
          Beautifully <span className="font-medium">Minimal</span>.<br />
          Perfectly Detailed.
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 reveal"
          style={{ transitionDelay: '0.4s' }}
        >
          A seamless experience crafted with attention to every detail,
          designed for those who appreciate simplicity and elegance.
        </p>
        
        <a 
          ref={buttonRef}
          href="#features" 
          className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium transition-all-200 hover:scale-105 reveal"
          style={{ transitionDelay: '0.6s' }}
        >
          Discover More
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2 opacity-60">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
