import React from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const CartSideBar = ({ setShow }) => {
    const { cart, setCart } = useCart()
    let price = 0;

    // price 
    for (var i = 0; i < cart.length; i++) {
        price += cart[i].price - (cart[i].price * cart[i].discount / 100);
    }
    //delete 
    const handleDelete = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    return (
        <Fade right>
            <aside className='w-96 bg-white fixed top-0 right-0 h-screen z-50 '>
                {/* items  */}
                <div className='flex items-center justify-between border-b border-gray-300 px-6 py-4'>
                    <div className='text-primary flex items-center space-x-2'>
                        <BsFillBagCheckFill className='text-xl' />
                        <span className='text-lg'>{cart.length} items</span>
                    </div>

                    {/* close button  */}
                    <button className='p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition duration-500 hover:shadow-xl' onClick={() => setShow(false)}>
                        <RiCloseLine className="text-xl text-gray-700 hover:text-white" />
                    </button>
                </div>


                {/* carts  */}
                {cart?.length > 0 ? (
                    <>
                        <div className=" h-3/4 overflow-y-scroll cart-container py-6 ">
                            {cart.map(item => (
                                <>
                                    <div className='my-3 mx-1 rounded-md border border-gray-200'>
                                        <div className="px-3 py-4 flex justify-between space-x-1 bg-white shadow-lg">
                                            {/* image  */}
                                            <div>
                                                <img src={item.image} alt={item.title} className='object-contain w-16' />
                                            </div>

                                            {/* infos  */}
                                            <div className="flex flex-col space-y-2">
                                                <h1 className='break-all text-sm'>{item.title}</h1>
                                                <p className='text-primary'>${item.price - item.price * item.discount / 100}</p>
                                            </div>

                                            {/* price  */}
                                            <div className='flex flex-col justify-center'>
                                                <h2 className='text-gray-700'>${item.price - item.price * item.discount / 100}</h2>
                                            </div>

                                            {/* action  */}
                                            <div className='flex flex-col justify-center cursor-pointer'>
                                                <RiCloseLine onClick={() => handleDelete(item.id)} className="text-lg text-gray-700 " />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className='h-3/4 flex flex-col justify-center items-center'>
                            <img src="../../../assets/emptycart.png" alt="empty cart" className='w-72' />
                        </div>
                    </>
                )}


                <div className='px-2'>
                    {/* checkout button  */}
                    <Link to='/checkout'>
                        <div className='bg-primary rounded-lg px-2 py-2 hover:bg-blue-600 transition duration-300 w-full flex justify-between items-center cursor-pointer mt-8'>
                            <span className='text-white text-sm pl-4'>Checkout</span>
                            <div className='bg-white px-3 py-2 rounded-lg text-primary text-sm'>${price?.toFixed(2)}</div>
                        </div>
                    </Link>
                </div>
            </aside>
        </Fade>
    )
}

export default CartSideBar
