
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  featured = false,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative group ${featured ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-effect rounded-lg overflow-hidden neon-border group-hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-all duration-500 transform group-hover:-translate-y-1">
        <div className="relative overflow-hidden h-48 md:h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 z-10" />
          <div className="absolute inset-0 bg-cyber-grid opacity-30 z-20" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isHovered ? 0.3 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <div className="text-6xl text-neon-cyan/50 font-bold">{title.charAt(0)}</div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + techIndex * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan text-sm rounded-full border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={16} />
                Live Demo
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-effect border border-neon-cyan/30 text-neon-cyan rounded-lg hover:border-neon-cyan/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
