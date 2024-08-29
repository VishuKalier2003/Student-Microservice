const express = require('express');
const connection = require('../database/studentDB');
const student = require('../model/student');
const studentMiddleware = require('../middleware/studentWare');

const router = express.Router();

router.post('/student/add', async (req, res) => {
    try {
        await connection(); // Ensure the connection is awaited...
        const dataBody = req.body;

        const studentData = new student({
            name : dataBody.name,
            accNo : dataBody.accNo,
            age : dataBody.age,
            studentID : dataBody.studentID | undefined,
            accID : dataBody.accID | undefined,
            monCredit : dataBody.monCredit | undefined,
            monDebit : dataBody.monDebit | undefined
        });
        const savedStudent = await studentData.save();
        res.status(201).json(savedStudent); // Return the saved student data with a 201 status...
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Database connection or saving failed');
    }
});

// Getting all the details of the student...

router.get('/student/data', studentMiddleware, async (req, res) => {
    try {
        await connection();         // Ensure the connection is awaited...
        const data = await student.find();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Database connection failed');
    }
});

module.exports = router;
