import React from 'react';
import { Link } from 'react-router-dom';
// Updated Imports: Using react-icons instead of lucide-react
import { FiArrowLeft, FiMic, FiBookOpen, FiVolume2, FiActivity, FiGithub, FiExternalLink, FiSettings } from 'react-icons/fi';

const VoiceDictionary = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Navigation */}
      <Link to="/" className="text-primary hover:underline flex items-center gap-2 mb-12 w-max transition-all hover:-translate-x-1">
        <FiArrowLeft size={20} /> Back to Projects
      </Link>

      {/* Hero Section (Using our locked single-row layout!) */}
      <div className="mb-16 border-b border-white/10 pb-16">
        <div className="flex items-center gap-4 md:gap-6 mb-6 w-full">
          
          <div className="p-3 md:p-4 bg-primary/10 rounded-2xl border border-primary/20 shrink-0">
            <FiMic className="text-primary w-8 h-8 md:w-10 md:h-10" />
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            Voice-Based Dictionary Search
          </h1>  
          
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="https://github.com/your-username/your-repo-link" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/5 hover:bg-primary/20 text-textLight hover:text-primary rounded-full transition-all border border-white/10 hover:border-primary/50"
            >
              <FiGithub size={25} />
            </a>
          </div>
        </div>
        
        <p className="text-xl text-textGray leading-relaxed max-w-3xl mb-8">
          A real-time speech recognition system built in C/C++. This application acts as a voice-controlled dictionary, leveraging Hidden Markov Models (HMM) to process acoustic data, handle diverse accents, and instantly fetch word definitions.
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {["C / C++", "Hidden Markov Models (HMM)", "Visual Studio", "Speech Recognition", "Acoustic Modeling"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-cardDark border border-white/10 text-primary text-sm font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture & Engineering Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Acoustic Modeling Focus */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Acoustic Modeling with HMM</h2>
          <p className="text-textGray leading-relaxed mb-6">
            Recognizing human speech programmatically requires handling significant variations in pitch, speed, and dialect. Instead of simple pattern matching, this system employs a statistical approach.
          </p>
          <div className="bg-cardDark border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <FiActivity className="text-primary" size={24} /> 
              Hidden Markov Models
            </h3>
            <p className="text-textGray text-sm leading-relaxed">
              The core engine relies on Hidden Markov Models to represent the probability distributions of spoken phonemes. By training the model on pre-recorded audio datasets containing varied pronunciations, the system builds robust acoustic models for each target word, enabling highly accurate real-time classification.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">System Features</h2>
          <div className="space-y-4">
            <FeatureRow 
              icon={<FiVolume2 />} 
              title="Real-Time Processing" 
              desc="Captures live audio input and processes the waveform instantly against the trained acoustic models." 
            />
            <FeatureRow 
              icon={<FiBookOpen />} 
              title="Dictionary Lookup" 
              desc="Successfully classified words trigger an immediate dictionary retrieval, displaying the definition to the user." 
            />
            <FeatureRow 
              icon={<FiSettings />} 
              title="Accent Tolerance" 
              desc="Statistical variance built into the HMM training data allows the engine to recognize words despite regional accents." 
            />
          </div>
        </div>
      </div>

      {/* Experimental Setup */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Experimental Setup & Future Scope</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-textGray">
          <div>
            <h4 className="text-primary font-bold mb-2">Development Environment</h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Windows Operating System</li>
              <li>Microsoft Visual Studio 2010</li>
              <li>C++11 Standard Library</li>
              <li>Custom Audio Recording Module for Dataset Prep</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-bold mb-2">Scalability</h4>
            <p className="text-sm leading-relaxed">
              While the current prototype supports a limited, highly-trained vocabulary, the HMM pipeline is designed to be extensible. Future updates will involve feeding larger phonetic datasets to expand the dictionary and integrating the tool into broader educational applications.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border border-white/5">
    <div className="text-primary mt-1 bg-primary/10 p-2 rounded-lg">{icon}</div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-sm text-textGray">{desc}</p>
    </div>
  </div>
);

export default VoiceDictionary;