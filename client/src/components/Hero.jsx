import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Trophy, Code, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bgDark relative overflow-hidden px-6">

      {/* Background Glow Effect */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

      {/* Added pt-20 to ensure it doesn't collide with the fixed Navbar */}
      <div className="max-w-5xl mx-auto z-10 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Greeting Pill */}
          <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-primary font-medium tracking-wide text-sm">
              🎓 M.Tech CSE @ IIT Guwahati
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-textLight leading-tight tracking-tight">
            Hi, I'm Ashish.<br />
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">full-stack web apps & AI</span> systems.
          </h1>

          {/* Subtext */}
          <p className="text-textGray text-lg md:text-xl max-w-2xl leading-relaxed">
            I am a software engineer specializing in the MERN stack and Artificial Intelligence. From architecting scalable web platforms to integrating advanced machine learning pipelines, I build intelligent digital experiences.
          </p>

          {/* Quick Stats / Achievements Bar */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 py-2">
            <div className="flex items-center gap-2 text-textLight text-sm md:text-base font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Trophy size={18} className="text-primary" />
              <span>GATE AIR 733 <span className="text-textGray font-normal">(99.4%)</span></span>
            </div>
            <div className="flex items-center gap-2 text-textLight text-sm md:text-base font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Code size={18} className="text-primary" />
              <span>CF Specialist <span className="text-textGray font-normal">(1406)</span></span>
            </div>
            <div className="flex items-center gap-2 text-textLight text-sm md:text-base font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Award size={18} className="text-primary" />
              <span>900+ LeetCode</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2 justify-center group"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/docs/Ashish_Resume.pdf"
              download="Ashish_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-textLight font-semibold rounded-lg hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 justify-center"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;