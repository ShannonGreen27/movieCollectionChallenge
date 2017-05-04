// Require mongoose
const mongoose = require("mongoose")
// Create a schema class
const Schema = mongoose.Schema

// Create the Movie schema
var MovieSchema = new Schema({
  // Just a string
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  poster: {
    type: String
  }
})

// Remember, Mongoose will automatically save the ObjectIds of the comments

// Create the Moviemodel with the MovieSchema
const Movie = mongoose.model("Movie", MovieSchema);

// Export the Movie model
module.exports = Movie
