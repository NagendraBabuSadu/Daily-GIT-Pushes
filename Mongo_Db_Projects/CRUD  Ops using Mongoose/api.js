const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.QUERY);
const StudentModel = require("./studentSchema");

// connecting to a database
const query = process.env.QUERY;

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


router.get("/findfirst", async function (req, res) {
        const data = await StudentModel.findOne({ StudentId: { $gt: 103 } });
        res.status(200).json({
                Student: data
        })


})

// Delete route using  get(hardcoded)
router.get("/delete", async function (req, res) {
        const data = await StudentModel.findOneAndDelete({ StudentId: 106 })
        res.status(200).json({
                msg: "Student is deleted."
        })
})

// Delete route using post request
router.post("/delete", async function (req, res) {

        try {
                const data = await StudentModel.findOneAndDelete({ StudentId: req.body.StudentId });

                if (data) {

                        res.status(200).json({
                                msg: "Student is deleted."
                        })
                        console.log(data)
                } else {
                        res.status(411).json({
                                msg: "Student not found."
                        })
                }
        } catch (err) {
                res.status(500).json({
                        msg: "An error occured",
                        error: err.message
                })
        }

})

// Update route using post request

router.post("/update", async function (req, res) {

        try {
                const data = await StudentModel.findOneAndUpdate(
                        { StudentId: req.body.StudentId },
                        { Name: req.body.newName },
                        { new: true }
                );

                if (data) {

                        res.status(200).json({
                                msg: "Student is updated."
                        })
                        console.log(data)
                } else {
                        res.status(411).json({
                                msg: "Student not found."
                        })
                }
        } catch (err) {
                res.status(500).json({
                        msg: "An error occured",
                        error: err.message
                })
        }

})


module.exports = router;
