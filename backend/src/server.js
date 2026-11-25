const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        status: 'success',
        app: 'Fleurista REST API (0042)',
        timestamp: new Date().toISOString()
    });
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`[Fleurista API] Server running on http://localhost:${PORT}`);
});
