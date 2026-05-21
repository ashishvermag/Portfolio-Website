// client/src/components/Contact.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-32 text-center border-t border-white/5">
      <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
        I am currently pursuing my Master's at IIT Guwahati and am open for new opportunities. Whether you have a question or just want to discuss systems engineering, I'll try my best to get back to you!
      </p>
      
      <div className="flex justify-center gap-6 mb-12">
        <a href="mailto:ashish.av35@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white">
          <Mail size={24} />
        </a>
        <a href="https://github.com/ashishvermag" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/ashish-verma1001" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50 text-white">
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;