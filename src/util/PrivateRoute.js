import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalState } from './useLocalStorage';

const PrivateRoute = ({children}) => {
    const [auth, setAuth] = useLocalState("", "authToken");
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;