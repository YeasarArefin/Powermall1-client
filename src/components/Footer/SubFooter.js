import axios from 'axios';
import React, { useEffect } from 'react';

const SubFooter = () => {
    const [socialData, setSocialData] = React.useState({})
    const [copyRightData, setCopyRightData] = React.useState({})

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/sociallinks/61dc17dd6b1decad8b9fc3d8')
            .then(res => setSocialData(res.data))
    }, []);
    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/copyright/61dc1d87e7096f4da08ec024')
            .then(res => setCopyRightData(res.data))
    }, []);
    
    const socialLink = [
        { id: 1, name: 'Facebook', link: `${socialData?.facebook}`, icon: "../../../assets/facebook.png" },
        { id: 2, name: 'Instragram', link: `${socialData?.instagram}`, icon: "../../../assets/instagram.png" },
    ]

    const payment = [
        { id: 1, name: 'Cash on Delivery', icon: "../../../assets/Cash-On-Delivery-Logo.png" },
        { id: 2, name: 'Bkash', icon: "../../../assets/bkash-1.png" },
        { id: 3, name: 'Visa', icon: "../../../assets/visa-1.png" },
    ]

    return (
        <>
            <div className='max-w-screen-xl mx-auto px-6 py-4 pb-6 border-t border-gray-300 flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-between'>
                {/* social media  */}
                <div className='flex items-center space-x-4'>
                    {socialLink.map(item => (
                        <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer">
                            <img className='w-8 object-contain' src={item.icon} alt={item.name} />
                        </a>
                    ))}
                </div>

                {/* copyright  */}
                <div>
                    <p className='text-gray-500 text-sm'>{copyRightData?.copyrighttext}
                    </p>
                    {/* <p className='text-gray-500 text-sm'>&copy; {new Date().getFullYear()} elctroshop.com | All Rights Reserved.
                    </p> */}
                    <p className='text-gray-500 text-sm text-center pt-2 pb-4'>
                        Developed by <a className="text-blue-600" href="http://dropdev.tech/" target="_blank" rel="noopener noreferrer"><span className='text-indigo-600'>Drop</span> <span className='text-pink-600'>Dev</span> </a>
                    </p>
                </div>

                {/* payment method  */}
                <div className='flex items-center space-x-4'>
                    {payment.map(item => (
                        <img key={item.id} className='w-8 object-contain' src={item.icon} alt={item.name} />
                    ))}
                </div>
            </div>        
            
            {/* <div className='max-w-screen-xl mx-auto px-6 py-4 border-t border-gray-300 flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center'>

                {/* copyright  */}
                {/* <div>
                    <p className='text-gray-500 text-sm text-center'>
                        Developed by <a className="text-blue-600" href="http://dropdev.tech/" target="_blank" rel="noopener noreferrer">Drop Dev Ltd.</a>
                    </p>
                </div> */}
            {/* </div>  */}
        </>
    )
}

export default SubFooter
