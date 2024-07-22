import React, { useContext } from 'react';
import { InfoContext } from '../contexts/InfoContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(InfoContext);
    if (!user) {
        return <Navigate to="/tenzies-game/login" />;
    }
    return children;
};

export default ProtectedRoute;
