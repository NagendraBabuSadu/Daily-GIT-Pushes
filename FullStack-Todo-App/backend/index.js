// write express boilerplate code, with express.json() middleware
const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const { createTodo } = require("./types");
const { todo } = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const mongoUrl = process.env.MONGO_URL;
const db = (mongoUrl);
mongoose.connect(db);
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// body = {title: String, description: String}
app.post("/todo", async function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const parsedPayload = createTodo.safeParse({
        title, description
    });

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    // Put it in mongoDb
    await todo.create({
        title, description,
    })

    res.status(200).json({
        msg: "Created a todo"
    })

})


app.get("/todos", async function (req, res) {

    const todos = await todo.find({});
    res.status(200).json({
        Todos: todos,
        msg: "Todos returned successully."
    })
})


app.put("/completed", async function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const parsedPayload = createTodo.safeParse({
        title, description
    });

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }

    console.log(req.body);
    // update a todo
    await todo.updateOne({
        _id: req.body._id
    }, {
        completed: true
    })
    .then(() => console.log("Updated successfully."))

  
    res.status(200).json({
        msg: "Todo marked as done."
    })
})


app.listen(PORT, console.log("Port is listening at 3000"));