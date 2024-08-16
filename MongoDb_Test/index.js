const mongoose = require("mongoose");
const express = require("express");
const app = express();
const zod = require('zod');

app.use(express.json());

// Adding zod schema
const schema = zod.object({
        name: zod.string(),
        username: zod.string(),
        password: zod.string().min(6)
})


// Connecting mongoose - MongoDb
mongoose.connect(
        "mongodb+srv://nagendrababusadu:yYIfOmXS5mtVt7xQ@cluster0.qjndx4s.mongodb.net/newUserDb",
);

// Creating User schema, and connecting to the 'users' collection.
const User = mongoose.model("Users", {
        name: String,
        username: String,
        password: String
})


app.post("/signup", async function (req, res) {
        const { name, username, password } = req.body;
        const response = schema.safeParse({ name, username, password }); // passing zod schema

        // if user exists then, find one from the User collection by comparing with the username
        const userExists = await User.findOne({ username: username });
        if (userExists) {
                return res.status(400).send("User already exists");
        } else {
                // user doesn't exist, create a new user by the User model.
                const user = new User({
                        name: name,
                        username: username,
                        password: password
                });

                // save the user
                if (response.success) {
                        user.save(); // saving the user into Users db collection.
                        res.status(200).json({
                                msg: "User created successfully." // show the output as status 200, with a clear message. 
                        });
                } else {
                        res.status(411).json({
                                msg: "Something is up",
                                response
                        })
                }
        }
});

// get method for the user to get back with the username and password
app.get("/users", async function (req, res) {
        try {
               // pass the username in the headers
                const username = req.headers.username;
                const user = await User.find();

                if (!user) {
                        return res.status(404).send("User not found.");
                }
                // return or show the user details
                return res.status(200).json({
                        user_details: user
                })
        } catch {
                res.status(411).send("Something bad happened.");
        }
});


app.post("/signin", async function (req, res) {

        const schema2 = zod.object({
                username: zod.string(),
        })

        try {

                const username = req.headers.username;

                if (!username) {
                        return res.status(400).json({ msg: "Username header is required." });
                }
                const siginResponse = schema2.safeParse({ username });
                if (!siginResponse.success) {
                        res.status(411).json({
                                msg: "Incorrect data."
                        })
                }
                const user = await User.findOne({ username: username });
                if (user) {
                        return res.status(200).json({
                                msg: "User signed in successfully."
                        })

                } else {
                        return res.status(404).json({
                                msg: "User not found.",
                        });
                }
        } catch (err) {
                console.error("Error occurred:", err);
                return res.status(500).json({
                        msg: "Something went wrong."
                })
        }
})
app.listen(3000);
