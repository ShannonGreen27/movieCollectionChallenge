// Require mongoose
const mongoose = require("mongoose")
// Create a schema class
const Schema = mongoose.Schema

// Create the Movie schema
var MovieSchema = new Schema({
  // Just a string
  Title: {
    type: String,
    required: true
  },
  Genre: {
    type: String,
    required: true,
  },
  Actors: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true
  },
  Rating: {
    type: String,
    required: true
  },
  Poster: {
    type: String
  }
})

// Remember, Mongoose will automatically save the ObjectIds of the comments

// Create the Moviemodel with the MovieSchema
const Movie = mongoose.model("Movie", MovieSchema);

// Export the Movie model
module.exports = Movie
