const express = require("express");
const { Admin, Course } = require('../db');
const adminMiddleware = require("../middleware/admin");
const router = express.Router();

// Admin Routes
router.post('/signup', adminMiddleware, async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    })
    res.status(200).json({
        msg: "Admin is created Successfully."
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title, description, price, imageLink
    })
    res.status(200).json({
        msg: "Course created successfully.",
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    // Implement admin signup logic
    const allCourses = await Course.find({})
    res.status(200).json({
        Courses: allCourses
    })
});

module.exports = router;