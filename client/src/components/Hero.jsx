import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bgDark relative overflow-hidden px-6">
      
      {/* Background Glow Effect (Optional but cool) */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Greeting Pill */}
          <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-primary font-medium tracking-wide text-sm">
              👋 Available for Hire
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-textLight leading-tight tracking-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              experiences
            </span> that matter.
          </h1>

          {/* Subtext */}
          <p className="text-textGray text-lg md:text-xl max-w-2xl leading-relaxed">
            I'm a Full Stack Developer specializing in the <span className="text-white font-medium">MERN stack</span>. 
            I build accessible, pixel-perfect, and performant web applications.
          </p>

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
              href="/resume.pdf" 
              className="px-8 py-3 border border-white/10 text-textLight font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 justify-center"
            >
              Download CV
              <Download size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2"
>
  {/* The Mouse Outline */}
  <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/20 flex justify-center p-2">
    {/* The Bouncing Dot */}
    <motion.div 
      animate={{ 
        y: [0, 24, 0], // Move down 24px and back up
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="w-2 h-2 bg-primary rounded-full" // Used standard 'bg-blue-500' to be safe
    />
  </div>
</motion.div>
    </section>
  );
};

export default Hero;