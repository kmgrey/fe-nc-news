import React, { useContext, useEffect } from 'react';
import { fetchUsers } from '../api';
import { UserContext } from '../contexts/UserContext';

export const Users = () => {
    const { users, setUsers, changeCurrentUser } = useContext(UserContext);

    useEffect(() => {
        fetchUsers()
            .then((usersFromApi) => {
                setUsers(usersFromApi);
            })
            .catch((error) => {
                console.error('Error fetching users :(', error);
            });
    }, [setUsers]);

    return (
        <section>
            <h2>Users</h2>
            <ul className="user-card-container">
                {users.map((user, index) => (
                    <li className="user-card" key={index} onClick={() => changeCurrentUser(user)}>
                        <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
                        <p>{user.username}</p>
                        <p>{user.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
