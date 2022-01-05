import React from 'react';
import { BsCartCheckFill, BsFillBagCheckFill } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import CartPdCard from './CartPdCard';

const CartSideBar = ({ setShow }) => {
    const { cart } = useCart()
    let price = 0;
    let quantity = 0;

    // price 
    for (var i = 0; i < cart.length; i++) {
        price += (cart[i].price - (cart[i].price * cart[i].discount / 100)) * (cart[i].pdQuantity);
    }

    //product quantity 
    for (var ii = 0; ii < cart.length; ii++) {
        quantity += cart[ii].pdQuantity;
    }

    //delete 
    localStorage.setItem('cart',JSON.stringify(cart))


    return (
        <Fade right>
            <aside className='w-96 bg-secondary fixed top-0 right-0 h-screen z-50 ' style={{ height: '100%' }}>
                {/* items  */}
                <div className='flex items-center justify-between border-b border-gray-300 px-6 py-4'>
                    <div className='text-primary flex items-center space-x-2'>
                        <BsFillBagCheckFill className='text-xl' />
                        <span className='text-lg'>{cart.length} items</span>
                    </div>

                    {/* close button  */}
                    <button className='p-3 rounded-full bg-white hover:bg-primary hover:text-white transition duration-500 hover:shadow-xl' onClick={() => setShow(false)}>
                        <RiCloseLine className="text-xl text-gray-700 hover:text-white" />
                    </button>
                </div>


                {/* carts  */}
                {cart?.length > 0 ? (
                    <>
                        <div className=" h-3/4 overflow-y-scroll cart-container py-6 ">
                            {cart.map(item => {
                                return (
                                    <CartPdCard {...item} />
                                )
                            })}
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
                    {cart?.length > 0 ? (
                        <Link to='/checkout'>
                            <div className='bg-primary rounded-lg px-2 py-2 hover:bg-blue-600 transition duration-300 w-full flex justify-between items-center cursor-pointer mt-8' onClick={ () => setShow(false)}>
                                <span className='text-white text-sm pl-4'>Checkout ({quantity} pcs)</span>
                                <div className='bg-white px-3 py-2 rounded-lg text-primary text-sm'>&#2547; {price?.toFixed(2)}</div>
                            </div>
                        </Link>
                    ) : (
                        <Link to='/shops'>
                            <div className='bg-primary rounded-lg px-2 py-3  transition duration-300 w-full flex justify-between items-center cursor-pointer mt-8' onClick={ () => setShow(false)}>
                                    <p className='text-white text-base pl-4 flex items-center space-x-3'><BsCartCheckFill className="text-lg" /> <span>Continue Shopping </span></p>
                            </div>
                        </Link>
                    )}

                </div>
            </aside>
        </Fade>
    )
}

export default CartSideBar
