
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-lg font-medium tracking-tight"
          aria-label="Home"
        >
          Minimal
        </a>
        
        <ul className="hidden md:flex items-center space-x-10">
          {['Features', 'Products', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-sm opacity-80 hover:opacity-100 link-hover transition-all-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium transition-all-200 hover:scale-105"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
