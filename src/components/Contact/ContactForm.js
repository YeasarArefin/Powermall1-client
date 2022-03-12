import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const ContactForm = () => {
    const { register, handleSubmit,reset } = useForm();
    const { newUser } = useAuth();

    const onSubmit = data => {
        data['email'] = newUser?.email
        axios.post('https://api.powermall.com.bd/messages', data)
        .then((res) => {
            swal("Good job!", "Message Send!!", "success");
            reset()
        }).catch(err => {
            swal("Something went wrong!!", "Message couldn't send!!", "error")
        })  
    }


    return (
        <div>
            <div className="my-24 lg:my-0">
                <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <form className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>

                                            <input
                                                type="text"
                                                id="first-name"
                                                className="input2"
                                                defaultValue={newUser?.name} {...register("name", { required: true })}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                className="input2"
                                                value={newUser?.email}
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                className="input2"
                                                {...register("subject", { required: true })}
                                            />
                                        </div>

                                        {/* // message box  */}
                                        <div className="col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Write your message
                                            </label>
                                            <textarea name="message" id="message" className="mt-1 ring-yellow-200 focus:outline-none focus:ring-2 transition duration-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md py-3 h-32 resize-x-none px-4" {...register("message", { required: true })}></textarea>
                                        </div>

                                    </div>
                                </form>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 w-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-primary  hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-yellow-200"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
