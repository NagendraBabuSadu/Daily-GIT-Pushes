const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

// Connecting mongoose - MongoDb
mongoose.connect(
        "mongodb+srv://nagendrababusadu:yYIfOmXS5mtVt7xQ@cluster0.qjndx4s.mongodb.net/userappnew",
);


// Creating User schema, and connecting to the 'users' collection.
const User = mongoose.model("Users12", {
        name: String,
        username: String,
        password: String
})


app.post("/signup", async function (req, res) {
        const { name, username, password } = req.body;

        // if user exists then, find one from the User collection by comparing with the username
        const userExists = await User.findOne({ username: username });
        if (userExists) {
                return res.status(400).send("User already exists");
        } else {
                // user doesn't exist, create a new user by the User model.
                const user = new User({
                        name: name,
                        username: username,
                        password: password,
                        fullname: fullname
                });

                // save the user
                user.save();

                console.log(user)
                // show the output as status 200, with a clear message.
                res.status(200).send("User created successfully");
        }
});

// get method for the user to get back with the username and password
app.get("/users", async function (req, res){
        try{
                // pass the username in the headers
                const username = req.headers.username;

                // find one user with the username-header
                const user = await User.findOne({username: username})
                console.log(user);
                // return or show the user details
                res.json({
                        user_details : user
                })
        } catch{
                res.status(411).send("Something bad happened.");
        } 
});

app.listen(3000);
