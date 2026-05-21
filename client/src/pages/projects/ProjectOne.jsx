import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectOne = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <Link to="/" className="text-primary hover:underline flex items-center gap-2 mb-8">
        <ArrowLeft size={20} /> Back to Projects
      </Link>
      
      <h1 className="text-5xl font-bold mb-6">My First Project</h1>
      
      <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
        <h2 className="text-2xl text-primary font-semibold mb-4">Custom Layout Zone</h2>
        <p className="text-textLight leading-relaxed">
          This entire page is 100% dedicated to this specific project. You can add unique grids, 
          custom charts, or specific interactive elements here without affecting any other project on your portfolio!
        </p>
      </div>
    </div>
  );
};

export default ProjectOne;