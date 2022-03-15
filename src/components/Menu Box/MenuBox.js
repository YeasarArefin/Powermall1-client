import React from 'react';
import { Link } from 'react-router-dom';

const MenuBox = () => {
    const menus = [
        { id: 1, name: 'Single Puchase', link: '/singlepurchase', img: "../../../assets/icons/5.jpg" },
        { id: 10, name: 'Free Shipping', link: '/free', img: "../../../assets/icons/2.jpg" },
        { id: 3, name: 'Global Purchase', link: '/globalpurchase', img: "../../../assets/icons/3.jpg" },
        { id: 2, name: 'Drone Service', link: '/droneservice', img: "../../../assets/icons/1.jpg" },
        { id: 4, name: 'Mobile', link: '/mobile', img: "../../../assets/icons/4.jpg" },
    ]

   

    return (
        <div className='mt-3'>
            <h1 className="text-gray-700 text-left py-4 capitalize text-xl font-semibold ">Special Categories</h1>
            <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 place-content-center gap-x-3 gap-y-3 md:gap-y-3 lg:gap-x-4'>
                {menus?.map(item => (
                    <Link key={item?.id} to={item?.link}>
                        <div className='flex flex-col  lg:flex-row items-center lg:space-x-2  bg-white rounded-md space-y-2 lg:space-y-0 h-28  lg:h-auto justify-start lg:justify-start overflow-hidden px-2 md:px-0 lg:px-0'>
                            <div className='bg-none md:bg-none h-14  flex flex-col justify-center items-center'>
                                <img className="w-14 object-contain" src={item?.img} alt={item?.name} />
                            </div>

                            <p className='text-gray-700 text-center  lg:text-left categoryTitle' >{item?.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MenuBox;
