import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Database, FileText, GitMerge, MessageSquare, Settings } from 'lucide-react';

const PdfChatbot = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Navigation */}
      <Link to="/" className="text-primary hover:underline flex items-center gap-2 mb-12 w-max transition-all hover:-translate-x-1">
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-16 border-b border-white/10 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
            <Bot size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Multi-Agent PDF Chatbot</h1>
        </div>
        <p className="text-xl text-textGray leading-relaxed max-w-3xl mb-8">
          A sophisticated, interactive AI platform built with Streamlit. Turn any PDF document into a conversational agent with persistent memory, isolated context, and strict source-cited answers.
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {["Streamlit", "Google Gemini 1.5 Flash", "ChromaDB", "LangChain", "PyMuPDF", "Sentence-Transformers"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-cardDark border border-white/10 text-primary text-sm font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<FileText />} title="Dynamic Creation" desc="Upload any PDF and instantly generate a specialized AI agent knowledgeable about its specific contents." />
          <FeatureCard icon={<MessageSquare />} title="Persistent Memory" desc="Chat histories are saved locally. Close the app and return later to pick up exactly where you left off." />
          <FeatureCard icon={<GitMerge />} title="Source-Cited Answers" desc="Every AI response includes the exact text chunks extracted from the source document to guarantee trust." />
          <FeatureCard icon={<Database />} title="Multi-Agent System" desc="Seamlessly create, switch between, and manage multiple agents, each with an isolated vector database." />
          <FeatureCard icon={<Settings />} title="Granular Control" desc="Complete chat management including wiping specific agent histories or permanently deleting agents and their databases." />
        </div>
      </div>

      {/* Architecture Section (RAG) */}
      <div className="bg-cardDark border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">RAG Architecture</h2>
        <p className="text-textGray mb-10">
          This application utilizes a Retrieval-Augmented Generation (RAG) pipeline to ensure the LLM only answers based on the provided document, preventing hallucinations.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-4 px-6 text-primary font-bold">Phase</th>
                <th className="py-4 px-6 text-primary font-bold">Process Steps</th>
                <th className="py-4 px-6 text-primary font-bold">Technologies Used</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-6 px-6 font-semibold text-white align-top">1. Data Ingestion</td>
                <td className="py-6 px-6 text-textGray align-top">
                  Extract text from PDF pages → Split into manageable chunks → Convert chunks into numerical vectors → Store in a persistent collection.
                </td>
                <td className="py-6 px-6 text-textGray align-top">PyMuPDF, LangChain, ChromaDB</td>
              </tr>
              <tr>
                <td className="py-6 px-6 font-semibold text-white align-top">2. Retrieval & Generation</td>
                <td className="py-6 px-6 text-textGray align-top">
                  Convert user question to vector → Run similarity search in ChromaDB → Inject context into prompt template → Generate grounded response.
                </td>
                <td className="py-6 px-6 text-textGray align-top">Sentence-Transformers, Gemini 1.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Setup / Terminal Simulation */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Local Deployment</h2>
        <div className="bg-black border border-white/10 rounded-xl p-6 font-mono text-sm text-green-400 overflow-x-auto">
          <p className="mb-2"><span className="text-gray-500"># 1. Clone & create virtual environment</span></p>
          <p className="mb-4 text-white">git clone repository-url && python3 -m venv venv && source venv/bin/activate</p>
          
          <p className="mb-2"><span className="text-gray-500"># 2. Install dependencies</span></p>
          <p className="mb-4 text-white">pip install streamlit python-dotenv chromadb sentence-transformers google-generativeai PyMuPDF langchain</p>
          
          <p className="mb-2"><span className="text-gray-500"># 3. Boot the platform</span></p>
          <p className="text-white">streamlit run app.py</p>
        </div>
      </div>
    </div>
  );
};

// Mini-component for the features grid to keep code clean
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-textGray text-sm leading-relaxed">{desc}</p>
  </div>
);

export default PdfChatbot;