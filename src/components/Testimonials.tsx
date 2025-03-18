
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "This design concept perfectly balances aesthetics with functionality. The parallax effects create a sense of depth that's truly captivating.",
    author: "Alex Morgan",
    title: "UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "The minimalist approach here isn't just trendy—it actually enhances usability. Every element serves a purpose without overwhelming the user.",
    author: "Sam Chen",
    title: "Product Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "I'm impressed by how the subtle animations guide the user journey. This concept shows a deep understanding of modern web design principles.",
    author: "Taylor Kim",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
  }
];

export default function Testimonials() {
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
    <section className="section-padding bg-slate-50" ref={containerRef}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-16 reveal">
          What Others Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "glass p-8 rounded-2xl reveal", 
                "flex flex-col items-start justify-between",
                "hover:shadow-xl transition-all-300 hover:translate-y-[-5px]"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div>
                <svg className="w-8 h-8 text-slate-400 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.737 21.125c1.225 0 2.25-0.425 3.075-1.275s1.238-1.925 1.238-3.225c0-1.325-0.45-2.438-1.35-3.337s-1.975-1.35-3.225-1.35c-0.175 0-0.438 0.013-0.788 0.038 0.3-0.95 0.8-1.838 1.5-2.663s1.413-1.4 2.138-1.725l-1.65-2.7c-1.875 0.85-3.513 2.263-4.913 4.238s-2.1 4.025-2.1 6.175c0 2 0.625 3.687 1.875 5.063s2.75 2.063 4.5 2.063zM21.737 21.125c1.225 0 2.25-0.425 3.075-1.275s1.238-1.925 1.238-3.225c0-1.325-0.45-2.438-1.35-3.337s-1.975-1.35-3.225-1.35c-0.175 0-0.438 0.013-0.788 0.038 0.3-0.95 0.8-1.838 1.5-2.663s1.413-1.4 2.138-1.725l-1.65-2.7c-1.875 0.85-3.513 2.263-4.913 4.238s-2.1 4.025-2.1 6.175c0 2 0.625 3.687 1.875 5.063s2.75 2.063 4.5 2.063z"></path>
                </svg>
                <p className="mb-6 text-sm md:text-base italic">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
