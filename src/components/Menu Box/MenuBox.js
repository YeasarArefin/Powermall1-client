import React from 'react';
import { FcGlobe, FcPhoneAndroid, FcRating, FcServices, FcShipped } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MenuBox = () => {
    const menus = [
        { id: 1, name: 'Single Puchase', link: '/singlepurchase', icon: <FcRating className='text-3xl' /> },
        { id: 10, name: 'Free Shipping', link: '/free', icon: <FcShipped className='text-3xl' /> },
        { id: 2, name: 'Drone Service', link: '/droneservice', icon: <FcServices className='text-3xl ' /> },
        { id: 3, name: 'Global Purchase', link: '/globalpurchase', icon: <FcGlobe className='text-3xl ' /> },
        { id: 4, name: 'Mobile', link: '/mobile', icon: <FcPhoneAndroid className='text-3xl ' /> },
    ]

    return (
        <div className='mt-3'>
            <h1 className="text-gray-700 text-left py-4 capitalize text-xl font-semibold ">Special Categories</h1>
            <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 place-content-center gap-x-3 gap-y-3 md:gap-y-3 lg:gap-x-4'>
                {menus?.map(item => (
                    <Link key={item?.id} to={item?.link}>
                        <div className='flex flex-col  lg:flex-row items-center lg:space-x-2  bg-white rounded-lg space-y-2 lg:space-y-0 h-32  lg:h-auto justify-center lg:justify-start overflow-hidden px-2 md:px-0 lg:px-0'>
                            <div className='bg-none md:bg-none lg:bg-gray-200 flex flex-col justify-center items-center lg:py-3 lg:px-5'>
                                {item?.icon}
                            </div>

                            <p className='text-gray-700 text-center  lg:text-left text-xs  lg:text-sm'>{item?.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {/* <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 place-content-center gap-x-3 gap-y-3 md:gap-y-3 lg:gap-x-4'>
                {menus?.map(item => (
                    <Link key={item?.id} to={item?.link}>
                        <div className='flex flex-col  lg:flex-row items-center lg:space-x-2  bg-white rounded-lg px-4 py-4 space-y-2 lg:space-y-0 h-32  lg:h-auto justify-between  lg:justify-center'>
                            <div className='bg-gray-200 w-12 h-12 flex flex-col justify-center items-center rounded-full'>
                                {item?.icon}
                            </div>

                            <p className='text-gray-700 text-center  lg:text-left text-xs  lg:text-base'>{item?.name}</p>
                        </div>
                    </Link>
                ))}
            </div> */}
        </div>
    );
};

export default MenuBox;
