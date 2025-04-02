const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Configure multer for file upload
const upload = multer({
    dest: 'uploads/', // Directory where uploaded files will be stored
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
    fileFilter: (req, file, cb) => {
        const fileExt = path.extname(file.originalname).toLowerCase();
        if (fileExt !== '.pdf' && fileExt !== '.ppt' && fileExt !== '.docx') {
            return cb(new Error('Only .pdf, .ppt, and .docx files are allowed.'));
        }
        cb(null, true);
    }
});

// Set up the upload route
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        console.log(req.file); // Log file details
        res.status(200).send('File uploaded successfully!');
    } catch (err) {
        res.status(400).send('Error during file upload.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
