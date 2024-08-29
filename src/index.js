const express = require('express');
const connection = require('../database/studentDB');
const studentSchema = require('../database/studentSchema');
const studentController = require('../controller/studentController');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentController);

app.get('/', async (req, res) => {
    try {
        await connection(); // Ensure the connection is awaited...
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Database connection failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
