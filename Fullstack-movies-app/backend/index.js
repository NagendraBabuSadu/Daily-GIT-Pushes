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


app.put("/movies/:name", async function (req, res) {
    const name = req.params.name.trim();
    const { title, year, rate, image } = req.body;

    // zod validation - input validation
    const parsedPayload = updateMovie.safeParse({
        title,
        year,
        rate,
        image
    });
    console.log(parsedPayload, "parsedPayload");

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    }

    // database operation
    try {
        const existingMovie = await movie.findOne({ title: name });
        console.log(existingMovie, "existingMovie");
        if (!existingMovie) {
            res.status(404).json({
                msg: "Movie not found"
            });
            return;
        }

        
        const result = await movie.updateOne(
            { title: name },
            { $set: {title, year, rate, image} }
        );
        console.log(result, "result");

        if (result.nModified === 0) {
            res.status(404).json({
                msg: "Movie not found"
            });
            return;
        }

        res.status(200).json({            
            msg: "Movie updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }
});


app.delete("/movies/:name", async function (req, res) {
    const name = req.params.name.trim();

    try {
        const existingMovie = await movie.findOne({
            title: name
        }, '_id title year');
        // console.log(existingMovie);
        if (!existingMovie) {
            res.status(404).json({
                msg: "Movie not found"
            });
            return;
        }

        console.log(existingMovie._id);

        await movie.deleteOne({ _id: existingMovie._id });


        res.status(200).json({
            msg: "Movie deleted successfully",
            movieDetails: {
                title: existingMovie.title,
                year: existingMovie.year
            }
        })
    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, console.log("Server is running at port 3000"))