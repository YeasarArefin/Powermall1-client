import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';

const SubNav = () => {
    const [show, setShow] = useState(false);

    const menus = [
        {
            id: 1, name: 'Categories', submenu: [
                { id: 1, name: 'Samsung' },
                { id: 2, name: 'Sony' },
                { id: 3, name: 'Nokia' },
                { id: 4, name: 'Infinix' },
                { id: 5, name: 'Vivo' },
                { id: 6, name: 'Iphone' },
                { id: 7, name: 'realme' },
                { id: 8, name: 'OnePlus' },
                { id: 9, name: 'OPPO' },
                { id: 10, name: 'Motorola' },
                { id: 11, name: 'Tecno' },
                { id: 12, name: 'Nokia' },
                { id: 13, name: 'Huawei' },
            ]
        },
        {
            id: 2, name: 'Shops'
        },
        {
            id: 3, name: 'Offers'
        },
        {
            id: 4, name: 'Contact'
        },
    ]
    return (
        <div className="bg-primary text-white">

            <div className="max-w-screen-xl mx-auto px-6 flex items-center flex-grow">
                {/* menus  */}
                <ul className="flex items-center space-x-6 uppercase relative font-semibold w-full">
                    {menus?.map(item => {
                        return (
                            <>
                                <li key={item.id} onMouseEnter={item?.submenu && (() => setShow(true))} onMouseLeave={item?.submenu && (() => setShow(false))} className="py-3 px-4 hover:bg-white hover:text-primary transition duration-300  cursor-pointer">{item.name}
                                    {show && item.submenu && (
                                        <Zoom bottom>
                                            <ul className="absolute top-12 bg-white w-48 rounded-md p-3 shadow-lg z-50">
                                                {item.submenu.map(subitem => {
                                                    return (
                                                        <li key={subitem.id} className=" transition duration-300  cursor-pointer text-sm text-gray-600 py-2 hover:bg-gray-100 rounded-md px-6 transform hover:translate-x-1">{subitem.name}</li>
                                                    )
                                                })}
                                            </ul>
                                        </Zoom>
                                    )}
                                </li>
                            </>
                        )
                    })}
                </ul>
                {/* cart  */}
                <div className="relative cursor-pointer flex justify-end">
                    <BsCart className="text-3xl text-white-600" />
                    <span className="rounded-full w-5 h-5 absolute -top-1 -right-2 bg-gray-700 text-white flex justify-center items-center">1</span>
                </div>
            </div>           
        </div>
    )
}

export default SubNav
