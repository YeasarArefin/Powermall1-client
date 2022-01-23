import React from 'react';
import { FcAutomotive, FcGlobe, FcServices, FcShipped } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MenuBox = () => {
    const menus = [
        { id: 1, name: 'Free Shipping', link: '/free', icon: <FcShipped className='text-2xl' /> },
        { id: 2, name: 'Drone Service', link: '/droneservice', icon: <FcServices className='text-2xl ' /> },
        { id: 3, name: 'Global Purchase', link: '/globalpurchase', icon: <FcGlobe className='text-2xl ' /> },
        { id: 4, name: 'Automative', link: '/automative', icon: <FcAutomotive className='text-2xl ' /> },
    ]

  return (
      <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 place-content-center gap-x-3 gap-y-3 md:gap-y-3 lg:gap-x-4 mt-10'>
          {menus?.map(item => (
              <Link key={item?.id} to={item?.link}>
                  <div className='flex flex-col  lg:flex-row items-center lg:space-x-2  bg-white rounded-lg px-4 py-4 space-y-2 lg:space-y-0 h-32  lg:h-auto justify-between  lg:justify-start'>
                      <div className='bg-gray-200 w-12 h-12 flex flex-col justify-center items-center rounded-full'>
                          {item?.icon}
                      </div>
                      
                      <p className='text-gray-700 text-center  lg:text-left text-xs  lg:text-sm'>{item?.name}</p>
                  </div>
             </Link>
          ))}
      </div>
  );
};

export default MenuBox;
