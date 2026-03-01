import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, CheckCircle } from 'lucide-react';
import API from '../api';

const ProjectDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await API.get(`/projects/${id}`);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) return <div className="min-h-screen bg-bgDark flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="bg-bgDark min-h-screen text-textLight">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-textGray hover:text-primary transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" 
          />
        </motion.div>

        {/* Links & Tech Stack */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 border-b border-white/10 pb-12">
            <div className="flex gap-4">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-cardDark border border-white/10 rounded-lg hover:border-primary transition-colors">
                    <Github size={20} /> GitHub
                </a>
                {/* CONDITIONAL RENDER: Only show if liveLink exists and isn't just an empty space */}
                {project.liveLink && project.liveLink.trim() !== '' && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <ExternalLink size={20} /> Live Demo
                  </a>
                )}
            </div>
            
            <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Layers size={18} className="text-primary"/> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 text-sm rounded-full text-textGray border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Detailed Content */}
        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Main Overview */}
            <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
                <p className="text-textGray leading-relaxed text-lg">
                    {/* Fallback text if you haven't added overview to DB yet */}
                    {project.overview || project.description}
                </p>
                
                {/* Features List */}
                {project.features && (
                    <div className="pt-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                        <ul className="space-y-3">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-textGray">
                                    <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Sidebar Info (Optional extra details) */}
            <div className="bg-cardDark p-6 rounded-xl border border-white/10 h-fit">
                <h3 className="font-bold text-white mb-4">Project Info</h3>
                <div className="space-y-4 text-sm text-textGray">
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-white/40 mb-1">Role</span>
                        {/* Use dynamic data, with a fallback just in case it's empty */}
                        {project.role || 'Developer'} 
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-white/40 mb-1">Year</span>
                        {/* Use dynamic data, with a fallback */}
                        {project.year || '2024'}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;