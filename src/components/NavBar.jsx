import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const NavBar = () => {
	return (
		<nav>
			<ul>
				<Link to="/">Home</Link>
				<li>Topics</li>
				<Link to="/users">Users</Link>
			</ul>
		</nav>
	);
};
