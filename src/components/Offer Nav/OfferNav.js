import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

const OfferNav = ({ setShowOffer }) => {
    const [notification, setNotification] = useState({});
    const [mobileVersion, setMobileVersion] = useState(false)

    useEffect(() => {
        axios.get("https://elec-shop-server.herokuapp.com/notification")
            .then(res => setNotification(res?.data));
    }, []);


    const changeNav = () => {
        if (window.innerWidth <= 500) {
            setMobileVersion(true);
        } else {
            setMobileVersion(false);

        }
    };

    window.addEventListener('resize', changeNav);

    return (
        // notification?.status?.toLowerCase() === "on" && (
        <>
            <div className="overflow-hidden relative">
                <div className='bg-white h-12 overflow-hidden hover:opacity-80 transition duration-500 cursor-pointer'>
                    {mobileVersion ? (
                        <>
                            <a href={notification?.[1]?.link}>

                                <img className="h-full w-full md:w-full lg:w-full object-cover" src={notification?.[1]?.img} alt={notification?.[1]?._id} />
                            </a>
                        </>
                    ) : (
                        <>
                            <a href={notification?.[0]?.link}>
                                <img className="h-full w-full md:w-full lg:w-full object-cover" src={notification?.[0]?.img} alt={notification?.[0]?._id} />
                            </a>

                        </>
                    )}

                </div>


                {/* close  */}
                <div className='absolute top-0 right-0 z-30'>
                    <MdClose className='cursor-pointer bg-white text-black w-6 h-6  rounded-bl-full m-2 p-1' onClick={() => setShowOffer(false)} />
                </div>
            </div>
        </>
        // )
    );
};

export default OfferNav;
