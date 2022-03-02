import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";

const OrderSuccessful = () => {
    const [loading, setLoading] = useState(true)

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const Spinner = () => {
        return (
            <div className='flex flex-col h-screen w-full justify-center items-center space-y-6'>
                <FadeLoader color="#F59E0B" loading={loading} size={50} />
            </div>
        )
    }
    
    return (
        loading ? (
            <Spinner />
        ) : (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Order Successful </title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <div className='flex flex-col items-center justify-center my-24 w-full '>
                <h1 className='text-3xl text-center text-primary font-bold'>Congrats!!! Order Successful!!!</h1>
                <div>
                    <img className='animate-pulse w-96 object-contain' src="../../assets/successful.png" alt="order successful" />
                </div>
                <Link to="/">
                    <button className='bg-primary text-white rounded-full px-6 py-3 focus:outline-none  hover:bg-yellow-600 transform hover:scale-110 transition duration-500'>Go to home</button>
                </Link>
            </div>
        </>
        )
    )
}

export default OrderSuccessful
