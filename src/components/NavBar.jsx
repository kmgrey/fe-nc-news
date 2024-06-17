import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Topics</li>
                <li>Users</li>
            </ul>
        </nav>
    )
}