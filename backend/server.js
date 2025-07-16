const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/build', (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
