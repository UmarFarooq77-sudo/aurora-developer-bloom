
import React from 'react';

interface FloatingOrbProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'cyan' | 'purple' | 'pink';
  className?: string;
  delay?: number;
}

const FloatingOrb: React.FC<FloatingOrbProps> = ({ 
  size = 'medium', 
  color = 'cyan', 
  className = '',
  delay = 0 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  const colorClasses = {
    cyan: 'bg-gradient-to-br from-neon-cyan/30 to-neon-cyan/10 shadow-[0_0_30px_rgba(0,255,255,0.3)]',
    purple: 'bg-gradient-to-br from-neon-purple/30 to-neon-purple/10 shadow-[0_0_30px_rgba(191,0,255,0.3)]',
    pink: 'bg-gradient-to-br from-neon-pink/30 to-neon-pink/10 shadow-[0_0_30px_rgba(255,0,128,0.3)]'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        rounded-full 
        blur-sm 
        animate-float 
        absolute 
        pointer-events-none
        ${className}
      `}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export default FloatingOrb;
