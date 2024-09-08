const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username, password
    })
    res.status(200).json({
        msg: "User created Successfully."
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.status(200).json({
        Courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": { purchasedCourses: courseId }
    })
    res.status(200).json({
        msg: "User purchased a course."
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {

        const user = await User.findOne({
            username: req.headers.username
        })
        const purchasedCourses = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        })
        res.status(200).json({
            courses: purchasedCourses
        })
    } catch (e) {
        console.log(e)
    }
});

module.exports = router