// client/src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
           <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;