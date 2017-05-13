const express = require('express')
const router  = express.Router()
// Requiring our Movie model
const Movie = require("../models/Movie.js")
const mongoose = require("mongoose")

// This will populate the diary with all the movies added by the user
router.get("/", (req, res) => {
  // Grab every doc in the Movie array
  Movie.find({})
  .exec((err, result) => {
    // Log any errors
    if (err) {
      console.log(err)
    } else {
      // result is passed to axios
      res.send(result) 
    }
  })
})

// This will add a new movie to the database
.post("/add", (req, res) => {
    Movie.create({
      Title: req.body.Title,
      Genre: req.body.Genre,
      Actors: req.body.Actors,
      Year: req.body.Year,
      Rating: req.body.Rating,
      Poster: req.body.Poster
    })
    .then(result => {
      // result is passed to axios
      res.send(true)
    })
    .catch(err =>{
      console.log(err)
    })
})

// This will update a movie in the database
.put("/update", (req, res) => {
  Movie.update({ _id: req.body._id}, { $set: {
    Title: req.body.Title,
    Genre: req.body.Genre,
    Actors: req.body.Actors,
    Year: req.body.Year,
    Rating: req.body.Rating
  }}, ()=> {
    Movie.find({})
    .exec((error, result) => {
      // Log any errors
      if (error) {
        console.log(err)
      } else {
        // result is passed to axios
        res.send(result) 
      }
    })
  })
})

// This will delete a movie from the database by its id
.delete("/delete/:id", (req, res) => {
  // Use the movie id to find and delete it
  Movie.remove({ "_id": req.params.id }, (err)=> {
    // Log any errors
    if (err) {
      console.log(err)
    } else {
      // Grab every doc in the Movie array
      Movie.find({})
      .exec((error, result) => {
        // Log any errors
        if (error) {
          console.log(error)
        } else {
          // result is passed to axios
          res.send(result)
        }
      })
    }
  })
})

module.exports = router
