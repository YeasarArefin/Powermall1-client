import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';



const ShippingForm = ({ setOrder, btnCick, setBtnClick}) => {
    const { newUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        data['email'] = newUser?.email
        setOrder(data)
        setBtnClick(true)
    }

    return (
        <div className='my-6'>
            <form className='flex flex-col space-y-3' onSubmit={handleSubmit(onSubmit)}>
                {/* name      */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="name" className='text-gray-500 text-sm'>Full Name</label>
                    <input type="text" id="name" className="input2" placeholder="Enter your first and last name" defaultValue={newUser?.name} {...register("name")} />
                </div>

                {/* email  */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="email" className='text-gray-500 text-sm'>Email</label>
                    <input type="email" id="email" className="input2" placeholder="Enter your Email" value={newUser?.email}  />
                </div>

                {/* Email   */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="number" className='text-gray-500 text-sm'>Phone Number</label>
                    <input type="number" className="input2" id="number" placeholder="Enter your phone number" defaultValue={newUser?.mobile} {...register("mobile")} />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <textarea name="address" id="address" className="mt-1 ring-blue-200 focus:outline-none focus:ring-2 transition duration-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md py-3 h-32 resize-x-none px-4" {...register("address")}
                        defaultValue={newUser?.address}
                    ></textarea>
                </div>

                <div>
                    {btnCick ? (
                        <>
                            <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div>
                                    <span className="font-medium">Information Saved!</span>
                                </div>
                            </div>
                        </>
                    ): (
                        <>
                                <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                    <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <div>
                                        <span className="font-medium">Must save this information.</span>
                                    </div>
                                </div>
                        </>
                    )}
                </div>

                {/* button  */}
                <div className='flex justify-end pt-4'>
                    <button className='px-6 w-36 py-3 rounded-lg bg-primary text-white hover:bg-blue-500 transition duration-300'>Save</button>
                </div>

            </form>
        </div>
    )
}

export default ShippingForm
