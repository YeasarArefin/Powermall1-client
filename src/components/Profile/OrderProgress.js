import React from 'react';
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const OrderProgress = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useState({})

    React.useEffect(() => {
        fetch(`https://api.powermall.com.bd/orders/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    return (
        <div className='py-6'>
            <div className='flex  items-center justify-around'>

                {/* pending  */}
                {products?.status === 'Pending' && (
                    <>
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className=' text-green-500 text-xs md:text-base lg:text-base'>Pending</p>

                        </div>
                        {/* processing  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Processing</p>
                        </div>
                        {/* Payment  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Payment</p>
                        </div>
                        {/* Delivered  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Delivered</p>
                        </div>
                        {/* Complete  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Complete</p>
                        </div>
                        
                    </>
                ) }
                

                {/* Procession  */}
                {products?.status === 'Processing' && (
                    <>
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base text-green-500'>Pending</p>

                        </div>
                        {/* processing  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base text-green-500'>Processing</p>
                        </div>
                        {/* Payment  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Payment</p>
                        </div>
                        {/* Delivered  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Delivered</p>
                        </div>
                        {/* Complete  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Complete</p>
                        </div>

                    </>
                )}
                

                {/* payment Done  */}
                {products?.status === 'Payment' && (
                    <>
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base text-green-500'>Pending</p>

                        </div>
                        {/* processing  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base text-green-500'>Processing</p>
                        </div>
                        {/* Payment  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base text-green-500'>Payment</p>
                        </div>
                        {/* Delivered  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Delivered</p>
                        </div>
                        {/* Complete  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircle className='text-xl md:text-2xl lg:text-3xl' />
                            <p className="text-xs md:text-base lg:text-base">Complete</p>
                        </div>

                    </>
                )}
                

                {/* Delivered Done  */}
                {products?.status === 'Delivered' && (
                    <>
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className=' text-xs md:text-base lg:text-base text-green-500'>Pending</p>

                        </div>
                        {/* processing  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base  text-green-500'>Processing</p>
                        </div>
                        {/* Payment  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base  text-green-500'>Payment</p>
                        </div>
                        {/* Delivered  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className='text-xs md:text-base lg:text-base  text-green-500'>Delivered</p>
                        </div>
                        {/* Complete  */}
                        <div className='flex flex-col items-center space-y-2 text-gray-400'>
                            <BsCheckCircleFill className='text-xl md:text-2xl lg:text-3xl text-green-500' />
                            <p className=' text-xs md:text-base lg:text-base text-green-500'>Complete</p>
                        </div>

                    </>
                )}
               
            
            </div>
        </div>
    )
}

export default OrderProgress
