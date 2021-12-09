import React from 'react';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProfileInfo = () => {
    const { user, signOutUser} = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        signOutUser()
        navigate('/login')
    }
    return (
        <div className='flex items-center space-x-3'>
            <FaUserCircle className='text-gray-600 text-2xl' />
            <div className='flex flex-col'>
                <span className='text-gray-700'>{user.displayName}</span>
                <span className='text-gray-500 text-sm'>{user.email}</span>
            </div>
            <FaSignOutAlt className='text-gray-600 text-xl cursor-pointer' onClick={handleLogout} />
        </div>
    )
}

export default ProfileInfo
