import React from 'react';
import { motion } from 'framer-motion';
// 1. Import a variety of useful icons for different domains
import { Github, ExternalLink, Bot, Database, Code, Globe, Cpu, BookOpen, Server, Shield, Mic } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const techStack = project.technologies || project.tags || [];

  // 2. THE ICON MAPPER: Returns the right icon based on the string in your data file
  const renderFallbackIcon = () => {
    const iconClass = "text-primary/50 mb-3 transform group-hover:scale-110 transition-transform duration-500";
    
    switch (project.fallbackIcon) {
      case 'bot': return <Bot size={40} className={iconClass} />;
      case 'database': return <Database size={40} className={iconClass} />;
      case 'globe': return <Globe size={40} className={iconClass} />;
      case 'cpu': return <Cpu size={40} className={iconClass} />;
      case 'book': return <BookOpen size={40} className={iconClass} />;
      case 'server': return <Server size={40} className={iconClass} />;
      case 'shield': return <Shield size={40} className={iconClass} />;
      case 'mic': return <Mic size={40} className={iconClass} />;
      default: return <Code size={40} className={iconClass} />; // Generic code icon if nothing matches
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-cardDark rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group flex flex-col h-full"
    >
      {/* Image / Header Section */}
      <div className="relative h-48 overflow-hidden bg-gray-900">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          /* FALLBACK UI */
          <div className="w-full h-full bg-gradient-to-br from-cardDark to-[#0f172a] flex flex-col items-center justify-center p-6 text-center border-b border-white/5">
            
            {/* 3. Call the dynamic icon function here! */}
            {renderFallbackIcon()}
            
            {project.isAcademic && (
              <span className="mt-2 text-[10px] uppercase tracking-widest text-primary border border-primary/20 px-3 py-1 rounded-full">
                Academic Work
              </span>
            )}
          </div>
        )}
        
        {/* Hover Overlay with Links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-primary transition-colors">
              <Github size={20} className="text-black" />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-primary transition-colors">
              <ExternalLink size={20} className="text-black" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-textLight mb-2">{project.title}</h3>
        <p className="text-textGray text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <Link 
            to={`/projects/${project.id}`} 
            className="inline-block mb-4 text-sm font-semibold text-primary hover:text-blue-400 transition-colors"
        >
            View Detailed Description →
        </Link>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;