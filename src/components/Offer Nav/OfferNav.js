import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

const OfferNav = ({ setShowOffer }) => {
    const [notification, setNotification] = useState({});

    useEffect(() => {
        axios.get("https://elec-shop-server.herokuapp.com/notification/61c4ec647808158ad961db48")
            .then(res => setNotification(res?.data));
    }, []);

    return (
        notification?.status?.toLowerCase() === "on" && (
            <>
                <div className="bg-primary text-white py-2">
                    <div className="max-w-screen-xl mx-auto px-6 flex items-center flex-grow">
                        {/* text  */}
                        <div className='flex items-center space-x-2 flex-grow justify-center'>
                            <p>{notification?.message}</p>
                            <a href={notification?.link} target='_blank' rel='noreferrer'> <ins>{notification?.name}</ins></a>
                        </div>

                        {/* close  */}
                        <div>
                            <MdClose className='cursor-pointer' onClick={() => setShowOffer(false)} />
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default OfferNav;
