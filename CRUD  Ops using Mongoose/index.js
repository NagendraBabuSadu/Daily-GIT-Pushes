const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const api = require('./api');
const port = 3000;

app.use(express.json());
app.listen(port, function() {
        console.log("Server is listening at Port: " + port)
});

app.use(bodyParser.urlencoded({ extended : true}));
app.use('/api', api);






