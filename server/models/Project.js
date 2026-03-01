const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }, // Short summary for the card
    
    // New Fields for the Details Page
    overview: { type: String }, // Long detailed text
    features: [String], // Array of bullet points (e.g., "Real-time chat", "Dark mode")
    technologies: [String], // Detailed tech breakdown
    
    tags: [String], // Short tags for the card
    githubLink: { type: String, required: true },
    liveLink: { type: String, required: false },
    role: { type: String }, // Optional field to specify your role (e.g., "Full Stack Developer")
    year: { type: Number } // Optional field to specify the year of the project
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);