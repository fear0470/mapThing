const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

app.use(cors());

app.get('/api/v1/stores', (req, res) => {
    res.send('Hello ');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);