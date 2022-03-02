import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) { return (
        <div className='flex flex-col h-screen w-full justify-center items-center space-y-6'>
            <FadeLoader color="#F59E0B" loading={isLoading} size={50} />
        </div>
    ) }

    return user?.email ? children : <Navigate to="/login" state={{ from: location }} />;


}

export default PrivateRoute
