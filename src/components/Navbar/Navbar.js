import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Brand from './Brand';
import CategorySelect from './CategorySelect';
import NavButton from './NavButton';
import ProfileInfo from './ProfileInfo';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const { newUser } = useAuth();

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }

    //menus 
    const menus = [
        { id: 1, name: 'Free Shipping', link: '/shops' },
        { id: 2, name: 'Drone Service', link: '/' },
        { id: 3, name: 'Global Purchase', link: '/' },
        { id: 4, name: 'Contact', link: '/contact' },
    ]

    return (
        <header className="bg-white">
            {/* desktop nav  */}
            <nav className="flex items-center max-w-screen-2xl mx-auto px-6 py-3">
                <div className="flex flex-grow items-center space-x-6">
                    {/* brand  */}
                    <Brand />

                    {/* category  */}
                    <div className="hidden md:flex lg:flex">
                        <CategorySelect />
                    </div>

                    {/* search bar  */}
                    <div className="hidden md:flex lg:flex space-x-3">
                        <SearchBar />
                    </div>

                    {/* some links  */}
                    <ul className='hidden items-center space-x-4  lg:flex'>
                        {menus?.map(item => {
                            return (
                                <Link to={item?.link} key={item?.id}>
                                    <li className='text-gray-600 md:text-sm lg:text-sm xl:text-base font-semibold'>{item?.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>

                {newUser.email ? (
                    <>
                        <ProfileInfo />
                    </>
                ) : (
                    <>
                        <div className="hidden md:flex lg:flex space-x-3">
                            <NavButton />
                        </div>
                    </>
                )}


                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110 hover:bg-primary hover:text-white" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 rounded-br-lg rounded-bl-lg  py-6 block md:hidden lg:hidden">
                        
                        {/* category  */}
                        <div className='flex justify-center pb-2'>
                            <CategorySelect />
                        </div>

                        {/* search bar  */}
                        <div className=" flex justify-center">
                            <SearchBar />
                        </div>
                        {!newUser.email && (
                            <>
                                {/* button  */}
                                <div className="px-3 py-2 flex justify-center">
                                    <NavButton />
                                </div>
                            </>
                        )}

                        {/* menus  */}
                        <ul className='flex flex-col space-y-2 px-6 py-2 box-border'>
                            {menus?.map(item => {
                                return (
                                    <Link to={item?.link} key={item?.id}>
                                        <li className='text-gray-600 md:text-sm lg:text-sm xl:text-base font-semibold hover:bg-gray-100 w-full py-2 px-3 rounded-lg'>{item?.name}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </nav>
                </Fade>
            )}
        </header>
    )
}

export default Navbar