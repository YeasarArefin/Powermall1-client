import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
    const links = [
        { id: 1, name: "My Account", link: '/profile/account' },
        { id: 2, name: "Order History", link: '/profile/orders' },
        { id: 3, name: "Manage Account", link: '/profile/edit' },
    ]
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Profile</title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <main className="max-w-screen-xl mx-auto">
                <section className='mx-6 mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-x-10'>
                    {/* sidebar */}
                    <div className='col-span-1 bg-white h-52 rounded-lg p-4 box-border'>
                        <div className='flex flex-col space-y-3'>
                            {links.map(item => (
                                <NavLink to={`${item.link}`} className={({ isActive }) => isActive ? 'py-2 px-4 bg-primary text-gray-700 rounded-lg' : 'text-gray-800 py-2 px-4 hover:bg-gray-100 rounded-lg' }>
                                    <span>{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* infos  */}
                    <div className="col-span-3 bg-white rounded-lg p-4 box-border mb-12">
                        <Outlet />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile
