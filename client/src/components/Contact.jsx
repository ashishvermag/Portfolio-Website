import React, { useState } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const accessKey = "e7423352-c9ba-4305-8ae8-bd0748282cd2"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
        setTimeout(() => setStatus('idle'), 5000); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
        <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side - Text & Contact Info */}
        <div>
          <h3 className="text-4xl font-bold text-white mb-6">Get In Touch.</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I am currently pursuing my Master's at IIT Guwahati and am actively open for new opportunities. Whether you have a question, a project idea, or just want to discuss systems engineering and AI, I'd love to hear from you!
          </p>
          
          {/* Contact Details List */}
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                <CiMail size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Personal Email</p>
                <a href="mailto:ashish.av35@gmail.com" className="text-white font-medium hover:text-primary transition-colors text-lg">
                  ashish.av35@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">College Email (IITG)</p>
                <a href="mailto:ashishv1006@iitg.ac.in" className="text-white font-medium hover:text-primary transition-colors text-lg">
                  ashishv1006@iitg.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div>
            <p className="text-slate-400 text-sm font-medium mb-4">Social Profiles</p>
            {/* Added flex-wrap here so the buttons flow naturally without breaking the layout */}
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/ashishvermag" target="_blank" rel="noreferrer" className="px-5 py-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white group flex items-center gap-3">
                <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/ashish-verma1001" target="_blank" rel="noreferrer" className="px-5 py-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white group flex items-center gap-3">
                <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
              <a href="https://x.com/AshishV1001" target="_blank" rel="noreferrer" className="px-5 py-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white group flex items-center gap-3">
                <FiX size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">X (Twitter)</span>
              </a>
              <a href="https://leetcode.com/u/ashish_verma101/" target="_blank" rel="noreferrer" className="px-5 py-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white group flex items-center gap-3">
                <SiLeetcode size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Hello Ashish, I have an opportunity..."
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting' || status === 'success'}
              className="mt-2 w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'idle' && <><FiSend size={20} /> Send Message</>}
              {status === 'submitting' && 'Sending...'}
              {status === 'success' && <><CheckCircle size={20} /> Sent Successfully!</>}
              {status === 'error' && <><AlertCircle size={20} /> Failed to Send. Try again.</>}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;