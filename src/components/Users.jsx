import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Users = () => {
	const { users, currentUser, changeCurrentUser } = useContext(UserContext);

	return (
		<section className="user-section">
			<h2>Users</h2>
			{currentUser && (
				<div className="current-user">
					<h3>Current User:</h3>
					<img
						src={currentUser.avatar_url}
						alt={`${currentUser.username}'s avatar`}
					/>
					<p>Username: {currentUser.username}</p>
					<p>Name: {currentUser.name}</p>
				</div>
			)}
			<ul className="user-card-container">
				{users.map((user, index) => (
					<li
						className="user-card"
						key={index}
						onClick={() => changeCurrentUser(user)}
					>
						<img
							src={user.avatar_url}
							alt={`${user.username}'s avatar`}
						/>
						<p>{user.username}</p>
						<p>{user.name}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
