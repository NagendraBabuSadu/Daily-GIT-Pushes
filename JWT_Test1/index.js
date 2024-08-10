const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

dotenv.config();

const PORT = 3000;

app.listen(PORT, () => {
        console.log("Server listening at port " + PORT);
});

app.post("/user/generateToken", function (req, res) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
                time: Date(),
                userId: 12
        }

        const token = jwt.sign(data, jwtSecretKey);
        res.send(token);
})


app.get("/user/validateToken", function (req, res) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;

        try {
                const token = req.headers(tokenHeaderKey);
                const verified = jwt.verify(token, jwtSecretKey);

                if (verified) {
                        res.send("successfully verified");
                } else {
                        return res.status(401).send(error)
                }
        } catch (error) {
                return res.status(411).send(error);
        }
})


