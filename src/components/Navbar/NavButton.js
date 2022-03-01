import React from 'react';
// import { BiLogIn } from 'react-icons/bi';
// import { GoKey } from 'react-icons/go';
import { Link } from "react-router-dom";

const NavButton = () => {
    return (
        <div className="flex items-center space-x-3">
            {/* log in  */}
            <Link to="/login">
                <button className="bg-primary ring-red-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-red-700 text-xs md:text-xs  lg:text-sm flex items-center justify-center space-x-1">
                    {/* <BiLogIn   /> */}
                    <span>Log In</span>
                </button>
            </Link>
            {/* sign up */}
            <Link to="/signup">
                <button className="bg-primary ring-red-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-red-700  text-xs md:text-xs  lg:text-sm flex items-center justify-center space-x-1">
                {/* <GoKey  /> */}
                <span>Sign Up</span>
            </button>
            </Link>
        </div>
    )
}

export default NavButton
