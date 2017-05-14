// Libs
import React from 'react'
import { Link } from 'react-router'

// Allows the active component to gain the 'active' class name.
const NavLink = props => (
	<Link {...props} activeClassName='active'/>
)

export default NavLink