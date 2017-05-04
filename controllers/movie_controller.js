const express = require('express')
const router  = express.Router()
// Requiring our Movie model
const Movie = require("../models/Movie.js")
const mongoose = require("mongoose")

// This will add a new movie to the database
router.get("/add", (req, res) => {
  console.log(res)
    // Movie.create({
    //   title: req,
    //   genre: ,      
    //   actors: ,
    //   year: ,
    //   rating:
    // })
    // .then(user => {

    // })
})

module.exports = router
