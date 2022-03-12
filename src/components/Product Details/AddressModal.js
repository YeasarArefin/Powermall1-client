import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import React, { Fragment, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineLocationOn } from 'react-icons/md';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const AddressModal = ({ open, setOpen }) => {
    const cancelButtonRef = useRef(null);
    const { newUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        axios.put(`https://powermallapi.herokuapp.com/users/${newUser._id}`, data)
            .then(res => {
                swal("Yo!!!", "Address successfully updated!!!", "success");
                 setOpen(false)
            }).catch((err) => {
                swal("Something went wrong!", `${err.message}`, "error")
            })
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <MdOutlineLocationOn className='text-2xl text-gray-500' />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-600">
                                            Change Delivery Address
                                        </Dialog.Title>
                                        <div>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mt-4 w-full">
                                                    <input type="text" className="border border-gray-400 rounded-lg focus:outline-none ring-yellow-200 focus:ring-2 px-4 py-3 w-96 transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Address" defaultValue={newUser?.address} {...register("address")} />
                                                </div>
                                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                    <button
                                                        type="submit"
                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-gray-700  hover:bg-yellow-4000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                        
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddressModal
