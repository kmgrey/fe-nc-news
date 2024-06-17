import React from 'react';
import { NavBar } from './NavBar';

export const Header = () => {
	return (
		<header>
			<div>
				<h1>Northcoders News</h1>
				<p>Hello, User!</p>
			</div>
			<NavBar />
		</header>
	);
};
