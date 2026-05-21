import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import CodingProfiles from '../components/CodingProfiles';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CodingProfiles />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-6 text-center text-textGray text-sm border-t border-white/5 bg-[#0a0f1c]">
        <p>© {new Date().getFullYear()} Ashish Verma. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;