import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const { newUser } = useAuth();

    return (
        <div>
            <div className="bg-white overflow-hidden sm:rounded-lg mb-12 lg:mb-4">
                <div className="px-4 py-5 sm:px-6 bg-gray-100 flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
                    <Link to="/profile/edit">
                        <button className='bg-primary w-36 px-2 py-2 rounded-lg focus:outline:none text-gray-700  hover:bg-yellow-400 transition duration-300'>Edit Profile</button>
                    </Link>
                </div>

                {/* image  */}
                <div className="my-4 px-4">
                    <img className='w-28 h-28 rounded-full object-cover' alt={newUser?.name} src={newUser?.image} />
                </div>

                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{newUser?.name}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{newUser?.email}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Mobile</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span>{!newUser?.mobile ? "Not Add yet!" : `${newUser?.mobile}`}</span>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Age</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span>{!newUser?.age ? "Not Add yet!" : `${newUser?.age} years`}</span>
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Gender</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span>{!newUser?.gender ? "Not Add yet!" : `${newUser?.gender}`}</span>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span>{!newUser?.address ? "Not Add yet!" : `${newUser?.address}`}</span>
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Account
