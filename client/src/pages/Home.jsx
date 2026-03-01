import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="py-6 text-center text-textGray text-sm border-t border-white/5 bg-bgDark">
        <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;