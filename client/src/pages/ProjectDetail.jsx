import React from 'react';
import { useParams } from 'react-router-dom';

// 1. Import your custom project pages here
import ProjectOne from './projects/ProjectOne';
import PdfChatbot from './projects/PdfChatbot';
import LogicSynthesis from './projects/LogicSynthesis';
import HybridSocket from './projects/HybridSocket';

const ProjectDetail = () => {
  const { id } = useParams();

  // 2. The Registry: Map the URL id to the specific component
  const projectRegistry = {
    "project-one": <ProjectOne />,
    "pdf-chatbot": <PdfChatbot />,
    "logic-synthesis": <LogicSynthesis />,
    "hybrid-socket": <HybridSocket />
    // You will add new projects here as you create them! Just follow the pattern: "url-id": <ComponentName />
  };

  // 3. Find the right component
  const SelectedProject = projectRegistry[id];

  // 4. If they type a bad URL, show a 404. Otherwise, show the project!
  if (!SelectedProject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-textLight">
        Project not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgDark selection:bg-primary selection:text-white">
      {SelectedProject}
    </div>
  );
};

export default ProjectDetail;