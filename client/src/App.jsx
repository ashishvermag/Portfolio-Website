import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Move your landing page logic here
import ProjectDetail from './pages/ProjectDetail';
import useSmoothScroll from './hooks/useScroll';
import AdminDashboard from './pages/AdminDashboard';
import ProjectForm from './pages/ProjectForm';
import Login from './pages/Login';

// The Security Wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  // If no token, kick them to the home page
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children; // Otherwise, let them see the page
};

function App() {
  useSmoothScroll();

  return (
    <Router>
      <div className="bg-bgDark min-h-screen text-textLight selection:bg-primary selection:text-white">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/add" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
          <Route path="/admin/edit/:id" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;