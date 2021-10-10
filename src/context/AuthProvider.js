import React, { createContext } from 'react';

const AuthContext = createContext();
const AuthProvider = (props) => {
    const { children } = props;
    return (
        <AuthContext.Provider value="dynamic">
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;