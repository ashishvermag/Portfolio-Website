import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, ExternalLink, LogOut } from 'lucide-react';
import API from '../api';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get('/projects');
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await API.delete(`/projects/${id}`);
        fetchProjects(); // Refresh the list
      } catch (error) {
        alert("Delete failed");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Destroy the VIP Pass
    navigate('/login'); // Kick back to login screen
  };

  return (
    <div className="min-h-screen bg-bgDark text-textLight p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Admin <span className="text-primary">Panel</span></h1>
          <Link to="/admin/add" className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all">
            <Plus size={20} /> Add New Project
          </Link>
          <button onClick={handleLogout} className="bg-cardDark border border-white/10 hover:border-red-500 hover:text-red-500 px-5 py-2 rounded-lg flex items-center gap-2 transition-all">
            <LogOut size={20} /> Logout
          </button>
        </div>

        {/* Projects Table */}
        <div className="bg-cardDark rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-textGray text-sm uppercase">
              <tr>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Tags</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.map((project) => (
                <tr key={project._id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img src={project.image} alt="" className="w-12 h-12 rounded-md object-cover" />
                    <span className="font-medium">{project.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <Link to={`/projects/${project._id}`} className="p-2 text-textGray hover:text-white"><ExternalLink size={18} /></Link>
                      <Link to={`/admin/edit/${project._id}`} className="p-2 text-textGray hover:text-blue-400"><Edit size={18} /></Link>
                      <button onClick={() => handleDelete(project._id)} className="p-2 text-textGray hover:text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;