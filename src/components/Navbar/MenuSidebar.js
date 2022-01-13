import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';
import Brand from './Brand';

const MenuSidebar = ({ setShowMenu }) => {
    const navigate = useNavigate()
    //menus 
    const menus = [
        { id: 1, name: 'Free Shipping', link: '/free' },
        { id: 2, name: 'Drone Service', link: '/droneservice' },
        { id: 3, name: 'Global Purchase', link: '/globalpurchase' },
        { id: 4, name: 'Automative', link: '/automative' },
        
    ];

    return (
        <div>
            <Fade left>
                <aside className='w-full bg-white fixed top-0 left-0 h-screen z-50 ' style={{ height: '100%' }}>
                    {/* close button  */}
                    <div className='flex items-center justify-between pt-6 px-8 border-b border-gray-300 pb-4'>
                        <Brand />
                        <button className='p-3 rounded-full bg-white hover:bg-primary hover:text-white transition duration-500 hover:shadow-xl' onClick={() => setShowMenu(false)}>
                            <RiCloseLine className="text-xl text-gray-700 hover:text-white" />
                        </button>
                    </div>
                    <div className='flex items-center justify-between px-6 py-4'>
                        {/* some links  */}
                        <ul className='flex-col items-start space-y-5 flex pl-5'>
                            {menus?.map(item => {
                                return (
                                    <li className='text-gray-600 text-sm cursor-pointer hover:text-primary' key={item?.id} 
                                        onClick={
                                            () => {
                                                navigate(`${item?.link}`)
                                                setShowMenu(false)
                                            }
                                        }
                                    >{item?.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>
            </Fade>
        </div>
    )
}

export default MenuSidebar
