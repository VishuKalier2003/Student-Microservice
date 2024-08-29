const express = require('express');
const connection = require('../database/studentDB');
const studentSchema = require('../database/studentSchema');

const router = express.Router();

router.post('/student/add', async (req, res) => {
    try {
        await connection(); // Ensure the connection is awaited
        const dataBody = req.body;

        const studentData = new studentSchema({
            name: dataBody.name,
            email: dataBody.email
        });

        const savedStudent = await studentData.save();
        res.status(201).json(savedStudent); // Return the saved student data with a 201 status
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Database connection or saving failed');
    }
});

module.exports = router;
