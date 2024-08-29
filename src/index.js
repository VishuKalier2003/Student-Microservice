const express = require('express');
const studentController = require('../controller/studentController');
const app = express();
const port = 3000;

app.use(express.json());
app.use(studentController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
