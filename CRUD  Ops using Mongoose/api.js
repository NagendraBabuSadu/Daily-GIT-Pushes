const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const StudentModel = require("./studentSchema");

// connecting to a database
const query = "mongodb+srv://nagendrababusadu:yYIfOmXS5mtVt7xQ@cluster0.qjndx4s.mongodb.net/College";

const db = (query);

mongoose.Promise = global.Promise;

mongoose.connect(db);

// A new instance of the student is created using StudentModel and the reference is stored in the variable newStudent. Using the newStudent variable we save the document of the new student to the database collection.
router.get("/findAll", async function (req, res) {
        // const students = await StudentModel.find({}, "Name");
        const students = await StudentModel.find();
        // const names = students.map((student => student.Name));
        // console.log(names);
        res.status(200).json({
                Students: students
        })
})

//Note: We can even insert new documents without hardcoding the fields as done above. For that, we need to change the request from GET to POST and use the body-parser middleware to accept the new student’s data. This ensures that we can insert details of as many students as we need.


async function studentExists(roll) {
        const findStudent = await StudentModel.findOne({
                Roll: roll
        })
        return findStudent !== null;
}


router.post("/save", async function (req, res) {

        if (await studentExists(req.body.Roll)) {
                console.log("Student in db")
                return res.status(411).json({
                        msg: "Student exist in our db"
                })
        } else {
                const newStudent = new StudentModel(req.body);
                newStudent.save();
                console.log(newStudent);
                res.status(200).send("Student is added.");
        }
});


module.exports = router;
