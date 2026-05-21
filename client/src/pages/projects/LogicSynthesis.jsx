import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Network, Zap, Activity, Brain, Database, LineChart, Target } from 'lucide-react';

const LogicSynthesis = () => {
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
            <Cpu size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Logic Synthesis Using GCN & CNN</h1>
        </div>
        <p className="text-xl text-textGray leading-relaxed max-w-3xl mb-8">
          An implementation of the "Bulls-Eye" framework. This project combines Graph Neural Networks (GNNs) with active few-shot learning to predict Electronic Design Automation (EDA) synthesis delay outcomes, bypassing computationally expensive tool runs.
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {["PyTorch", "PyTorch Geometric", "GCN & CNN", "Active Few-Shot Learning", "Simulated Annealing", "ABC Synthesis Tool", "NetworkX"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-cardDark border border-white/10 text-primary text-sm font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* The Engineering Challenge */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">The EDA Bottleneck</h2>
          <p className="text-textGray leading-relaxed mb-6">
            In traditional logic synthesis, finding the optimal sequence of transformations (a "recipe") to minimize circuit delay relies on the ABC synthesis tool. Running these simulations for large industrial designs is incredibly time-consuming and computationally expensive.
          </p>
          <p className="text-textGray leading-relaxed">
            This project solves that bottleneck. By framing the circuit as an And-Inverter Graph (AIG), we trained a machine learning surrogate model to instantly predict Quality of Result (QoR) delays. Using active learning, the model fine-tunes itself to unseen architectures using only a fraction of the data.
          </p>
        </div>
        
        {/* Key Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricCard icon={<Target />} title="95.66% Accuracy Boost" desc="RMSE dropped from 565.66 to 24.57 after fine-tuning with just 100 samples." />
          <MetricCard icon={<Zap />} title="4.02% Delay Reduction" desc="Discovered synthesis recipes that outperformed the best-known baseline recipes." />
          <MetricCard icon={<Network />} title="Graph Encoding" desc="Processed AIG nodes into [1x128] embeddings using a robust GCN architecture." />
          <MetricCard icon={<Brain />} title="Simulated Annealing" desc="Navigated the discrete recipe search space efficiently to avoid local optima traps." />
        </div>
      </div>

      {/* Deep Dive: Architecture */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8">Dual-Encoding Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <Network className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">1. AIG Graph Encoder (GCN)</h3>
            <p className="text-textGray text-sm leading-relaxed mb-4">
              Circuits are represented as And-Inverter Graphs. Nodes (Primary Inputs, Outputs, and Gates) are converted into one-hot encodings. A Graph Convolutional Network captures structural properties, aggregating neighboring nodes into a fixed [1x128] embedding via max/mean pooling.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <Database className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">2. Recipe Encoder (CNN)</h3>
            <p className="text-textGray text-sm leading-relaxed mb-4">
              Synthesis recipes (e.g., 'b', 'rw', 'rf') are mapped to integers. A multi-kernel CNN (kernel sizes 3, 4, 5, 6) processes the sequence to capture transformation order dependencies, outputting a [1x64] tensor representation.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <Activity className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">3. Active Few-Shot Fusion</h3>
            <p className="text-textGray text-sm leading-relaxed mb-4">
              The zero-shot base model is fine-tuned for unseen circuits. K-means clustering identifies diverse recipe centroids. Only these highly informative recipes are synthesized for ground-truth labels, drastically minimizing computational overhead.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Realities (Limitations & Scale) */}
      <div className="bg-cardDark border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <LineChart className="text-primary" size={28} />
          <h2 className="text-3xl font-bold text-white">Implementation vs. Theory</h2>
        </div>
        <p className="text-textGray mb-8">
          A critical part of systems engineering is understanding the constraints of a scaled-down academic implementation compared to large-scale industrial requirements.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-4 px-6 text-primary font-bold bg-white/5 rounded-tl-xl">Metric</th>
                <th className="py-4 px-6 text-white font-bold bg-white/5">Original Paper Scope</th>
                <th className="py-4 px-6 text-white font-bold bg-white/5 rounded-tr-xl">Our Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-semibold text-textGray">Training Samples</td>
                <td className="py-4 px-6 text-textGray">150,000+</td>
                <td className="py-4 px-6 text-white font-medium">4,500 <span className="text-xs text-textGray ml-2">(Hardware constrained)</span></td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-semibold text-textGray">Max Nodes Supported</td>
                <td className="py-4 px-6 text-textGray">16.2 Million</td>
                <td className="py-4 px-6 text-white font-medium">100,000</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-semibold text-textGray">Simulated Annealing Iters</td>
                <td className="py-4 px-6 text-textGray">10,000</td>
                <td className="py-4 px-6 text-white font-medium">1,500</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-textGray rounded-bl-xl">Target Objective</td>
                <td className="py-4 px-6 text-textGray">Area + Delay + Power</td>
                <td className="py-4 px-6 text-white font-medium rounded-br-xl">Delay-only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

const MetricCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
    <div className="text-primary mb-3">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-textGray text-sm leading-relaxed">{desc}</p>
  </div>
);

export default LogicSynthesis;