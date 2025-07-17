const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Changed to 3000 to match the frontend

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// API endpoint
app.post('/api/build', (req, res) => {
  res.json({ success: true });
});

// All other GET requests not handled before will return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
