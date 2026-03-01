const express = require('express');
const router = express.Router();
const { getProjects, createProject, getProjectById, updateProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware'); // For future use when we want to secure routes


// When a user hits '/', run getProjects (if GET) or createProject (if POST)
router.route('/').get(getProjects).post(protect, createProject);
router.route('/:id')
  .get(getProjectById)  // For future use when we want to get a single project by ID
  .put(protect, updateProject)   // For future use when we want to update projects
  .delete(protect, deleteProject); // For future use when we want to delete projects

module.exports = router;