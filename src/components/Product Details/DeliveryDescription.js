import React, { useState } from 'react'
import { BsCash } from 'react-icons/bs'
import { MdDeliveryDining, MdOutlineClosedCaptionDisabled, MdOutlineLocationOn, MdOutlineModelTraining } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AddressModal from './AddressModal'

const DeliveryDescription = () => {
    const [open, setOpen] = useState(false)

    const handleModal = () => {
        setOpen(true)
    }

    return (
        <div className='bg-gray-50 h-full py-6 px-3'>
            {/* delivery options  */}
            <div>
                <p className='text-gray-600 font-semibold'>Delivery Options</p>
                {/* address  */}
                <div className='flex items-center space-x-2 justify-between py-2 border-t border-gray-300 my-3'>
                    <MdOutlineLocationOn className='text-3xl text-gray-600 w-8' />
                    <span className='text-sm text-gray-600'>Dhaka,Dhaka North, Road No. 12-19</span>
                    <span className='text-sm text-primary cursor-pointer' onClick={handleModal}>CHANGE</span>
                </div>
                <AddressModal open={open} setOpen={setOpen} />

                {/* home delivery time  */}
                <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                    <MdDeliveryDining className='text-3xl text-gray-600 w-8' />
                    <div className='text-sm text-gray-600 flex flex-col flex-grow'>
                        <p>Home Delivery</p>
                        <span>8-9 days</span>
                    </div>
                    <span className='text-sm text-gray-600' >$30</span>
                </div>

                {/* payment method  */}
                <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                    <BsCash className='text-2xl text-gray-600 w-8' />
                    <span className='text-sm text-gray-600'>Cash on Delivery Available</span>
                </div>
            </div>

            {/* return and warranty  */}
            <div className='mt-8'>
                <p className='text-gray-600 font-semibold'>Return & Warranty</p>
                {/* return policy  */}
                <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                    <MdOutlineModelTraining className='text-3xl text-gray-600 w-8' />
                    <div className='text-sm text-gray-600 flex flex-col'>
                        <p>7 Day Return</p>
                        <span>Change of mind available</span>
                    </div>
                </div>

                {/* warranty  */}
                <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                    <MdOutlineClosedCaptionDisabled className='text-3xl text-gray-600 w-8' />
                    <span className='text-sm text-gray-600'>Warranty not available</span>
                </div>
            </div>

            {/* go to store  */}
            <Link to="/checkout">
            <div className='flex justify-center rounded-lg py-3 mt-8 hover:bg-primary transition duration-500 text-primary hover:text-white bg-white cursor-pointer border border-gray-300'>
                <p>GO TO STORE</p>
            </div>
            </Link>
        </div>
    )
}

export default DeliveryDescription
