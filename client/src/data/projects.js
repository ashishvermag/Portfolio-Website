export const projectsData = [
  {
    id: "project-one", // This is the secret key for the URL!
    title: "My First Project",
    image:  null, // We will add real images later
    description: "A quick summary for the home page card.",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/yourusername/repo",
    liveLink: "https://your-live-link.com"
  },
  {
    id: "pdf-chatbot", 
    title: "Multi-Agent PDF Chatbot",
    image: null, // Set to null so your sleek Text-Decoration fallback kicks in!
    isAcademic: false, // This will trigger the "Academic Work" tag on your home page card
    fallbackIcon: "bot", // This is optional since you have a default fallback, but you can specify different icons for different projects if you want!
    description: "A RAG-powered conversational AI agent built with Streamlit, Gemini, and ChromaDB that allows you to chat with any PDF.",
    technologies: ["Python", "Streamlit", "Gemini", "ChromaDB"],
    githubLink: "https://github.com/ashishvermag/Multiagent-PDF-RAG/tree/master",
    liveLink: ""
  },
  {
    id: "logic-synthesis", 
    title: "Logic Synthesis Using GCN & CNN",
    image: null, 
    isAcademic: true, 
    fallbackIcon: "cpu", // Renders the hardware CPU icon!
    description: "An implementation of the Bulls-Eye framework combining Graph Neural Networks (GCN) and active few-shot learning to predict EDA synthesis delay outcomes.",
    technologies: ["PyTorch", "GNN / CNN", "Simulated Annealing"],
    githubLink: "https://github.com/ashishvermag/Logic-Synthesis-Using-Heuristics",
    liveLink: ""
  },
  {
    id: "hybrid-socket", 
    title: "Hybrid Socket Communication",
    image: null, 
    isAcademic: true, 
    fallbackIcon: "server", 
    description: "A secure C++ client-server framework utilizing a hybrid TCP/UDP protocol, dynamic port allocation, and custom symmetric XOR encryption.",
    technologies: ["C++", "POSIX Sockets", "TCP/UDP", "Cryptography"],
    githubLink: "https://github.com/ashishvermag/Hybrid-Socket-Communication/tree/main", 
    liveLink: ""
  },
  {
    id: "voice-dictionary", 
    title: "Voice-Based Dictionary Search",
    image: null, 
    isAcademic: true, 
    fallbackIcon: "mic", 
    description: "A real-time speech recognition system built in C/C++ using Hidden Markov Models (HMM) to instantly fetch word definitions via voice commands.",
    technologies: ["C++", "HMM", "Speech Recognition", "VS 2010"],
    githubLink: "https://github.com/your-username/your-repo-link", 
    liveLink: ""
  }
];