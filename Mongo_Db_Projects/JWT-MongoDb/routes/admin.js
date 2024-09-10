const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")
const router = Router();
const jwt = require("jsonwebtoken");
const config = require("../config");
const {JWT_SECRET} = config;
// Admin Routes
router.post('/signup', async (req, res) => {
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

router.post('/signin', async (req, res) => {

    try{
        // Implement admin signup logic
        const username = req.body.username;
        const password = req.body.password;
        
        const admin = await Admin.find({
            username, password
        })
        
        const token = jwt.sign({username}, JWT_SECRET);
        
        if(admin) {   
            res.status(200).json({
                token
            })
        } else {
            msg: "Incorrect username & password"
        }
    } catch(e) {
        console.log(e);
    }

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
    const courses =  await Course.find({});

    res.status(200).json({
        courses: courses
    })
});

module.exports = router;