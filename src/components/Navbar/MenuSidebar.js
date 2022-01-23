import { Disclosure } from '@headlessui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { Link, useSearchParams } from 'react-router-dom';
import Brand from './Brand';

const MenuSidebar = ({ setShowMenu, mobileMenu }) => {
        const [categories, setCategories] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [categoryFilter, setCategoryFilter] = React.useState();
    const [searchParams, setSearchParams] = useSearchParams();


    React.useEffect(() => {
        setCategoryFilter(searchParams.get("categories"))
    }, [searchParams])

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/category')
            .then(res => {
                const newData = res?.data?.sort((a, b) => a?.position - b?.position);
                setCategories(newData)
            })
    }, [])
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
                    <div className='flex flex-col px-6 py-2'>
                        {/* some links  */}
                            {categories?.map(item => {
                                return (
                                    <div className="w-full py-2">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-sm font-medium text-left text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                       

                                                        {!item?.subCategory && (
                                                            <>
                                                                <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                                                    setSearchParams({ categories: item?.slug })
                                                                    setShowMenu(false)
                                                                }} className="w-full">
                                                                    <p >{item?.category}</p>
                                                                </Link>
                                                            </>
                                                        )}
                                                        {item?.subCategory && (
                                                            <>
                                                                <span>{item?.category}</span>
                                                            </>
                                                        )}
                                                        

                                                        {item?.subCategory && (
                                                            <>
                                                                <FiChevronDown
                                                                    className={`${open ? 'transform rotate-180' : ''
                                                                        } w-5 h-5 text-gray-500`}
                                                                />
                                                            </>
                                                        )}
                                                        
                                                    </Disclosure.Button>
                                                    {item?.subCategory && (
                                                        <>
                                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                                                                <div className='flex flex-col space-y-3'>
                                                                    <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                                                        setSearchParams({ categories: item?.slug })
                                                                        setShowMenu(false)

                                                                    }}>
                                                                        <p  className="hover:bg-gray-100 px-2 py-1 rounded-md">All</p>
                                                                    </Link>
                                                                    {item?.subCategory?.map((cate) => {
                                                                        return(
                                                                            <>
                                                                                <Link to={`/shops?categories=${cate?.toLowerCase()}`} onClick={() => {
                                                                                    setSearchParams({ categories: cate?.toLowerCase() })
                                                                                    setShowMenu(false)

                                                                                }}>
                                                                                    <p className="hover:bg-gray-100 px-2 py-1 rounded-md">{cate}</p>
                                                                                </Link>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}

                                                </>
                                            )}
                                        </Disclosure>
                                            
                                            
                                    </div>
                                );
                            })}
                      
                        {/* <div className='pl-4 pt-3'>
                            <MenuSelect setShowMenu={setShowMenu} mobileMenu={mobileMenu} />
                        </div> */}
                    </div>
                </aside>
            </Fade>
        </div>
    )
}

export default MenuSidebar
