import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <button>Google</button>
            <br /><br />

            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;