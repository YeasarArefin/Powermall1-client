import React from 'react';
import useCart from '../../hooks/useCart';
import Input from '../Contact/Input';

const OrderSummary = () => {
    const {cart} = useCart();


    return (
        <div className='flex flex-col py-6'>
            {/* subtotal  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Subtotal({cart.length} items)</span>
                <span>$48,900</span>
            </div>
            {/* Shipping free  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Shipping Fee</span>
                <span>$510</span>
            </div>

            {/* coupon  */}
            <div className='flex items-center space-x-2 py-3 border-b border-gray-200'>
                <Input type="text" placeholder="Enter Coupon Code" />
                <button className='px-4 py-3 bg-primary text-white rounded-md focus:outline-none'>Apply</button>
            </div>

            {/* total  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Total</span>
                <span className='text-xl font-semibold text-primary'>$49,900</span>
            </div>

            <button disabled className='mt-6 text-white w-full py-3 rounded-md bg-gray-500 hover:bg-primary' >Proceed to pay</button>
        </div>
    )
}

export default OrderSummary
