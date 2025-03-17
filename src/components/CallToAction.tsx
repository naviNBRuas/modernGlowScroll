
import { useParallax } from '@/hooks/useParallax';
import { useEffect, useRef } from 'react';

const CallToAction = () => {
  const layer1 = useParallax({ speed: 0.05, direction: 'down' });
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (contentRef.current) observer.observe(contentRef.current);
    
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);
  
  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: layer1.transform }}
      >
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-100 filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-100 filter blur-3xl" />
      </div>
      
      <div 
        ref={contentRef}
        className="max-w-4xl mx-auto text-center px-8 relative z-10 reveal"
      >
        <h2 className="text-3xl md:text-5xl font-light mb-6">
          Ready to Begin Your Journey?
        </h2>
        
        <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
          Join thousands who have already embraced the simplicity and elegance of our approach.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#" 
            className="px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium transition-all-200 hover:scale-105"
          >
            Get Started
          </a>
          
          <a 
            href="#" 
            className="px-8 py-3 rounded-full border border-current text-sm font-medium transition-all-200 hover:bg-foreground hover:text-background"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
