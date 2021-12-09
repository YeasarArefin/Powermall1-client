import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Slide from 'react-reveal/Slide';
import NavButton from './NavButton';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <header className="bg-white">
            {/* desktop nav  */}
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                <div className="flex-grow flex items-center space-x-8">
                    {/* brand  */}
                    <div className="flex items-center space-x-2">
                        <img src="../../../assets/logo.png" alt="logo" className="object-contain w-36 cursor-pointer" />
                    </div>

                    {/* search bar  */}
                    <div className="hidden md:flex lg:flex space-x-3">
                        <SearchBar />
                    </div>
                </div>

                <div className="hidden md:flex lg:flex space-x-3">
                    <NavButton />
                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110 hover:bg-primary hover:text-white" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Slide bottom>
                    <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-6 block md:hidden lg:hidden">
                        {/* search bar  */}
                        <div className=" flex justify-center">
                            <SearchBar />
                        </div>
                        {/* button  */}
                        <div className="px-3 py-2 flex justify-center">
                            <NavButton />
                        </div>
                    </nav>
                </Slide>
            )}
        </header>
    )
}

export default Navbar