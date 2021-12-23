import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/Products/ProductCard';
import useFetch from '../hooks/useFetch';

const Shops = () => {
    const [products] = useFetch();
    const [categoryFilter, setCategoryFilter] = React.useState();
    const [searchFilter, setSearchFilter] = React.useState();
    let [searchParams] = useSearchParams();

    React.useEffect(() => {
        setCategoryFilter(searchParams.get("categories"))
        setSearchFilter(searchParams.get("search"))
    }, [searchParams])

    //find products
    const pds = products?.filter(item => item?.category?.toLowerCase() === categoryFilter)
    const searchPd = products?.filter(item => item?.brand?.toLowerCase() === searchFilter?.toLowerCase())

    return (
        <>
            <main className="max-w-screen-xl mx-auto px-6 py-12" style={{ background: '#F4F4FA', height: '100%' }}>

                {searchFilter ? (
                    searchPd?.length > 0 ? (
                        <>
                            <h1 className='mb-4 text-2xl font-semibold text-gray-700'>{searchFilter?.toUpperCase()}</h1>

                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                {searchPd?.map(item => <ProductCard key={item._id} {...item} />)}
                            </div>
                        </>
                    ) : (
                        <div className='flex flex-col items-center justify-center my-24 w-full '>
                            <div className='mb-4'>
                                <img className='animate-pulse w-96 object-contain' src="../../assets/notfound.jpg" alt="error page" />
                                <h1 className='text-3xl text-center text-gray-600'> <span className='text-primary italic'>{searchFilter}</span> Not found!!</h1>
                            </div>
                            <Link to="/">
                                <button className='bg-primary text-white rounded-full px-6 py-3 focus:outline-none hover:bg-blue-500 transform hover:scale-110 transition duration-500'>Continue Shopping</button>
                            </Link>
                        </div>
                    )
                ) : (
                    categoryFilter ? (
                        pds?.length > 0 ? (
                            <>
                                    <h1 className='mb-4 text-2xl font-semibold text-gray-700'>{categoryFilter?.toUpperCase()}</h1>
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                    {pds?.map(item => <ProductCard key={item._id} {...item} />)}
                                </div>
                            </>
                        ) : (
                            <div className='flex flex-col items-center justify-center my-24 w-full '>
                                <div className='mb-4'>
                                    <img className='animate-pulse w-96 object-contain' src="../../assets/notfound.jpg" alt="error page" />
                                    <h1 className='text-3xl text-center text-gray-600'> <span className='text-primary italic'>{categoryFilter}</span> Not found!!</h1>
                                </div>
                                <Link to="/">
                                    <button className='bg-primary text-white rounded-full px-6 py-3 focus:outline-none hover:bg-blue-500 transform hover:scale-110 transition duration-500'>Continue Shopping</button>
                                </Link>
                            </div>
                        )
                    ) : (
                        <>
                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                {products?.map(product => (
                                    <ProductCard key={product._id} {...product} />
                                ))}
                            </div>
                        </>

                    )
                )}       
            </main>
            <Footer />
        </>
    )
}

export default Shops


