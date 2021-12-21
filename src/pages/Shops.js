import React from 'react';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/Products/ProductCard';
import useFetch from '../hooks/useFetch';

const Shops = () => {
    const [products] = useFetch();


    return (
        <>
            <main className="max-w-screen-xl mx-auto px-6 py-12" style={{ background: '#F4F4FA', height: '100%' }}>
                {/* title  */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {products?.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Shops
