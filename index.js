// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js web app on Railway!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
