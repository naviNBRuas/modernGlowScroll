
import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  reverse?: boolean;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { 
    speed = 0.1, 
    direction = 'up',
    reverse = false 
  } = options;
  
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const getTransform = () => {
    const value = offset * speed * (reverse ? -1 : 1);
    
    switch (direction) {
      case 'up':
        return `translateY(${-value}px)`;
      case 'down':
        return `translateY(${value}px)`;
      case 'left':
        return `translateX(${-value}px)`;
      case 'right':
        return `translateX(${value}px)`;
      default:
        return `translateY(${-value}px)`;
    }
  };
  
  return { transform: getTransform() };
}
