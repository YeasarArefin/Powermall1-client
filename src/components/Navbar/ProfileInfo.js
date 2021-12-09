import React from 'react';
import Avatar from 'react-avatar';
import { FaSignOutAlt } from 'react-icons/fa';
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
            {user.photoURL ? <img className='w-8 h-8 rounded-full object-contain' alt={user.displayName} src={user.photoURL} /> : <Avatar size='40' name={user.displayName} round={true} />} 
            <div className='flex flex-col'>
                <span className='text-gray-700'>{user.displayName}</span>
                <span className='text-gray-500 text-sm'>{user.email}</span>
            </div>
            <FaSignOutAlt className='text-gray-600 text-xl cursor-pointer' onClick={handleLogout} />
        </div>
    )
}

export default ProfileInfo
