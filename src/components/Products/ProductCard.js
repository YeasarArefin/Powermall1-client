import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCartCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const ProductCard = (props) => {
    const [tempPd, setTempPd] = useState([])
    const [changeCartBtn, setCartBtn] = useState(true)
    const { handleClick, cart } = useCart();
    const { _id, name, price, img, discount, color } = props;
    const priceInNum = parseFloat(price);
    const disCountedPrice = priceInNum - (discount / 100) * priceInNum;
    const image = img.split(',');
    const pdColor = color?.split(',');
    const newProduct = { ...props };
    newProduct['pdQuantity'] = 1;
    newProduct['pdColor'] = pdColor?.[0];
    const navigate = useNavigate();
    const savedPrice = price - disCountedPrice;
    const findPd = cart?.find(item => item._id === _id);

    //handle add to cart 
    const handleCart = () => {
        handleClick(newProduct)
        setTempPd([...tempPd, newProduct])
        localStorage.setItem('cart', JSON.stringify(tempPd));

    }

    return (
        <>
            <div className="rounded-md p-4 box-border w-full  transition duration-500 h-full flex flex-col justify-between hover:shadow-xl bg-white border border-1 relative" style={{ height: '340px' }}>

                <div >
                    {/* discount badge  */}
                    {discount > 0 && (
                        <>
                            <div className="flex left-0 top-4 z-30 absolute">
                                <span className="px-2 py-1 text-xs bg-yellow-500 text-center text-white rounded-tr-full rounded-br-full"> Save: {savedPrice?.toFixed(0)}&#2547;</span>
                            </div>
                        </>
                    )}
                    {/* image  */}
                    <div className="cursor-pointer mt-5" onClick={() => navigate(`/shops/${_id}`)}>
                        <img className="w-48  mx-auto object-contain hover:opacity-80" src={image?.[0]} alt={_id} />
                    </div>

                    <div className="flex flex-col flex-grow mt-3 border-t border-gray-200  space-y-1">
                        <h1 className="text-sm pt-2 md:text-sm lg:text-sm text-gray-700 font-semibold cursor-pointer hover:underline hover:text-primary truncate" onClick={() => navigate(`/shops/${_id}`)}>{name}</h1>
                        {/* <p className="text-xs md:text-sm lg:text-sm text-gray-500">{quantity}pc(s) </p> */}

                       <div className='flex flex-col justify-end'>
                            <div className='flex flex-row md:flex-row lg:flex-row justify-between md:items-center lg:items-center pt-2'>
                                {/* price  */}
                                <div className="flex flex-row space-x-1 items-center">
                                    <h2 className="text-sm md:text-base lg:text-base font-semibold text-primary">&#2547; {disCountedPrice?.toFixed(0)}</h2>
                                    {discount > 0 && (
                                        <>
                                            <del className="text-sm italic text-gray-500" style={{ fontSize: '10px' }}>&#2547; {price}</del>
                                        </>
                                    )}

                                </div>


                                {/* cart  */}
                                {findPd ? (
                                    <>
                                        <div className='flex items-center justify-end'>
                                            <button className="hidden bg-gray-200 opacity-40 px-2 py-2 rounded-lg border border-gray-300 text-primary transition duration-300   uppercase text-sm md:flex lg:flex items-center space-x-1">
                                                <BsCartCheckFill className="text-lg" />
                                                <span className="text-xs">Added</span>
                                            </button>
                                            <button className="flex md:hidden lg:hidden border border-gray-200 rounded-full p-2 bg-gray-200 opacity-40 ring-blue-200">
                                                <BsCartCheckFill className="text-lg text-gray-600" />
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex items-center justify-end'>
                                            <button className="hidden bg-white hover:bg-gray-100  ring-blue-200 ring-offset-2 px-2 py-2 rounded-lg border border-gray-300 text-primary focus:ring-4 transition duration-300   uppercase text-xs md:text-sm lg:text-sm md:flex lg:flex items-center space-x-1" onClick={handleCart}>
                                                {/* <BsCartCheckFill className="text-lg" /> */}
                                                {changeCartBtn ? <span className="text-xs" onMouseEnter={() => setCartBtn(false)} onMouseLeave={() => setCartBtn(true)}>Buy Now</span> : <span className="text-xs" onMouseEnter={() => setCartBtn(true)} onMouseLeave={() => setCartBtn(true)}>Cart</span>}

                                            </button>

                                            <button className="flex md:hidden lg:hidden border border-gray-200 rounded-full p-2" onClick={handleCart}>
                                                <AiOutlineShoppingCart className="text-lg text-gray-600" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                       </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default ProductCard;
