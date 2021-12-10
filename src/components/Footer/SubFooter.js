import React from 'react'

const SubFooter = () => {

    const socialLink = [
        { id: 1, name: 'Facebook', link: 'https://www.facebook.com/', icon: "../../../assets/facebook.png" },
        { id: 2, name: 'Instragram', link: 'https://www.instagram.com/', icon: "../../../assets/instagram.png" },
    ]

    const payment = [
        { id: 1, name: 'Cash on Delivery', icon: "../../../assets/Cash-On-Delivery-Logo.png" },
        { id: 2, name: 'Bkash', icon: "../../../assets/bkash-1.png" },
        { id: 3, name: 'Visa', icon: "../../../assets/visa-1.png" },
    ]

    return (
        <div className='max-w-screen-xl mx-auto px-6 py-4 border-t border-gray-300 flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-between'>
            {/* social media  */}
            <div className='flex items-center space-x-4'>
                {socialLink.map(item => (
                    <a href={item.link} key={item.id} >
                        <img className='w-8 object-contain' src={item.icon} alt={item.name} />
                    </a>
                ))}
            </div>

            {/* copyright  */}
            <div>
                <p className='text-gray-500 text-sm'>&copy; {new Date().getFullYear()} elctroshop.com | All Rights Reserved.
                </p>
            </div>

            {/* payment method  */}
            <div className='flex items-center space-x-4'>
                {payment.map(item => (
                    <img key={item.id} className='w-8 object-contain' src={item.icon} alt={item.name} />
                ))}
            </div>
        </div>
    )
}

export default SubFooter
