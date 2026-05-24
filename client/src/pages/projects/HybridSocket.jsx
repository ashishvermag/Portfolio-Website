import React from 'react';
import { Link } from 'react-router-dom';
// Updated Imports: Using react-icons instead of lucide-react
import { FiArrowLeft, FiServer, FiShield, FiActivity, FiTerminal, FiLock, FiUnlock, FiWifi, FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaRightLeft } from 'react-icons/fa6';

const HybridSocket = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Navigation */}
      <Link to="/" className="text-primary hover:underline flex items-center gap-2 mb-12 w-max transition-all hover:-translate-x-1">
        <FiArrowLeft size={20} /> Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-16 border-b border-white/10 pb-16">
        <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-4 md:gap-6 mb-6">
          
          {/* Icon and Title Group */}
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
              <FiServer size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Hybrid Socket Communication</h1>  
          </div>
          
          {/* GitHub and Live Links Group */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/ashishvermag/Hybrid-Socket-Communication/tree/main" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary/20 text-textLight hover:text-primary rounded-full transition-all border border-white/10 hover:border-primary/50"
            >
              <FiGithub size={25} />
            </a>
            
            {/* If you ever deploy a live version, you can uncomment this! */}
            {/* <a 
              href="https://your-live-link.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-black rounded-full transition-all border border-primary/20"
            >
              <FiExternalLink size={25} />
            </a>  */}
          </div>
        </div>
        
    
        <p className="text-xl text-textGray leading-relaxed max-w-3xl mb-8">
          A secure client-server framework built in C++. This project demonstrates low-level POSIX network programming by utilizing a hybrid TCP/UDP protocol, symmetric XOR encryption, and custom server-side scheduling policies.
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {["C++11", "POSIX Sockets", "TCP/UDP Protocols", "XOR Encryption", "Base64", "Multi-threading"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-cardDark border border-white/10 text-primary text-sm font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Protocol Flow Architecture */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8">Protocol Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Phase 1 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <FiWifi size={100} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Phase 1: TCP Handshake</h3>
            <p className="text-primary font-mono text-sm mb-6">Connection Setup & Port Negotiation</p>
            <ul className="space-y-4 text-textGray">
              <li className="flex gap-3"><span className="text-primary">1.</span> Client initiates reliable TCP connection to the server's main port.</li>
              <li className="flex gap-3"><span className="text-primary">2.</span> Server accepts and dynamically allocates a random UDP port.</li>
              <li className="flex gap-3"><span className="text-primary">3.</span> Server transmits the new UDP port back to the client.</li>
              <li className="flex gap-3"><span className="text-primary">4.</span> Both parties gracefully terminate the TCP connection.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaRightLeft size={100} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Phase 2: UDP Transmission</h3>
            <p className="text-primary font-mono text-sm mb-6">Encrypted Data Transfer</p>
            <ul className="space-y-4 text-textGray">
              <li className="flex gap-3"><span className="text-primary">1.</span> Server binds a new datagram socket to the negotiated UDP port.</li>
              <li className="flex gap-3"><span className="text-primary">2.</span> Client encrypts plaintext payload and sends it via UDP.</li>
              <li className="flex gap-3"><span className="text-primary">3.</span> Server receives, decodes, and decrypts the payload.</li>
              <li className="flex gap-3"><span className="text-primary">4.</span> Server returns an encrypted acknowledgment (ACK).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security & Scheduling Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Encryption Scheme */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FiShield className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-white">Encryption Scheme</h2>
          </div>
          <p className="text-textGray leading-relaxed mb-6">
            To guarantee confidentiality over the connectionless UDP protocol, a custom symmetric stream cipher was implemented directly in C++.
          </p>
          <div className="space-y-4">
            <div className="bg-cardDark p-4 rounded-xl border border-white/5 flex items-start gap-4">
              <FiLock className="text-primary mt-1" size={20} />
              <div>
                <h4 className="text-white font-bold">1. Block Padding & XOR</h4>
                <p className="text-sm text-textGray">Plaintext is padded to multiples of 16-bytes, then mutated via bitwise XOR operations against a repeating 16-byte secret key.</p>
              </div>
            </div>
            <div className="bg-cardDark p-4 rounded-xl border border-white/5 flex items-start gap-4">
              <FiActivity className="text-primary mt-1" size={20} />
              <div>
                <h4 className="text-white font-bold">2. Base64 Encoding</h4>
                <p className="text-sm text-textGray">The raw binary ciphertext is encoded to Base64 to ensure safe transmission over the network without non-printable character corruption.</p>
              </div>
            </div>
            <div className="bg-cardDark p-4 rounded-xl border border-white/5 flex items-start gap-4">
              <FiUnlock className="text-primary mt-1" size={20} />
              <div>
                <h4 className="text-white font-bold">3. Server Decryption</h4>
                <p className="text-sm text-textGray">The server receives the string, decodes the Base64 layer, and applies the reverse XOR cipher to retrieve the original plaintext.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Server Policies */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FiTerminal className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-white">Scheduling Policies</h2>
          </div>
          <p className="text-textGray leading-relaxed mb-6">
            The framework explores concurrency and queue management by comparing two distinct server-side scheduling algorithms:
          </p>
          <div className="bg-cardDark border border-white/10 rounded-2xl p-6 mb-4">
            <h3 className="text-xl font-bold text-white mb-2">First-Come, First-Served (FCFS)</h3>
            <p className="text-textGray text-sm">
              Clients are queued and processed sequentially. The server completely finishes one client's session before accepting data from the next client in the queue.
            </p>
          </div>
          <div className="bg-cardDark border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Round Robin (RR)</h3>
            <p className="text-textGray text-sm">
              The server handles multiple clients concurrently via a single-exchange policy. It processes one message from a client, acknowledges it, and immediately moves to the next queued client, ensuring no single connection monopolizes the server.
            </p>
          </div>
        </div>
      </div>

      {/* Compilation Block */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Compilation & Deployment</h2>
        <div className="bg-black border border-white/10 rounded-xl p-6 font-mono text-sm text-green-400 overflow-x-auto">
          <p className="mb-2"><span className="text-gray-500"># Compile the FCFS Encrypted Server</span></p>
          <p className="mb-4 text-white">g++ FCFS_Encrypt.cpp -o fcfs_server -std=c++11 -pthread</p>
          
          <p className="mb-2"><span className="text-gray-500"># Compile the RR Encrypted Server</span></p>
          <p className="mb-4 text-white">g++ RR_Encrypt.cpp -o rr_server -std=c++11 -pthread</p>
          
          <p className="mb-2"><span className="text-gray-500"># Compile the Encrypted Clients</span></p>
          <p className="text-white">g++ Client_Encrypt.cpp -o client -std=c++11</p>
          <p className="text-white">g++ throughput_Encrypt.cpp -o throughput_client -std=c++11</p>
        </div>
      </div>

    </div>
  );
};

export default HybridSocket;