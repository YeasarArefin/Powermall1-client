import React from 'react';
import { FcAutomotive, FcGlobe, FcServices, FcShipped } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MenuBox = () => {
    const menus = [
        { id: 1, name: 'Free Shipping', link: '/free', icon: <FcShipped className='text-2xl' /> },
        { id: 2, name: 'Drone Service', link: '/droneservice', icon: <FcServices className='text-2xl' /> },
        { id: 3, name: 'Global Purchase', link: '/globalpurchase', icon: <FcGlobe className='text-2xl' /> },
        { id: 4, name: 'Automative', link: '/automative', icon: <FcAutomotive className='text-2xl' /> },
    ]

  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-x-3 gap-y-3 md:gap-y-3 lg:gap-x-4 mt-10'>
          {menus?.map(item => (
              <Link key={item?.id} to={item?.link}>
                  <div className='flex items-center space-x-2 bg-white rounded-lg px-4 py-3'>
                      {item?.icon}
                      <span className='text-gray-700 text-sm'>{item?.name}</span>
                  </div>
             </Link>
          ))}
      </div>
  );
};

export default MenuBox;
