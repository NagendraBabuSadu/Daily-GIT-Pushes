// Schema: Schema is a representation of the structure of the data. It allows us to decide exactly what data we want, and what options we want the data to have as an object.

const mongoose = require("mongoose");

// A schema named “StudentSchema” is created that accepts the fields Id, Name, Roll, Birthday, and Address.
// Models basically provide a list of predefined methods that are used to manipulate the data for inserting, updating, deleting, and retrieving from the database collection.

const studentSchema = new mongoose.Schema({
        StudentId: Number,
        Name: String, 
        Roll: Number, 
        Birthday: String, 
        Address: String
})

// module.exports: This is a Node.js feature that allows you to export a module so that it can be imported and used in other files. In this case, you are exporting a Mongoose model.
// Creates a Mongoose model called "student".
// Uses the schema defined in studentSchema.
// Maps this model to the MongoDB collection explicitly named 'Students'

module.exports = mongoose.model("student", studentSchema, 'Students');