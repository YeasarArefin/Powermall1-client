import React from 'react';
import useAuth from '../../hooks/useAuth';
import Brand from './Brand';
import CategorySelect2 from './CategorySelect2';
import NavButton from './NavButton';
import ProfileInfo from './ProfileInfo';
import SearchBar from './SearchBar';

const Navbar = ({ searchShow, mobileMenu, setSearchShow }) => {
    const { newUser } = useAuth();

    return (
        <>
            <header className="bg-white border-b border-gray-200 z-50">
                {/* desktop nav  */}
                <nav className="flex items-center max-w-screen-2xl mx-auto px-6 py-3">
                    <div className="flex flex-grow space-x-7 items-center justify-center lg:justify-start">
                        {/* brand  */}
                        {searchShow ? (
                            <div className='flex flex-col items-center justify-center space-y-4'>
                                <Brand />
                              <SearchBar searchShow={searchShow} />
                            </div>
                        ) : (
                                <div className='flex items-center  '>
                                    <Brand />
                                </div>
                        )}


                        {/* category  */}
                        {!mobileMenu && (
                            <div className="hidden md:flex lg:flex">
                                <CategorySelect2 />
                            </div>
                        )}

                    </div>

                    <div className="flex items-center space-x-3">
                        {/* search bar  */}
                        {!mobileMenu && (
                            <div className="hidden md:flex lg:flex ">
                                <SearchBar />
                            </div>
                        )}

                        {newUser.email ? (
                            <div className="hidden md:block lg:block">
                                {!mobileMenu && <ProfileInfo />}

                            </div>
                        ) : (
                            <>
                                <div className="hidden md:flex lg:flex space-x-3">
                                    {!mobileMenu && <NavButton />}
                                </div>
                            </>
                        )}
                    </div>
                    

                </nav>
            </header>

        </>
    );
};

export default Navbar;