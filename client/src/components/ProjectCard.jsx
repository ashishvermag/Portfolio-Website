import React from 'react';
import { motion } from 'framer-motion';
// 1. Updated Imports: Using react-icons (Feather and FontAwesome)
import { FiGithub, FiExternalLink, FiCode, FiGlobe, FiCpu, FiBookOpen, FiServer, FiShield, FiMic } from "react-icons/fi";
import { FaRobot, FaDatabase } from "react-icons/fa6"; 
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const techStack = project.technologies || project.tags || [];

  // 2. THE ICON MAPPER: Now using react-icons
  const renderFallbackIcon = () => {
    const iconClass = "text-primary/50 mb-3 transform group-hover:scale-110 transition-transform duration-500";
    
    switch (project.fallbackIcon) {
      case 'bot': return <FaRobot size={40} className={iconClass} />;
      case 'database': return <FaDatabase size={40} className={iconClass} />;
      case 'globe': return <FiGlobe size={40} className={iconClass} />;
      case 'cpu': return <FiCpu size={40} className={iconClass} />;
      case 'book': return <FiBookOpen size={40} className={iconClass} />;
      case 'server': return <FiServer size={40} className={iconClass} />;
      case 'shield': return <FiShield size={40} className={iconClass} />;
      case 'mic': return <FiMic size={40} className={iconClass} />;
      default: return <FiCode size={40} className={iconClass} />; // Generic code icon
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
        
        {/* Hover Overlay with Links - Updated to react-icons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-primary transition-colors">
              <FiGithub size={20} className="text-black" />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-primary transition-colors">
              <FiExternalLink size={20} className="text-black" />
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