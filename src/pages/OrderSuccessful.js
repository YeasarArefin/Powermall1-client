import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessful = () => {

    return (
        <div className='flex flex-col items-center justify-center my-24 w-full '>
            <h1 className='text-3xl text-center text-primary font-bold'>Congrats!!! Order Successful!!!</h1>
            <div>
                <img className='animate-pulse w-96 object-contain' src="../../assets/successful.png" alt="order successful" />
            </div>
            <Link to="/">
                <button className='bg-primary text-white rounded-full px-6 py-3 focus:outline-none hover:bg-blue-500 transform hover:scale-110 transition duration-500'>Go to home</button>
            </Link>
        </div>
    )
}

export default OrderSuccessful
