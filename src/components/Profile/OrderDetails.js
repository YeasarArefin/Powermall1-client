import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import OrderProgress from './OrderProgress';

const OrderDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        fetch(`https://elec-shop-server.herokuapp.com/orders/${id}`)
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

            <h1 className='pt-4 pl-2'>Ordered Products</h1>
            {/* ordered products  */}
            {products?.cart?.map((item) => {
                const image = item?.img.split(',');
                const newPrice = parseFloat(item?.price);
                const discountPrice = parseFloat(item?.discount);

                return (
                    <div className='my-3 mx-1 rounded-lg border border-gray-200' key={item?._id}>
                        <div className="px-3 py-4 flex-col md:flex-row lg:flex-row flex items-center md:justify-between space-x-1 bg-white">
                            {/* image  */}
                            <div>
                                <img src={image?.[0]} alt={item?._id} className='object-contain w-16' />
                            </div>

                            {/* infos  */}
                            <div className="flex flex-col md:flex-row lg:flex-row items-center  space-x-10">
                                <h1 className='break-all text-sm'>{item?.name}</h1>
                                <p className='text-primary'>&#2547; {newPrice - newPrice * discountPrice / 100} <span className='text-gray-600'>({item?.pdQuantity} pcs)</span></p>
                                {/* color  */}
                                {item?.pdColor && (
                                    <div>

                                        <span>Color : {item?.pdColor}</span>
                                    </div>
                                )}
                            </div>

                            {/* price  */}
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-gray-700'>&#2547; {(newPrice - newPrice * discountPrice / 100) * item?.pdQuantity}</h2>
                            </div>


                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderDetails
