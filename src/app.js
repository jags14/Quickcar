const express = require('express');
const PORT = 3000;
const app = express();
const runGetStarted = require('./config/db');
require('dotenv').config();

// await runGetStarted();

app.get('/health', async (req, res) => {
    await runGetStarted();
    res.status(200).json({
        message: "application is running as intended"
    });
});

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);
});