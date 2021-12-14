import React from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs';
import useCart from '../../hooks/useCart';

const CartItemCard = ({ handleShow}) => {
    const { cart } = useCart();
    let price = 0;

    // price 
    for (var i = 0; i < cart.length; i++) {
        price += cart[i].price - (cart[i].price * cart[i].discount / 100);
    }
    
    return (
        <div className='bg-primary py-2 px-1  fixed z-40 top-2/4 right-0 rounded-tl-md rounded-bl-md shadow-xl flex flex-col space-y-2 cursor-pointer' onClick={handleShow}>
            {/* items  */}
            <div className='text-white flex items-center space-x-2 justify-center'>
                <BsFillBagCheckFill />
                <span>{cart.length} items</span>
            </div>

            {/* price  */}
            <div className='bg-white rounded-md px-2 py-2 text-primary flex justify-center text-sm'>
                <span>$ {price?.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default CartItemCard
