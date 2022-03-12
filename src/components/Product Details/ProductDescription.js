import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsBagCheckFill, BsCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductDescription = (props) => {
    const [quantity, setQuantity] = React.useState(1);
    const [colorVal, setColorVal] = React.useState();
    const { cart, handleClick } = useCart();
    const { _id, name, color, price, img, discount } = props;
    const priceInNum = parseFloat(price);
    const disCountedPrice = priceInNum - (discount / 100) * priceInNum;
    const image = img?.split(',');
    const pdColor = color?.split(',');
    const newProduct = { ...props };
    // const localQuantity = localStorage.getItem('quantity')

    newProduct['pdQuantity'] = quantity;

    const handleIncrease = () => {
        newProduct['pdQuantity'] = quantity + 1;
        setQuantity(newProduct.pdQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            newProduct['pdQuantity'] = quantity - 1;
            setQuantity(newProduct.pdQuantity);
        } else {
            newProduct['pdQuantity'] = 1;
            setQuantity(1);
        }
    };
    //track color value 

    const handleColorChange = (e) => {
        setColorVal(e.target.value);
    };

    newProduct['pdQuantity'] = quantity;

    if (colorVal) {
        newProduct['pdColor'] = colorVal;
    } else {
        newProduct['pdColor'] = pdColor?.[0];
    }

    // find pd 
    const findPd = cart?.find(item => item._id === _id);

    return (
        <div>
            {/* title and description  */}
            <div className='pb-4 flex flex-col space-y-2'>
                <h1 className='text-2xl text-gray-800 font-semibold'>{name}</h1>
            </div>

            {/* price  */}
            <div className='py-4'>
                <h1 className='text-3xl font-semibold text-primary'>&#2547; {disCountedPrice?.toFixed(2)} </h1>

                {discount > 0 && (
                    <>
                        <div className='flex items-center space-x-2'>
                            <del className='text-gray-500 text-sm'>&#2547; {priceInNum}</del>
                            <span className="text-lg font-semibold"> -{discount}%</span>
                        </div>
                    </>
                )}

            </div>

            {/* {color } */}
            <div className='flex space-x-3'>
                <p className='text-gray-600'>Colors : </p>

                <div className='flex flex-col items-center space-y-3'>
                    <div className=" flex items-center space-x-3">

                        {pdColor?.map(item => {
                            return (
                                <div className='flex items-center space-x-2'>
                                    <input type="radio" id={item} name="color" value={item} onChange={handleColorChange} />
                                    <label htmlFor={item}>{item}</label><br />
                                </div>
                            );
                        })}

                    </div>
                    <div>
                        <span className='text-gray-700 font-semibold'></span>
                        <img className='h-10 w-10 cursor-pointer hover:scale-105 transform object-contain border rounded-lg' src={image} alt={_id} />
                    </div>
                </div>

            </div>

            {/* quantity  */}
            <div className='flex space-x-5 py-6'>
                <p className='text-gray-600'>Quantity : </p>

                <div className='flex items-center space-x-3'>

                    {findPd ? (
                        <>
                            <button onClick={() => alert('First Remove this product from cart to decrease quantity.')}>
                                <AiOutlineMinus className='opacity-40 text-xl text-gray-600 bg-secondary w-6  transition duration-500 transform hover:scale-105 hover:text-gray-700 cursor-pointer h-6 rounded-full p-1' />
                            </button>
                            <span className='opacity-40 text-gray-700 font-semibold select-none'>{newProduct.pdQuantity}</span>
                            <button onClick={() => alert('First Remove this product from cart to increase quantity')}>
                                <AiOutlinePlus className='opacity-40 text-xl text-gray-600 bg-secondary w-6  transition duration-500 transform hover:scale-105 hover:text-gray-700 cursor-pointer h-6 rounded-full p-1' />
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleDecrease}>
                                <AiOutlineMinus className='text-xl text-gray-600 bg-secondary w-6 hover:bg-primary transition duration-500 transform hover:scale-105 hover:text-gray-700 cursor-pointer h-6 rounded-full p-1' />
                            </button>
                            <span className='text-gray-700 font-semibold select-none'>{newProduct.pdQuantity}</span>
                            <button onClick={handleIncrease}>
                                <AiOutlinePlus className='text-xl text-gray-600 bg-secondary w-6 hover:bg-primary transition duration-500 transform hover:scale-105 hover:text-gray-700 cursor-pointer h-6 rounded-full p-1' />
                            </button>
                        </>
                    )}

                </div>
            </div>

            {/* button  */}
            <div className="flex items-center space-x-3 border-t border-gray-300 py-4" >
                {
                    findPd ? (
                        <>
                            <button className="bg-primary ring-yellow-200 ring-offset-2 px-4 py-3 text-gray-700 focus:ring-4 transition duration-300 rounded-md  hover:bg-yellow-400  uppercase text-sm flex items-center space-x-1 opacity-40" >
                                <BsCartCheckFill className="text-lg" />
                                <span className="text-sm select-none">Added</span>
                            </button>
                        </>

                    ) : (
                        <>
                            <button className="bg-primary ring-yellow-200 ring-offset-2 px-4 py-3 text-gray-700 focus:ring-4 transition duration-300 rounded-md  hover:bg-yellow-400  uppercase text-sm flex items-center space-x-1" onClick={
                                () => {
                                    handleClick(newProduct);
                                }
                            }>
                                <BsCartCheckFill className="text-lg" />
                                <span className="text-sm select-none">Add To Cart</span>
                            </button>
                        </>
                    )
                }

                {
                    findPd ? (
                        <Link to="/checkout">
                            <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-3 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700 uppercase text-sm flex items-center space-x-1">
                                <BsBagCheckFill className="text-sm" />
                                <span className="text-sm select-none">Buy Now</span>
                            </button>
                        </Link>
                    ) : (
                        <Link to="/checkout">
                            <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-3 py-3 text-gray-700 focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700 uppercase text-sm flex items-center space-x-1" onClick={() => {

                                handleClick(newProduct);

                            }}>
                                <BsBagCheckFill className="text-sm" />
                                <span className="text-sm select-none">Buy Now</span>
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ProductDescription;
