const express = require('express');
const connection = require('../database/studentDB');
const studentController = require('../controller/studentController');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
