import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { GoKey } from 'react-icons/go';
import { Link } from "react-router-dom";

const NavButton = () => {
    return (
        <div className="flex items-center space-x-3">
            {/* log in  */}
            <Link to="/login">
                <button className="bg-primary ring-blue-200 ring-offset-2 px-2 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-blue-500 text-sm flex items-center justify-center space-x-1">
                    <BiLogIn  />
                    <span>Log In</span>
                </button>
            </Link>
            {/* sign up */}
            <Link to="/signup">
            <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-2 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700  text-sm flex items-center justify-center space-x-1">
                <GoKey  />
                <span>Sign Up</span>
            </button>
            </Link>
        </div>
    )
}

export default NavButton
