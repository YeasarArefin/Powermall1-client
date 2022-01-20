import { Listbox, Transition } from '@headlessui/react';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { HiSelector } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';

const placeholder = [
    { category: 'CATEGORIES', img: '../../../assets/category.png' },
]

const CategorySelect = ({ mobileMenu, setShowMenu}) => {
    const [selected, setSelected] = useState(placeholder[0])
    const [categories, setCategories] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/category')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <div>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className=" transition duration-500 relative w-36 py-3 px-4 text-left bg-white rounded-md  cursor-default focus:outline-none border border-primary sm:text-sm">
                        {searchParams ? (
                            <p className="flex items-center space-x-2 truncate text-primary font-semibold">
                                {/* <img src={selected?.img} alt={selected?.category} className="w-6" /> */}
                                <span className='text-xs'>{selected?.category}</span>
                            </p>
                        ) : (
                            <span className="block truncate text-primary font-semibold">All</span>
                        )}

                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <HiSelector
                                className="w-5 h-5 text-primary font-bold"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={`absolute w-48 ${mobileMenu && "-ml-6"} py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg h-auto ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50`}>
                            {categories?.map((item, inx) => (
                                <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                    setSearchParams({ categories: item?.slug })
                                    setShowMenu(false)
                                }}>
                                    <Listbox.Option
                                        key={item?._id}
                                        className={({ active }) =>
                                            `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-pointer select-none relative py-2 pl-4 pr-4`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <p
                                                    className={`${selected ? 'font-medium' : 'font-normal'
                                                        }  truncate flex items-center space-x-2`}
                                                >
                                                    {/* <img src={item?.img} alt={item?.category} className="w-6" /> */}
                                                    <span className='text-xs'>{item?.category}</span>
                                                </p>
                                                
                                            </>
                                        )}
                                    </Listbox.Option>
                                </Link>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CategorySelect
