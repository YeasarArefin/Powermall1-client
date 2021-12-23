import React from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OfferNav = ({ setShowOffer}) => {
    return (
        <div className="bg-primary text-white py-2">
            <div className="max-w-screen-xl mx-auto px-6 flex items-center flex-grow">
                {/* text  */}
                <div className='flex items-center space-x-2 flex-grow justify-center'>
                    <p>Hurry! Order by Dec. 24th, 1pm & choose Express Delivery to get gifts & more in 2 hours or less</p>
                    <Link to="/shops"> <ins>Shop Now</ins></Link>
                </div>

                {/* close  */}
                <div>
                    <MdClose className='cursor-pointer' onClick={() => setShowOffer(false)} />
                </div>
            </div>
        </div>
    )
}

export default OfferNav
