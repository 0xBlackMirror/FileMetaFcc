// Basic Requires
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
// Express App
const app = express();
// Setting Public Folder
app.use("/public", express.static(path.join(__dirname, 'public')));
// HomePage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});
// POST Request Handling
app.post('/upload', upload.single('file'),(req, res) => {
    return res.send('Your file\'s size is ' + req.file.size + ' bytes.');
});
// Server Start
app.listen(process.env.PORT || 80, () => {
    console.log('Server Is On');
});