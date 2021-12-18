import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useCart from '../../hooks/useCart';
import Input from '../Contact/Input';

const OrderSummary = ({ setPrice, btnCick, order}) => {
    const {cart,setCart} = useCart();
    let price = 0;
    const navigate = useNavigate()

    // price 
    for (var i = 0; i < cart.length; i++) {
        price += (cart[i].price - (cart[i].price * cart[i].discount / 100)) * (cart[i].pdQuantity);
    }

    const totalPrice = price + 30;

    useEffect(() => {
        setPrice(price + 30)
    }, [price, setPrice])

    const handleSubmit = () => {
        axios.post('https://electro-shop-server.herokuapp.com/orders', order)
            .then(res => {
                swal("Yo!!!", "Successfully order done!!!", "success");
                setCart([])
                navigate('/profile/myOrders')
            }).catch((err) => {
                swal("Something went wrong!", `${err.message}`, "error")
            })
    }

    return (
        <div className='flex flex-col py-6'>
            {/* subtotal  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Subtotal({cart.length} items)</span>
                <span>&#2547; {price}</span>
            </div>
            {/* Shipping free  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Shipping Fee</span>
                <span>&#2547; 30</span>
            </div>

            {/* coupon  */}
            <div className='flex items-center space-x-2 py-3 border-b border-gray-200'>
                <Input type="text" placeholder="Enter Coupon Code" />
                <button className='px-4 py-3 bg-primary text-white rounded-md focus:outline-none'>Apply</button>
            </div>

            {/* total  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Total</span>
                <span className='text-xl font-semibold text-primary'>&#2547; {totalPrice}</span>
            </div>

            <button disabled={!btnCick} className={`${!btnCick ? " bg-gray-500 text-gray-100 opacity-20" : " bg-primary text-white hover:bg-blue-500 "}mt-6  w-full py-3 rounded-md  `}  onClick={handleSubmit}>Proceed to pay</button>
        </div>
    )
}

export default OrderSummary
