import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/Products/ProductCard';
import useFetch from '../hooks/useFetch';

const Mobile = () => {
    const [products] = useFetch();
    const [loading, setLoading] = useState(true)

    //find products
    const pds = products?.filter(item => item?.delivery === "Mobile")

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
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
                        <title>Mobile</title>
                    <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
                </Helmet>
                <main style={{ background: '#F4F4FA', height: '100%' }}>
                    <div className="max-w-screen-xl mx-auto px-6 py-12">
                        {
                            pds?.length > 0 ? (
                                <>
                                        <h1 className='mb-4 text-xl italic font-semibold text-gray-700'>Mobile</h1>
                                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                                        {pds?.map(item => <ProductCard key={item._id} {...item} />)}
                                    </div>
                                </>
                            ) : (
                                <div className='flex flex-col items-center justify-center my-24 w-full '>
                                    <div className='mb-4'>
                                        <img className='animate-pulse w-96 object-contain' src="../../assets/notfound.jpg" alt="error page" />
                                        <h1 className='text-3xl text-center text-gray-600'> Not found!!</h1>
                                    </div>
                                    <Link to="/shops">
                                        <button className='bg-primary text-gray-700 rounded-full px-6 py-3 focus:outline-none  hover:bg-yellow-400 transform hover:scale-110 transition duration-500'>Continue Shopping</button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </main >
                <Footer />
            </>
        )
    )
}

export default Mobile
