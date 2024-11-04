const express = require('express');
const cors = require('cors');
const app = express();

// Port from environment or default to 8081 (Important for Elastic Beanstalk)
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'TCM System Running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
