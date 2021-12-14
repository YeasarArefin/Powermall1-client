import React from 'react'
import Input from './Input'

const ContactForm = () => {
    return (
        <div>
            <div className="my-24 lg:my-0">
                <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>

                                            <Input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <Input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <Input
                                                type="email"
                                                name="email-address"
                                                id="email-address"
                                            />
                                        </div>

                                        {/* // messege box  */}
                                        <div className="col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Write your message
                                            </label>
                                            <textarea name="message" id="message" className="mt-1 ring-blue-200 focus:outline-none focus:ring-2 transition duration-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md py-3 h-32 resize-x-none px-4"></textarea>
                                        </div>

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 w-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-blue-200"
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
