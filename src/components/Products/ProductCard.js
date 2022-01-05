import React, { useState } from 'react';
import { BsCartCheckFill } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const ProductCard = (props) => {
    const [tempPd,setTempPd] = useState([])
    const { handleClick, cart } = useCart();
    // const { newUser } = useAuth();
    const { _id, name, price, img, discount, quantity, color } = props;
    const priceInNum = parseFloat(price);
    const disCountedPrice = priceInNum - (discount / 100) * priceInNum;
    const image = img.split(',');
    const pdColor = color?.split(',');
    const newProduct = { ...props };
    newProduct['pdQuantity'] = 1;
    newProduct['pdColor'] = pdColor?.[0];
    const navigate = useNavigate();

    const findPd = cart?.find(item => item._id === _id);

    //handle add to cart 
    const handleCart = () => {
        handleClick(newProduct)
        setTempPd([...tempPd,newProduct])
        localStorage.setItem('cart', JSON.stringify(tempPd));
        
    }

    return (
        <Slide bottom>
            <div className="rounded-lg p-4 box-border hover:translate-y-4 transform transition duration-500 h-full flex flex-col justify-between hover:shadow-xl bg-white">

                <div >
                    {/* discount badge  */}
                    {discount > 0 && (
                        <>
                            <div className="flex justify-end">
                                <span className="px-2 py-1 text-sm bg-yellow-500 text-center text-white rounded-full"> -{discount}%</span>
                            </div>
                        </>
                    )}
                    {/* image  */}
                    <div className="cursor-pointer" onClick={() => navigate(`/shops/${_id}`)}>
                        <img className="w-48  mx-auto object-contain" src={image?.[0]} alt={_id} />
                    </div>

                    <div className="flex flex-col mt-3  space-y-1">
                        <h1 className="text-base text-gray-700 font-semibold cursor-pointer" onClick={() => navigate(`/shops/${_id}`)}>{name}</h1>
                        <p className="text-sm text-gray-500">{quantity}pc(s) </p>

                        <div className='flex justify-between items-center pt-2'>
                            {/* price  */}
                            <div className="flex flex-col">
                                {discount > 0 && (
                                    <>
                                        <del className="text-sm italic font-semibold text-gray-500">&#2547; {price}</del>
                                    </>
                                )}
                                <h2 className="text-lg font-semibold text-primary">&#2547; {disCountedPrice?.toFixed(0)}</h2>
                            </div>

                            {/* cart  */}
                            {findPd ? (
                                <>
                                    <div>
                                        <button className="bg-gray-200 opacity-40 ring-blue-200 ring-offset-2 px-3 py-2 rounded-full border border-gray-300 text-primary focus:ring-4 transition duration-300   uppercase text-sm flex items-center space-x-1">
                                            <BsCartCheckFill className="text-lg" />
                                            <span className="text-sm">Added</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <button className=" bg-white hover:bg-gray-100  ring-blue-200 ring-offset-2 px-3 py-2 rounded-full border border-gray-300 text-primary focus:ring-4 transition duration-300   uppercase text-sm flex items-center space-x-1" onClick={handleCart}>
                                            <BsCartCheckFill className="text-lg" />
                                            <span className="text-sm">Cart</span>
                                        </button>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>


            </div>
        </Slide>
    );
};

export default ProductCard;
