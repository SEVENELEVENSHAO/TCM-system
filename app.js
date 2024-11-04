const express = require('express');
const cors = require('cors');
const app = express();

// Elastic Beanstalk expects port 8081
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

// Basic route to test deployment
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to TCM System API',
        version: '1.0.0',
        status: 'running'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date(),
        uptime: process.uptime()
    });
});

// Test API endpoint
app.get('/api/test', (req, res) => {
    res.json({
        message: 'API is working correctly',
        environment: process.env.NODE_ENV || 'development'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`TCM System server running on port ${port}`);
});
