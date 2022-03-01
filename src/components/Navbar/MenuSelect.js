import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { HiSelector } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';

const placeholder = [
    { name: 'MENU' },
]
const menus = [
    { id: 1, name: 'Free Shipping', link: '/free' },
    { id: 2, name: 'Drone Service', link: '/droneservice' },
    { id: 3, name: 'Global Purchase', link: '/globalpurchase' },
    { id: 4, name: 'Mobile', link: '/mobile' },
];
const MenuSelect = ({ mobileMenu, setShowMenu}) => {
    const [selected, setSelected] = useState(placeholder[0])
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();


  return (
      <div>
          <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                  <Listbox.Button className=" transition duration-500 relative w-36 py-3 px-4 text-left bg-white rounded-md  cursor-default focus:outline-none border border-primary sm:text-sm">
                      <p className="flex items-center space-x-2 truncate text-primary font-semibold">
                          {/* <img src={selected?.img} alt={selected?.category} className="w-6" /> */}
                          <span className='text-xs'>{selected?.name}</span>
                      </p>

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
                      <Listbox.Options className={`absolute w-48  py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg h-auto ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50`}>
                          {menus?.map((item, inx) => (
                              <>
                                  <Link to={item?.link}
                                  >
                                      <Listbox.Option
                                          key={item?.id}
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
                                                      <span className='text-xs'  >{item?.name}</span>
                                                  </p>

                                              </>
                                          )}

                                      </Listbox.Option>
                                      
                                  </Link>



                              </>
                          ))}

                          {/* </> */}
                      </Listbox.Options>
                  </Transition>


              </div>
          </Listbox>
      </div>
  );
};

export default MenuSelect;
