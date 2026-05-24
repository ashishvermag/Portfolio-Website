import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', target: 'top' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/', target: 'projects' },
    { name: 'Contact', path: '/', target: 'contact' },
  ];

  // This function handles clicks when you are ALREADY on the target page
  const handleNavClick = (path, target) => {
    setIsOpen(false); // Always close mobile menu on click

    if (location.pathname === path) {
      if (target) {
        // Scroll to specific section
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Fallback: just snap to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-bgDark/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          state={{ scrollTo: 'top' }} 
          onClick={() => handleNavClick('/', 'top')}
          className="text-2xl font-bold text-white tracking-tighter"
        >
          Ashish<span className="text-primary">Portfolio</span>.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              state={link.target ? { scrollTo: link.target } : null}
              onClick={() => handleNavClick(link.path, link.target)}
              className="text-textGray hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <a href="https://github.com/ashishvermag" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/ashish-verma1001" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://x.com/AshishV1001" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-white transition-colors">
              <FiX size={20}/>
            </a>
            <a href="https://leetcode.com/u/ashish_verma101/" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-white transition-colors">
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-cardDark border-t border-white/10"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                state={link.target ? { scrollTo: link.target } : null}
                onClick={() => handleNavClick(link.path, link.target)}
                className="text-textLight hover:text-primary text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;