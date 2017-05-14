// Libs
import React from 'react'

// Components
import NavLink from './App/Navlink'

export default class App extends React.Component {

	// renders links to the components inside this 'container' with children props 
	render() {
		return (
			<div className='container'>
				<header>
					<ul className="nav nav-tabs">
						<li><NavLink to='/'>Your Library</NavLink></li>
						<li><NavLink to='/addMovie'>Add Movie</NavLink></li>
					</ul>
				</header>
				{this.props.children}
			</div>
		)
	}
}
