import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import ProjectDetail from './pages/ProjectDetail';
import useSmoothScroll from './hooks/useScroll';

function App() {
  useSmoothScroll();

  return (
    <Router>
      <div className="bg-bgDark min-h-screen text-textLight selection:bg-primary selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;