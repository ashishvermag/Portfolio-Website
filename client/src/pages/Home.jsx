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
      <Hero />
      <CodingProfiles />
      <Projects />
      <Skills />
      <Contact />     
    </>
  );
};

export default Home;