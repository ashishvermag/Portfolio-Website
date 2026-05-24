// client/src/components/Skills.jsx
import React from 'react';
// Updated Imports: Using react-icons instead of lucide-react
import { FiTerminal, FiGlobe } from 'react-icons/fi';
import { FaDatabase } from 'react-icons/fa6';

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Core Competencies</h2>
        <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <FiTerminal className="text-primary mb-6 w-10 h-10" />
          <h3 className="text-xl font-bold text-white mb-4">Systems & Core</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">Low-level architecture, parallel algorithms, and competitive programming.</p>
          <div className="flex flex-wrap gap-2">
            {["C / C++", "Python", "Data Structures", "Algorithms", "Linux", "HPC"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-black/30 border border-white/5 rounded-full text-s text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <FiGlobe className="text-primary mb-6 w-10 h-10" />
          <h3 className="text-xl font-bold text-white mb-4">Web Technologies</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">Building scalable and secure full-stack web applications and APIs.</p>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "Express.js", "JavaScript", "HTML / CSS"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-black/30 border border-white/5 rounded-full text-s text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <FaDatabase className="text-primary mb-6 w-10 h-10" />
          <h3 className="text-xl font-bold text-white mb-4">Databases & Tools</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">Managing persistent data storage, version control, and IDEs.</p>
          <div className="flex flex-wrap gap-2">
            {["MongoDB", "MySQL", "Git & GitHub", "Google Colab", "Visual Studio"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-black/30 border border-white/5 rounded-full text-s text-slate-300">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;