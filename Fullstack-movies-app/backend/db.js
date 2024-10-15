const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    image: String,
    rate: Number
})

const movie = mongoose.model("movies", movieSchema);

module.exports = {
    movie: movie
}