import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    const activeStyle = { backgroundColor: "teal" }
    return (
        <div className="container header">
            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/register">Register</NavLink>
            <NavLink activeStyle={activeStyle} to="/login">Login</NavLink>
            {user?.email && <button onClick={logOut}>Log Out</button>}
            <span>   {user.displayName}</span>
            <hr />
        </div>
    );
};

export default Header;