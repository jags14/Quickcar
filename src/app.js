const express = require('express');
const PORT = 3000;
const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({
        message: "application is running as intended"
    });
});

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);
});