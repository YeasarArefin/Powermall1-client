import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdCall, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Brand from '../Navbar/Brand';

const MainFooter = () => {
    const [info, setInfo] = useState();
    const [applink,setAppLink] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/information')
            .then(res => setInfo(res.data[0]))
    }, []);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/applink')
            .then(res => setAppLink(res.data[0]))
    }, []);

    const about = [
        { id: 1, name: 'About Us', link: '/about' },
        { id: 2, name: 'Privacy Policy ', link: '/privacy' },
        { id: 3, name: 'Why Shop with Us', link: '/shopwithus' },
        { id: 5, name: 'Terms & Conditions', link: '/terms' },
    ]

    const contact = [
        { id: 1, name: 'Contact Us', link: '/contact' },
        { id: 3, name: 'Shipping & Delivery', link: '/shippingdelivery' },
        { id: 4, name: 'Return & Refund', link: '/returnrefund' },
        { id: 5, name: 'Payment Methods', link: '/paymentmethod' },
    ]

    const app = [
        { id: 1, name: 'Download App', link: `${applink.playStore}`, image:"../../../assets/google.png"},
        { id: 2, name: 'Download Appstore', link: `${applink.appStore}`, image:"../../../assets/apple.png"},
    ]

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-8">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center lg:place-items-start'>
                {/* about  */}
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl text-gray-700'>About</h1>
                    <ul className='flex flex-col space-y-2'>
                        {about.map(item => (
                            <li key={item.id} className='text-gray-500 text-sm hover:underline'>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact  */}
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl text-gray-700'>Contact</h1>
                    <ul className='flex flex-col space-y-2'>
                        {contact.map(item => (
                            <li key={item.id} className='text-gray-500 text-sm hover:underline'>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* address  */}
                <div className='flex flex-col lg:items-start items-center space-y-4'>
                    <Brand />

                    <div className='flex flex-col lg:items-start items-center space-y-3'>
                        {/* locaiton  */}
                        <div className='flex justify-center lg:justify-start w-48  items-center space-x-2'>
                            <MdLocationOn className='text-gray-500 text-sm w-8' />
                            <span className='text-gray-500 text-sm'>
                                {info?.address}
                            </span>
                        </div>
                        {/* mobile  */}
                        <div className='flex items-center space-x-2'>
                            <MdCall className='text-gray-500 text-sm w-8' />
                            <span className='text-gray-500 text-sm'>
                                {info?.phone}
                            </span>
                        </div>
                        {/* Email  */}
                        <div className='flex items-center space-x-2'>
                            <MdOutlineEmail className='text-gray-500 text-sm w-8'  />
                            <span className='text-gray-500 text-sm'>
                                {info?.email}
                            </span>
                        </div>
                    </div>
                </div>

                {/* app download  */}
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl text-center lg:text-left text-gray-700'>Download Our App</h1>
                    <div className='flex items-center space-x-4'>
                        {app.map(item => (
                            <a key={item.id} target="_blank" href={item.link} rel="noreferrer">
                                <img src={item.image} alt={item.name} className='h-12 w-36 object-contain' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainFooter
