// Libs
import React from 'react'
import { render } from 'react-dom'

// CSS
import './css/app.scss'

// Routes
import routes from './config/routes'

// Render
render(
	routes, 
	document.getElementById("app")
)
