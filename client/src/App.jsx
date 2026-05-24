import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import useSmoothScroll from './hooks/useScroll';
import About from './components/About';
import Navbar from './components/Navbar';
import ScrollManager from './components/ScrollManager';

function App() {
  useSmoothScroll();

  return (
    <Router>
      <div className="bg-bgDark min-h-screen text-textLight selection:bg-primary selection:text-white">

        <ScrollManager />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <footer className="py-6 text-center text-textGray text-sm border-t border-white/5 bg-[#0a0f1c]">
          <p>© {new Date().getFullYear()} Ashish Verma. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;