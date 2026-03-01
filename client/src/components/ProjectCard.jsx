import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-cardDark rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-primary transition-colors">
            <Github size={20} className="text-black" />
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-primary transition-colors">
            <ExternalLink size={20} className="text-black" />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-textLight mb-2">{project.title}</h3>
        <p className="text-textGray text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Full details link */}
        <Link 
            to={`/projects/${project._id}`} 
            className="inline-block mb-4 text-sm font-semibold text-primary hover:text-blue-400 transition-colors"
        >
            View Project Details →
        </Link>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;