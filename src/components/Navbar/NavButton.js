import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { GoKey } from 'react-icons/go';

const NavButton = () => {
    return (
        <div className="flex items-center space-x-3">
            <button className="bg-primary ring-blue-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-blue-500 w-28 uppercase text-sm flex items-center space-x-2">
                <BiLogIn className="text-lg" />
                <span>Log In</span>
            </button>
            <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-3 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700 w-28 uppercase text-sm flex items-center space-x-2">
                <GoKey className="text-lg" />
                <span>Sign Up</span>
                </button>
        </div>
    )
}

export default NavButton
