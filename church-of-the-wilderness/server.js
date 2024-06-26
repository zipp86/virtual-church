const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Set up body parser to parse JSON requests
app.use(bodyParser.json());

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Serve other routes to the React application
const routes = [
  '/sanctuary',
  '/live-streaming',
  '/community-forum',
  '/prayer-requests',
  '/events',
  '/giving'
];

routes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
});

// Set up route for sending chat messages
app.post('/send-chat-message', (req, res) => {
  // TODO: implement logic for sending chat message
  console.log('Chat message received:', req.body.message);
  res.send('Chat message sent!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
