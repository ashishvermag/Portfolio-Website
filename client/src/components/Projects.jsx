import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects.js'; // 1. Import your local data

const Projects = () => {
  // We no longer need useState or useEffect! The data is instantly available.

  return (
    <section id="projects" className="py-20 px-6 bg-bgDark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textLight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              // 2. Changed key from _id to id
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-textGray">No projects added yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;