import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Dropdown from './Dropdown';

const ProfileInfo = () => {
    const { newUser, signOutUser} = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        signOutUser()
        navigate('/login')
    }

    return (
        <div className='flex items-center space-x-3'>
            <img className='w-8 h-8 rounded-full object-cover' alt={newUser.name} src={newUser.image} />
            <div className='flex flex-col'>
                <span className='text-gray-700'>{newUser.name}</span>
                <span className='text-gray-500 text-sm'>{newUser.email}</span>
            </div>

            {/* menus  */}
            <Dropdown handleLogout={handleLogout} />
        </div>
    )
}

export default ProfileInfo
