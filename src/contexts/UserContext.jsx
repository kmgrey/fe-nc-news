import React, { createContext, useState, useEffect } from "react";
import { fetchUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		fetchUsers()
			.then((usersFromApi) => {
				setUsers(usersFromApi);
			})
			.catch((error) => {
				console.error("Error fetching users :(", error);
			});
	}, []);

	const changeCurrentUser = (user) => {
		setCurrentUser(user);
	};

	return (
		<UserContext.Provider value={{ users, currentUser, changeCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};
