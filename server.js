// src/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');  // Add this line
const apiRouter = require('./src/backend/api');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());

// Use API routes before serving static files
app.use('/api', apiRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
