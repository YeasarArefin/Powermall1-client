import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const SubNav = () => {
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/category')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <div className="bg-primary text-gray-700">
            <div className="max-w-screen-xl mx-auto px-6 flex items-center flex-grow">
                {/* menus  */}
                <ul className="flex items-center space-x-6 uppercase relative font-semibold w-full">
                    <li onMouseEnter={categories && (() => setShow(true))} onMouseLeave={categories && (() => setShow(false))} className="py-3 px-4 hover:bg-white hover:text-primary transition duration-300  cursor-pointer">
                        <span>Categories</span>
                        {show && categories && (
                            <Fade>
                                <ul className="absolute top-12 bg-white w-48 rounded-bl-md rounded-br-md p-3 shadow-lg z-50 -left-0">
                                    {categories?.map(subitem => {
                                        return (
                                            <Link key={subitem?._id} to={`/products?categories=${subitem?.slug}`}>
                                                <li  className=" transition duration-300  cursor-pointer text-sm text-gray-600 py-2 hover:bg-gray-100 rounded-md px-6 transform hover:translate-x-1">
                                                    {subitem?.category}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </Fade>
                        )}
                    </li>

                    {/* shops  */}
                    <li className="py-3 px-4 hover:bg-white hover:text-primary transition duration-300  cursor-pointer">
                        <Link to="/shops">Shops</Link>
                    </li>

                    {/* Offers  */}
                    <li className="py-3 px-4 hover:bg-white hover:text-primary transition duration-300  cursor-pointer">
                        <Link to="/offers">Offers</Link>
                    </li>

                    {/* contact  */}
                    <li className="py-3 px-4 hover:bg-white hover:text-primary transition duration-300  cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubNav
