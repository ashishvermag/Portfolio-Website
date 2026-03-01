import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import API from '../api';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', credentials);
      
      // Save the VIP Pass (Token) in the browser
      localStorage.setItem('adminToken', data.token);
      
      // Redirect to the Admin Dashboard
      navigate('/admin');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-bgDark flex items-center justify-center p-6">
      <div className="bg-cardDark p-8 rounded-2xl border border-white/10 w-full max-w-md shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-textLight">Admin Access</h1>
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm text-textGray mb-2">Username</label>
            <input 
              type="text" 
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="w-full bg-bgDark border border-white/10 rounded-lg p-3 text-textLight focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-textGray mb-2">Password</label>
            <input 
              type="password" 
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full bg-bgDark border border-white/10 rounded-lg p-3 text-textLight focus:outline-none focus:border-primary"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;