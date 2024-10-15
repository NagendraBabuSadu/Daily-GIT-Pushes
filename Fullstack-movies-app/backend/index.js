const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { createMovie, updateMovie } = require("./types");
const { movie } = require("./db");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const mongoUrl = process.env.MONGO_URL;
const db = (mongoUrl);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Couldnot connect to mongoDb", err));


const PORT = 3000;

app.use(express.json());


app.post("/movies", async function (req, res) {
    const title = req.body.title;
    const year = req.body.year;
    const image = req.body.image;
    const rate = req.body.rate;

    const parsedPayload = createMovie.safeParse({
        title, year, image, rate
    })

    if (!parsedPayload.success) {
        console.log("failed here")
        console.log(parsedPayload.error)
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }

    await movie.create({
        title, year, image, rate
    })

    res.status(200).json({
        msg: "Created a movie"
    })

})


app.get("/movies", async function (req, res) {
    try {

        const movies = await movie.find({});
        console.log(movies)
        res.status(200).json({
            movies: movies,
            msg: "Movies returned successfully."
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
})


app.put("/movie/:name", async function (req, res) {
    const name = req.params.name;
    const {title, year, rate} = req.body;

    const parsedPayload = updateMovie.safeParse({
        title : req.body.title,
        year: req.body.year,
        rate: req.body.rate
    })

    console.log(parsedPayload.data);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return
    }


    try {

        const existingMovie = await movie.findOne({ title: name });
        if (!existingMovie) {
            res.status(404).json({
                msg: "Movie not found"
            });
            return;
        }


        const result = await movie.updateOne(
            { title: name },
            { $set: {title, year, rate} }
        );

        if (result.nModified === 0) {
            res.status(404).json({
                msg: "Movie not found"
            })
            return;
        }

        res.status(200).json({
            msg: "Movie updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
})

app.listen(PORT, console.log("Server is running at port 3000"))