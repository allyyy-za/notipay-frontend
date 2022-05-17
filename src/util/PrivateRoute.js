import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const auth = localStorage.getItem("authToken");
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;