
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Database, Globe, Smartphone, Brain, Zap, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedText from '../components/AnimatedText';
import FloatingOrb from '../components/FloatingOrb';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      icon: <Code2 />,
      description: "Expert in React, Vue, Angular with modern JavaScript/TypeScript"
    },
    {
      name: "Backend Development",
      level: 88,
      icon: <Database />,
      description: "Node.js, Python, GraphQL, REST APIs, and microservices architecture"
    },
    {
      name: "Web Technologies",
      level: 92,
      icon: <Globe />,
      description: "HTML5, CSS3, SASS, Tailwind, responsive design, and PWAs"
    },
    {
      name: "Mobile Development",
      level: 85,
      icon: <Smartphone />,
      description: "React Native, Flutter, and hybrid app development"
    },
    {
      name: "AI & Machine Learning",
      level: 78,
      icon: <Brain />,
      description: "TensorFlow, PyTorch, neural networks, and data science"
    },
    {
      name: "Performance Optimization",
      level: 90,
      icon: <Zap />,
      description: "Code splitting, lazy loading, caching, and speed optimization"
    }
  ];

  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "A sophisticated analytics dashboard with real-time data visualization, machine learning insights, and predictive analytics. Built with React, D3.js, and Python backend.",
      technologies: ["React", "TypeScript", "D3.js", "Python", "TensorFlow", "WebSocket"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and advanced search capabilities.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Real-time Chat App",
      description: "Scalable messaging application with video calls, file sharing, and end-to-end encryption.",
      technologies: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "DevOps Automation Suite",
      description: "Comprehensive CI/CD pipeline automation with monitoring, logging, and deployment management.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Floating Orbs */}
      <FloatingOrb size="large" color="cyan" className="top-1/4 left-1/4" delay={0} />
      <FloatingOrb size="medium" color="purple" className="top-1/3 right-1/4" delay={2} />
      <FloatingOrb size="small" color="pink" className="bottom-1/4 left-1/3" delay={4} />
      <FloatingOrb size="medium" color="cyan" className="bottom-1/3 right-1/3" delay={1} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gradient"
            >
              &lt;DevPortfolio /&gt;
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-neon-cyan transition-all duration-300 relative group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="text-gradient animate-text-glow">Alex Chen</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-8 text-gray-300"
          >
            <AnimatedText 
              text="Full-Stack Developer & AI Enthusiast" 
              className="text-neon-cyan font-light"
              delay={1000}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting innovative digital experiences with cutting-edge technologies. 
            Passionate about creating scalable solutions that push the boundaries of what's possible.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold rounded-lg text-lg shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-4 glass-effect border border-neon-cyan/30 text-neon-cyan rounded-lg text-lg hover:border-neon-cyan/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-neon-cyan animate-pulse" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect p-8 rounded-lg neon-border">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With over 5 years of experience in full-stack development, I specialize in creating 
                  high-performance web applications that combine beautiful design with robust functionality. 
                  My passion lies in exploring the intersection of AI and web development.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I believe in continuous learning and staying ahead of technology trends. When I'm not coding, 
                  you'll find me contributing to open-source projects, writing technical articles, or 
                  experimenting with the latest frameworks and tools.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={24} className="text-neon-cyan" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin size={24} className="text-neon-cyan" />
                  </motion.a>
                  <motion.a
                    href="mailto:alex@example.com"
                    className="p-3 glass-effect rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail size={24} className="text-neon-cyan" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square glass-effect rounded-lg neon-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-neon-cyan"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    &lt;/&gt;
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gradient mb-4">5+ Years</h3>
                  <p className="text-gray-300">of Professional Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-300 mb-12">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-lg neon-border"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Mail className="text-neon-cyan text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                <p className="text-gray-300">alex.chen@example.com</p>
              </div>
              <div className="text-center">
                <Github className="text-neon-cyan text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">GitHub</h3>
                <p className="text-gray-300">@alexchen-dev</p>
              </div>
              <div className="text-center">
                <Linkedin className="text-neon-cyan text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">LinkedIn</h3>
                <p className="text-gray-300">Alex Chen</p>
              </div>
            </div>
            
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold rounded-lg text-lg shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Alex Chen. Crafted with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
