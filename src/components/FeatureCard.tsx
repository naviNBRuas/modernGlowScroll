
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="p-8 rounded-2xl glass reveal hover:shadow-xl transition-all-300 hover:translate-y-[-5px]"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 mb-6 flex items-center justify-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      
      <p className="text-sm opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
