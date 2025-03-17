
import { useEffect, useRef, ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  light?: boolean;
}

const ContentSection = ({
  id,
  title,
  subtitle,
  children,
  light = false,
}: ContentSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    
    const childElements = sectionRef.current?.querySelectorAll('.reveal');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-padding ${light ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-light mb-6 reveal"
          >
            {title}
          </h2>
          
          {subtitle && (
            <p
              ref={subtitleRef}
              className="text-lg opacity-80 reveal"
              style={{ transitionDelay: '0.2s' }}
            >
              {subtitle}
            </p>
          )}
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
