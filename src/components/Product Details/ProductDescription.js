import React from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShareAlt, AiOutlineStar } from 'react-icons/ai';
import { BsBagCheckFill, BsCartCheckFill } from 'react-icons/bs';
import Rating from 'react-rating';
import useCart from '../../hooks/useCart';

const ProductDescription = (props) => {
    const [quantity, setQuantity] = React.useState(1);
    const { handleClick } = useCart();
    const { id, title, description, price, rating, ratings, image, discount, color } = props;
    const disCountedPrice = price - (discount / 100) * price;

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }else{
            setQuantity(1);
        }
    }

    return (
        <div>
            {/* title and description  */}
            <div className='pb-4 flex flex-col space-y-2'>
                <h1 className='text-2xl text-gray-800 font-semibold'>{title}</h1>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>

            {/* ratings  */}
            <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
                <div className="flex items-center justify-center">
                    <Rating
                        emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                        fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                        initialRating={`${rating}`}
                        readonly
                        className='mt-2'
                    />
                    <span className="text-gray-600">({ratings} ratings)</span>
                </div>
                {/* share and like  */}
                <div className='flex items-center space-x-3'>
                    <AiOutlineShareAlt className="text-xl cursor-pointer text-gray-600" />
                    <AiOutlineHeart className="text-xl cursor-pointer text-gray-600" />
                </div>
            </div>

            {/* price  */}
            <div className='py-4'>
                <h1 className='text-3xl font-semibold text-primary'>${disCountedPrice.toFixed(2)} </h1>
                <div className='flex items-center space-x-2'>
                    <del className='text-gray-500 text-sm'>${price}</del>
                    <span className="text-lg font-semibold"> -{discount}%</span>
                </div>
            </div>

            {/* {color } */}
            <div className='flex space-x-5'>
                <p className='text-gray-600'>Color Family : </p>
                <div className='flex flex-col space-y-4'>
                    <span className='text-gray-700 font-semibold'>{color?.join(" , ")}</span>
                    <img className='h-10 w-10 cursor-pointer hover:scale-105 transform object-contain border rounded-lg' src={image} alt={id} />
                </div>
            </div>

            {/* quantity  */}
            <div className='flex space-x-5 py-6'>
                <p className='text-gray-600'>Quantity : </p>

                <div className='flex items-center space-x-3'>
                    <AiOutlineMinus className='text-xl text-gray-600 bg-secondary w-6 hover:bg-primary transition duration-500 transform hover:scale-105 hover:text-white cursor-pointer h-6 rounded-full p-1' onClick={handleDecrease} />
                    <span className='text-gray-700 font-semibold select-none'>{quantity}</span>
                    <AiOutlinePlus className='text-xl text-gray-600 bg-secondary w-6 hover:bg-primary transition duration-500 transform hover:scale-105 hover:text-white cursor-pointer h-6 rounded-full p-1' onClick={handleIncrease} />
                </div>
            </div>

            {/* button  */}
            <div className="flex items-center space-x-3 border-t border-gray-300 py-4" >
                <button className="bg-primary ring-blue-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-blue-500  uppercase text-sm flex items-center space-x-1" onClick={() => handleClick(props)}>
                    <BsCartCheckFill className="text-lg" />
                    <span className="text-sm select-none">Add To Cart</span>
                </button>
                <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-3 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700 uppercase text-sm flex items-center space-x-1">
                    <BsBagCheckFill className="text-sm" />
                    <span className="text-sm select-none">Buy Now</span>
                </button>
            </div>
        </div>
    )
}

export default ProductDescription
