import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import OrderProgress from './OrderProgress';

const OrderDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        fetch(`https://powermallapi.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])


    return (
        <div>
            <div className="px-4 py-5 sm:px-3 bg-gray-100 flex justify-between mb-4 rounded-lg">
                {/* heading  */}
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center space-x-3">
                    <BiArrowBack className='cursor-pointer' onClick={() => navigate('/profile/orders')} /> <span>Order Details</span>
                </h3>
            </div>

            {/* order pregress  */}
            <OrderProgress />

            <h1 className='pt-4 pl-2'>Ordered Products ({products?.cart?.length} products )</h1>
            {/* ordered products  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-10 mb-12 lg:mb-4'>
                {products?.cart?.map((item) => {
                    const image = item?.img.split(',');
                    const newPrice = parseFloat(item?.price);
                    const discountPrice = parseFloat(item?.discount);

                    return (
                        <div className='my-3 mx-1 rounded-lg border border-gray-200' key={item?._id}>
                            <div className="px-3 py-4 flex-col md:flex-row lg:flex-row flex items-center md:justify-between lg:justify-between space-x-1 bg-white">
                                {/* image  */}
                                <div>
                                    <img src={image?.[0]} alt={item?._id} className='object-cover w-40' />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    {/* infos  */}
                                    <div className="flex flex-col  items-center md:items-start lg:items-start  space-x-10 md:space-x-0 lg:space-x-0 space-y-2">
                                        <h1 className='break-all text-sm text-center md:text-left lg:text-left'>{item?.name}</h1>
                                        <p className='text-primary text-center md:text-left lg:text-left'>&#2547; {newPrice - newPrice * discountPrice / 100} <span className='text-gray-600'>({item?.pdQuantity} pcs)</span></p>
                                        {/* color  */}
                                        {item?.pdColor && (
                                            <div>

                                                <p className='text-center md:text-left lg:text-left'>Color : {item?.pdColor}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* price  */}
                                    <div className='flex flex-col justify-center'>
                                        <h2 className='text-center md:text-left lg:text-left text-gray-700'>&#2547; {(newPrice - newPrice * discountPrice / 100) * item?.pdQuantity}</h2>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderDetails
