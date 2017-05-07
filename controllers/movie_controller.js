const express = require('express')
const router  = express.Router()
// Requiring our Movie model
const Movie = require("../models/Movie.js")
const mongoose = require("mongoose")

// This will add a new movie to the database
router.post("/add", (req, res) => {
    Movie.create({
      title: req.body.Title,
      genre: req.body.Genre,
      actors: req.body.Actors,
      year: req.body.Year,
      rating: req.body.Rating
    })
    .then(user => {
      res.send(user)
    })
    .catch(err =>{
      console.log(err)
    })
})

module.exports = router
