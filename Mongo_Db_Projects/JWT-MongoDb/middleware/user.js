const jwt = require("jsonwebtoken");
const config = require("../config");
const { JWT_SECRET } = config;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        console.log("userMiddleware");
        // Implement admin auth logic
        // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
        const token = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        console.log(decodedValue.username);
        
        if (decodedValue.username) {
            req.username = decodedValue.username;
            next();
        } else {
            console.log(decodedValue.username);
            res.status(403).json({                 
                msg: "You are not authenticated!"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({
            msg: "Something's wrong!"
        })
    }
    
}

module.exports = userMiddleware;