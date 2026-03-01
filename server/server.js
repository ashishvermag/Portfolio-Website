require('dotenv').config(); // Load env vars
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import auth routes


const projectRoutes = require('./routes/projectRoutes'); // Import project routes
const contactRoutes = require('./routes/contactRoutes'); // Import contact routes
const uploadRoutes = require('./routes/uploadRoutes'); // Import upload routes


// Initialize App
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON bodies (as sent by API clients)

// Basic Route (Test if it works)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/projects', projectRoutes); 
app.use('/api/contact', contactRoutes);
app.use('/api/upload', uploadRoutes);

app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); // Serve uploaded images statically
app.use('/api/auth', authRoutes); // Use auth routes for /api/auth endpoints

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));