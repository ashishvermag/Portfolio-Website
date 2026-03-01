import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import API from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // We will create this endpoint in the next step
      await API.post('/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-bgDark relative overflow-hidden">
        {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side: Text Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-textLight mb-6">
            Let's work <span className="text-primary">together</span>.
          </h2>
          <p className="text-textGray mb-8 text-lg">
            I'm currently available for freelance work and full-time positions.
            Have a project in mind? Let's talk.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-textLight">
              <div className="p-3 bg-cardDark rounded-lg text-primary border border-white/10">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-textGray">Email me at</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-textLight">
              <div className="p-3 bg-cardDark rounded-lg text-primary border border-white/10">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-textGray">Location</p>
                <p className="font-medium">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-cardDark p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-textGray mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-bgDark border border-white/10 rounded-lg px-4 py-3 text-textLight focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textGray mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-bgDark border border-white/10 rounded-lg px-4 py-3 text-textLight focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textGray mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-bgDark border border-white/10 rounded-lg px-4 py-3 text-textLight focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;