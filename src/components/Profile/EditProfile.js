import React from 'react'
import Input from '../Contact/Input'

const EditProfile = () => {
    return (
        <>
            <div>
                <div className="mt-10 sm:mt-0">
                    <div className="grid grid-cols-1 md:gap-6">

                        <div className="mt-5 md:mt-0" >
                            <form action="#" method="POST">
                                <div className=" overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 sm:px-6 bg-gray-100 flex justify-between">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
                                    </div>
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="flex flex-col space-y-3">
                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Name
                                                </label>
                                                <Input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                />
                                            </div>

                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6'>
                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                    />
                                                </div>

                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                                        Phone Number
                                                    </label>
                                                    <Input
                                                        type="number"
                                                        name="number"
                                                        id="number"
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6'>

                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                                        Age
                                                    </label>
                                                    <Input
                                                        type="number"
                                                        name="age"
                                                        id="age"
                                                    />
                                                </div>

                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                                        Gender
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        name="gender"
                                                        id="gender"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                    Address
                                                </label>
                                                <textarea name="address" id="address" className="mt-1 ring-blue-200 focus:outline-none focus:ring-2 transition duration-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md py-3 h-32 resize-x-none px-4"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 w-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-blue-200"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EditProfile
