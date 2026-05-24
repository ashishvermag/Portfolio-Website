import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { FaGraduationCap, FaAward, FaBriefcase } from "react-icons/fa6";


import { projectsData } from '../data/projects'; 

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">About Me.</h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            I am a software engineer specializing in scalable web architecture, low-level systems programming, and applied Machine Learning. Here is a detailed breakdown of my academic and professional journey.
          </p>
        </div>
        <a 
          href="/docs/Ashish_Resume.pdf" 
          download="Ashish_Resume.pdf"
          className="shrink-0 flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          <FaDownload size={20} />
          Download Resume
        </a>
      </motion.div>

      <div className="space-y-20">
        
        {/* Education Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <FaGraduationCap className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">2024 - Present</span>
              <h3 className="text-xl font-bold text-white mb-1">M.Tech in Computer Science & Engineering</h3>
              <h4 className="text-slate-400 font-medium mb-4">IIT Guwahati</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specializing in systems engineering and parallel computing. Thesis focuses on designing Parallel External Memory (PEM) algorithms for the Longest Common Subsequence problem.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">2018 - 2022</span>
              <h3 className="text-xl font-bold text-white mb-1">B.Tech in Computer Science & Engineering</h3>
              <h4 className="text-slate-400 font-medium mb-4">KNIT Sultanpur</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built a strong foundation in core computer science principles, Data Structures, Algorithms, and software engineering practices.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Core Achievements Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <FaAward className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-white">Achievements & Competitions</h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </div>

          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between border-b border-white/5 pb-6">
              <div>
                <h3 className="text-lg font-bold text-white">GATE CSE 2023 - AIR 733</h3>
                <p className="text-slate-400 text-sm mt-1">Graduate Aptitude Test in Engineering</p>
              </div>
              <div className="text-right">
                <span className="text-emerald-400 font-mono bg-emerald-400/10 px-3 py-1 rounded-full text-s font-semibold border border-emerald-400/20">99.40 Percentile</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between border-b border-white/5 pb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Codeforces Specialist</h3>
                <p className="text-slate-400 text-sm mt-1">Competitive Programming Profile</p>
              </div>
              <div className="text-right">
                <span className="text-cyan-400 font-mono bg-cyan-400/10 px-3 py-1 rounded-full text-s font-semibold border border-cyan-400/20">Max Rating: 1411</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">LeetCode DSA Mastery</h3>
                <p className="text-slate-400 text-sm mt-1">Data Structures & Algorithms</p>
              </div>
              <div className="text-right flex flex-col items-center">
                <span className="text-[#FFA116] font-mono bg-[#FFA116]/10 px-3 py-1 rounded-full text-s font-semibold border border-[#FFA116]/20">1000+ Problems Solved</span>
                <span className="text-[#FFA116] font-mono bg-[#FFA116]/10 px-3 py-1 mt-2 rounded-full text-s font-semibold border border-[#FFA116]/20">Rating: Knight(1800+)</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects & Research Section (Dynamically Mapped) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <FaBriefcase className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-white">Projects & Research</h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <Link 
                to={`/projects/${project.id}`} 
                key={project.id}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-all block"
              >
                {/* Accent Line on hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Shows shortDescription if available, otherwise cuts off regular description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.shortDescription || project.description}
                </p>
                
                {/* Tag rendering */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags?.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs font-mono text-slate-300 bg-black/40 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;