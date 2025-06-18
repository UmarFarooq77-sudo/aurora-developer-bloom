
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-effect p-6 rounded-lg neon-border hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center mb-4">
          <div className="text-neon-cyan text-2xl mr-3 group-hover:animate-pulse">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-gradient">
            {name}
          </h3>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Proficiency</span>
            <span className="text-sm text-neon-cyan font-bold">{level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        
        <motion.p
          className="text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
