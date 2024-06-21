import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Error = () => {
	return (
		<div className="error">
			<h2>Uh oh! Page Not Found ☹️</h2>
			<img src="https://media1.tenor.com/m/qBbREqnOqtkAAAAC/fatal-error-turn-it-off.gif" />
			<Link to={"/"}>
				<Button variant="primary">Go Home?</Button>
			</Link>
		</div>
	);
};
