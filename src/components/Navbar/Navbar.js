import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Brand from './Brand';
import CategorySelect from './CategorySelect';
import NavButton from './NavButton';
import ProfileInfo from './ProfileInfo';
import SearchBar from './SearchBar';

const Navbar = ({ searchShow, mobileMenu }) => {
    const [mobileNav, setMobileNav] = useState(false);
    const { newUser } = useAuth();

    //handle click 
    // const handleClick = () => {
    //     setMobileNav(!mobileNav);
    //     // setTabletNav(!tabletNav)
    // };

    //menus 
    const menus = [
        { id: 1, name: 'Free Shipping', link: '/free' },
        { id: 2, name: 'Drone Service', link: '/droneservice' },
        { id: 3, name: 'Global Purchase', link: '/globalpurchase' },
        { id: 4, name: 'Automative', link: '/automative' },
    ];

    //tablet mode 
    const changeNav = () => {
        if (window.innerWidth < 1225) {
            setMobileNav(true);
        } else {
            setMobileNav(false);

        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', changeNav);
    }, [])

    return (
        <>
            <header className="bg-white border-b border-gray-200">
                {/* desktop nav  */}
                <nav className="flex items-center max-w-screen-2xl mx-auto px-6 py-3">
                    <div className="flex flex-grow justify-around items-center space-x-6">
                        {/* brand  */}
                        {searchShow ? (
                            <SearchBar searchShow={searchShow} />
                        ) : (
                            <Brand />
                        )}


                        {/* category  */}
                        {!mobileMenu && (
                            <div className="hidden md:flex lg:flex">
                                <CategorySelect />
                            </div>
                        )}


                        {/* search bar  */}
                        {!mobileMenu && (
                            <div className="hidden md:flex lg:flex space-x-3">
                                <SearchBar />
                            </div>
                        )}


                        {/* some links  */}
                        {!mobileMenu && (
                            <ul className='hidden items-center space-x-4 xl:flex lg:flex pr-5'>
                                {menus?.map(item => {
                                    return (
                                        <Link to={item?.link} key={item?.id}>
                                            {mobileNav ? (
                                                <>
                                                    <li className='text-gray-600 md:text-xs lg:text-xs xl:text-sm font-semibold' style={{ fontSize: '9px' }}>{item?.name}</li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className='text-gray-600 md:text-xs lg:text-xs xl:text-sm font-semibold' style={{ fontSize: '12px' }}>{item?.name}</li>
                                                </>
                                            )}

                                        </Link>
                                    );
                                })}
                            </ul>
                        )}

                    </div>

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


                    {/* {!hideNav ? (
                    <>
                        <div className="block  lg:hidden">
                            <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110 hover:bg-primary hover:text-white" onClick={handleClick} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="block md:hidden lg:hidden">
                            <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110 hover:bg-primary hover:text-white" onClick={handleClick} />
                        </div>
                    </>
                )} */}

                </nav>

                {/* mobile nav  */}
                {/* {mobileNav && (
                    <Fade> */}
                {/* <nav className="bg-white shadow-lg mx-6 mt-2 rounded-br-lg rounded-bl-lg  py-6 block md:hidden lg:hidden"> */}

                {/* category  */}
                {/* <div className='flex justify-center pb-2'>
                                <CategorySelect />
                            </div> */}

                {/* search bar  */}
                {/* <div className=" flex justify-center">
                                <SearchBar />
                            </div> */}
                {/* {!newUser.email && (
                            <>
                                {/* button  */}
                {/* <div className="px-3 py-2 flex justify-center">
                                    <NavButton />
                                </div>
                            </> */}
                {/* )} */}

                {/* menus  */}
                {/* <ul className='flex flex-col space-y-2 px-6 py-2 box-border'>
                            {menus?.map(item => {
                                return (
                                    <Link to={item?.link} key={item?.id}>
                                        <li className='text-gray-600 md:text-sm lg:text-sm xl:text-base font-semibold hover:bg-gray-100 w-full py-2 px-3 rounded-lg'>{item?.name}</li>
                                    </Link>
                                );
                            })}
                        </ul>  */}
                {/* </nav> */}
                {/* </Fade>
                )} */}


            </header>

            {/* category  */}
            {mobileMenu && (
                <>
                    <div className="bg-white border-b border-gray-200">
                        <div className='flex items-center justify-center px-6 py-3'>
                            <CategorySelect mobileMenu={mobileMenu}/>
                        </div>
                    </div>
                </>
            )}

        </>
    );
};

export default Navbar;