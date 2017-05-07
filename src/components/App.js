import React from 'react'
import NavLink from './Navlink'

export default class App extends React.Component {

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
