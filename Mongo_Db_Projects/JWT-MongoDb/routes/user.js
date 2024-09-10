const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { User, Course } = require("../db");
const { JWT_SECRET } = config;


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.status(200).json({
        msg: "User is created successfully."
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    // input body: username, password
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.find({ username, password })
        const verifySigninToken = jwt.sign({ username }, JWT_SECRET);

        // if user exists
        if (user) {
            res.status(200).json({
                // returns the token
                Token: verifySigninToken
            })
        } else {
            res.status(403).json({
                msg: "Incorrect inputs"
            })
        }
    } catch (e) {
        res.send(e)
    }


});



router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.status(200).json({
        courses: courses
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    const user = await User.findOne({ username })

    const verifySigninToken = jwt.sign({ username }, JWT_SECRET);
    if (verifySigninToken) {
        if (!user.purchasedCourses.includes(courseId)) {
            await User.updateOne({ username: username }, {
                "$push": { purchasedCourses: courseId }
            })
            res.status(200).json({
                msg: "User purchased a course."
            })
        } else {
            res.status(411).json({
                msg: "User already bought this course."
            })
        }

    } else {
        res.status(403).json({
            msg: "Something is wrong."
        })
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({ username })
    const verifySigninToken = jwt.sign({ username }, JWT_SECRET);

    if (verifySigninToken) {
        const coursesPurchased = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        })
        res.status(200).json({
            User_courses: coursesPurchased
        })
    }
});

module.exports = router