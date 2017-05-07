// Libs
import React from 'react'
import { Route, Router, hashHistory } from 'react-router'

// Components
import App from '../components/App'
import Diary from '../components/Diary'
import addMovie from '../components/addMovie'

// Routes
const routes = (
	<Router history = {hashHistory}>
		<Route component={App}>
			<Route path='/' component={Diary} />
			<Route path='/addMovie' component={addMovie} />
		</Route>
	</Router>
)

export default routes
