import React from 'react';
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="bg-white overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gray-100 flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
                    <Link to="/profile/edit">
                        <button className='bg-primary w-36 px-2 py-2 rounded-lg focus:outline:none text-white hover:bg-blue-500 transition duration-300'>Edit Profile</button>
                    </Link>
                </div>

                {/* image  */}
                <div className="my-4 px-4">
                    {user.photoURL ? <img className='w-28 h-28 rounded-full object-contain' alt={user.displayName} src={user.photoURL} /> : <Avatar size='100' name={user.displayName} round={true} />}
                </div>

                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.displayName}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Mobile</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">014087196282</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Age</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">18 years</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Gender</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Male</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                15c/7c,Block-F,flat-5B,Hazi Chinu Mia Road,Tikka para(near panir pamp),Mohammadpur,Dhaka-1207
                                Dhaka, BD,
                                Bangladesh
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Account