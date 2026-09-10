import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiLayers, FiMonitor, FiCpu, FiTrendingUp, FiGithub } from 'react-icons/fi';
import { FaDiagramProject, FaRoute } from 'react-icons/fa6';

const LogicFlow = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Navigation */}
      <Link to="/" className="text-primary hover:underline flex items-center gap-2 mb-12 w-max transition-all hover:-translate-x-1">
        <FiArrowLeft size={20} /> Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-16 border-b border-white/10 pb-16">
        <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-4 md:gap-6 mb-6">
          
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 shrink-0">
              <FaDiagramProject size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">LogicFlow</h1>  
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://logicflowhld.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-6 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-all border border-primary/20 hover:border-primary font-medium"
            >
              Visit <FiExternalLink size={20} />
            </a>
            
            <a 
              href="https://github.com/ashishvermag/LogicFlow"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 text-textLight hover:text-white rounded-full transition-all border border-white/10 hover:border-white/20 font-medium"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
        
        <p className="text-xl text-textGray leading-relaxed max-w-3xl mb-8">
          A living, interactive platform designed to demystify complex software engineering concepts. LogicFlow uses rich, step-by-step animations to break down System Design, architecture patterns, and real-world engineering challenges into digestible visual experiences.
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {["System Architecture", "Interactive UI", "High-Level Design (HLD)", "Framer Motion / Animations", "Continuous Deployment"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-cardDark border border-white/10 text-primary text-sm font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* The Platform Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">An Evolving Ecosystem</h2>
          <p className="text-textGray leading-relaxed mb-6">
            Unlike static documentation, LogicFlow is architected as an ever-expanding knowledge base. It allows for the seamless integration of new curriculums without restructuring the core application. 
          </p>
          <p className="text-textGray leading-relaxed mb-6">
            By visiting the live platform, users instantly access the latest modules. The architecture guarantees that as the engineering landscape shifts, the platform evolves right alongside it.
          </p>
          
          <div className="bg-cardDark border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <FiTrendingUp className="text-primary" size={24} /> 
              The Roadmap
            </h3>
            <p className="text-textGray text-sm leading-relaxed mb-4">
              The platform currently features deep dives into <strong>High-Level Design (HLD)</strong> and real-world system breakdowns. The infrastructure is already paved for continuous module rollouts, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-textLight">
              <li className="flex items-center gap-2"><FaRoute className="text-primary" /> Low-Level Design (LLD)</li>
              <li className="flex items-center gap-2"><FaRoute className="text-primary" /> AI & Agentic Systems</li>
              <li className="flex items-center gap-2"><FaRoute className="text-primary" /> Infrastructure Challenges</li>
              <li className="flex items-center gap-2"><FaRoute className="text-primary" /> Scalability Patterns</li>
            </ul>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white mb-6">Platform Features</h2>
          <FeatureRow 
            icon={<FiMonitor size={20} />} 
            title="Animated Workflows" 
            desc="Complex data flows and architectural decisions are rendered through smooth, step-by-step UI animations rather than dense text walls." 
          />
          <FeatureRow 
            icon={<FiLayers size={20} />} 
            title="Real-World Architectures" 
            desc="Bridges the gap between theory and practice by deconstructing how massive scale applications are actually built in the industry." 
          />
          <FeatureRow 
            icon={<FiCpu size={20} />} 
            title="Dynamic Content Engine" 
            desc="Designed so that new domains (like AI systems and LLD) plug directly into the routing and rendering engine dynamically." 
          />
        </div>
      </div>

      {/* Call to Action Wrapper */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience the Architecture</h2>
        <p className="text-textGray mb-8 max-w-2xl mx-auto">
          Because this platform is constantly updated with new architectural patterns and animations, the best way to understand it is to interact with the live version.
        </p>
        <a 
          href="https://logicflowhld.vercel.app/" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          Launch LogicFlow <FiExternalLink size={20} />
        </a>
      </div>

    </div>
  );
};

// Reusable mini component
const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start bg-black/20 p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
    <div className="text-primary mt-1 bg-primary/10 p-2 rounded-lg shrink-0">{icon}</div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-sm text-textGray leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default LogicFlow;