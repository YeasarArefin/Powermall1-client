import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import Footer from '../components/Footer/Footer';
import DeliveryDescription from '../components/Product Details/DeliveryDescription';
import ProductDescription from '../components/Product Details/ProductDescription';
import ProductImage from '../components/Product Details/ProductImage';
import ProductInformations from '../components/Product Details/ProductInformations';

const ProductDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        fetch(`https://electro-comers-server.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        loading ? (
            <div className='flex flex-col h-screen w-full justify-center items-center space-y-6'>
                <FadeLoader color="#11A0DB" loading={loading} size={50} />
            </div>
        ) : (
            <>
                <main className="max-w-screen-xl mx-auto">
                    <section className='mx-6  bg-white rounded-lg mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5'>
                        {/* image  */}
                        <div className='col-span-2  p-6 box-border'>
                            <ProductImage {...products} />
                        </div>

                        {/* product description  */}
                        <div className="col-span-2  p-6 box-border">
                            <ProductDescription {...products} />
                        </div>

                        {/* order description  */}
                        <div className="col-span-1">
                                <DeliveryDescription {...products} />
                        </div>
                    </section>

                    {/* product information  */}
                    <section className='mx-6  bg-white rounded-lg my-12'>
                        <ProductInformations {...products} />
                    </section>
                </main>
                <Footer />
            </>
        )

    )
}

export default ProductDetails
