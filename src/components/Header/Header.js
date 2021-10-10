import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = { backgroundColor: "teal" }
    return (
        <div className="container header">
            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/register">Register</NavLink>
            <NavLink activeStyle={activeStyle} to="/login">Login</NavLink>
            <button>Log Out</button>
            <hr />
        </div>
    );
};

export default Header;