const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'TCM System API Running',
        version: '1.0.0'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date()
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
