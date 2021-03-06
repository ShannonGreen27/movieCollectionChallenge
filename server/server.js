// Dependencies
const bodyParser = require("body-parser")
const express = require("express")
const logger = require('morgan')
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const passport = require('passport')
// require("./passport")
const path = require('path')
const session = require("express-session")

// webpack setup for an existing server
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpack = require("webpack")
const webpackConfig = require("../webpack.config.js")
const compiler = webpack(webpackConfig)

// Mongoose mpromise deprecated - use bluebird for promises
const Promise = require("bluebird")
mongoose.Promise = Promise

//model controllers
const movie_controller = require('../controllers/movie_controller')

// Express settings
// ================
// instantiatize express
const app = express()

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	hot: true,
	stats: 'errors-only',
	compress: true
}))
app.use(webpackHotMiddleware(compiler))

// view engine setup
// app.set('views', path.join(__dirname, 'views'));

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))
	.use(logger("dev"))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.text())
	.use(bodyParser.json({ type: "application/vnd.api+json" }))
	.use(session({
		secret: "blame Canada", 
		resave: false, 
		saveUninitialized: false}))
	.use(passport.initialize())
	.use(passport.session())

// Serve static content for the app from the "dist" directory in the application directory.
app.use(express.static(path.join(__dirname, 'dist')))

// // what to send based on route
app.use('/movie', movie_controller)

// Database configuration with mongoose. Uses local database when not in production
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieDB")
const db = mongoose.connection

// Show any mongoose errors
db.on("error", (error)=> console.log(`Mongoose Error: ${error}`))

// Once logged in to the db through mongoose, log a success message
db.once("open", ()=> console.log(`Mongoose connection successful.`))

// use port 3000 for development, otherwise use any available port during production
const port = process.env.PORT || 3000

// listen on port 3000 when local
app.listen(port, ()=> console.log(`Listening on port ${port}`))
