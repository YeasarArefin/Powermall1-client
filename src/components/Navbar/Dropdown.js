import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { BsCreditCardFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdLogout, MdShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Dropdown = ({ handleLogout}) => {

    const menus = [
        { id: 1, name: 'Profile', link: '/profile/account',icon: <FaUserCircle className='text-xl text-gray-500'/>},
        { id: 2, name: 'My Order', link: '/profile/orders', icon: <MdShoppingBag className='text-xl text-gray-500'/>},
        { id: 3, name: 'Checkout', link: '/checkout', icon: <BsCreditCardFill className='text-xl text-gray-500'/>},
    ]

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="w-6 hover:bg-secondary transition duration-300">
                    <MdKeyboardArrowDown className='text-gray-600 text-xl cursor-pointer  w-6 h-6 rounded-full ' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-6 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                    <div className="py-1">
                        {menus.map(menu => (
                            <>
                                <Menu.Item key={menu.id}>
                                    {({ active }) => (
                                        <Link
                                            to={menu.link}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            <div className='flex items-center space-x-3'>
                                                {menu.icon} 
                                                <span className='text-base text-gray-600'>{menu.name}</span>
                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </>
                        ))}

                     {/* sign out  */}
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full text-left cursor-pointer px-4 py-2 text-sm'
                                        )}
                                    onClick={() => handleLogout()}
                                    >
                                    <div className='flex items-center space-x-3'>
                                        <MdLogout className='text-xl text-gray-500' />
                                        <span className='text-base text-gray-600'>Sign out</span>
                                    </div>
                                    </div>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown
