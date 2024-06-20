import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { fetchTopics } from "../api";

export const NavBar = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		fetchTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi);
		});
	}, []);

	return (
		<nav>
			<ul>
				<Link to="/">Home</Link>
				<DropdownButton id="dropdown-basic-button" title="Topics">
					{topics.map((topic, index) => (
						<Dropdown.Item
							as={Link}
							to={`/articles?topic=${topic.slug}`}
							key={index}
						>
							{topic.slug}
						</Dropdown.Item>
					))}
				</DropdownButton>
				<Link to="/users">Users</Link>
			</ul>
		</nav>
	);
};
