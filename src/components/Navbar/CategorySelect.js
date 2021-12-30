import { Listbox, Transition } from '@headlessui/react';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { HiOutlineCheck, HiSelector } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';

const placeholder = [
    { category: 'Category' },
]

const CategorySelect = () => {
    const [selected, setSelected] = useState(placeholder[0])
    const [categories, setCategories] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/category')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <div>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className=" transition duration-500 relative w-36 py-3 px-4 text-left bg-white rounded-md  cursor-default focus:outline-none border border-primary sm:text-sm">
                        {searchParams ? (
                            <span className="block truncate text-primary font-semibold">{selected?.category}</span>
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
                        <Listbox.Options className="absolute w-48 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                            {categories?.map((item, inx) => (
                                <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                    setSearchParams({ categories: item?.slug })
                                }}>
                                    <Listbox.Option
                                        key={item?._id}
                                        className={({ active }) =>
                                            `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`${selected ? 'font-medium' : 'font-normal'
                                                        } block truncate`}
                                                >
                                                    {item?.category}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                        <HiOutlineCheck className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
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
