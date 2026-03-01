const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure where and how the file is saved
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Saves files in an 'uploads' folder
  },
  filename(req, file, cb) {
    // Renames file to prevent duplicates: "image-163234.jpg"
    cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// @route   POST /api/upload
router.post('/', upload.single('image'), (req, res) => {
  // Return the path so the frontend can save it to the database
  // Note: We use replace to ensure Windows backslashes become forward slashes
  res.send(`/${req.file.path.replace('\\', '/')}`); 
});

module.exports = router;