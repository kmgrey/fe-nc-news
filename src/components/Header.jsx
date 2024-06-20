import React, { useContext } from 'react';
import { NavBar } from './NavBar';
import { UserContext } from '../contexts/UserContext';

export const Header = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <header>
            <div>
                <h1>Northcoders News</h1>
                <p>Hello {currentUser ? currentUser.username : 'there'}!</p>
            </div>
            <NavBar />
        </header>
    );
};
