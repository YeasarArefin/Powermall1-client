import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsBagCheckFill } from 'react-icons/bs';
import Rating from 'react-rating';

const ProductCard = (props) => {
    const {id,title,description,price,rating,image,discount} = props;

    const disCountedPrice = price - (price * discount / 100);
    return (
        <div className="border rounded-lg p-4 box-border hover:translate-y-4 transform transition duration-500 h-full flex flex-col justify-between hover:shadow-xl">
            {/* discount badge  */}
            <div className="flex justify-end">
                <span className="px-3 py-1 bg-yellow-500 text-center text-white rounded-lg"> -{discount}%</span>
            </div>
            {/* image  */}
            <div>
                <img className="w-full mx-auto object-contain" src={image} alt={id} />
            </div>

            <div className="flex flex-col items-center space-y-2">
                <h1 className="text-base text-gray-700 font-semibold">{title}</h1>
                <p className="text-sm text-gray-500 text-center">{description?.slice(0,80)} </p>

                {/* price  */}
                <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-bold text-gray-900">${disCountedPrice.toFixed(0)}</h2>
                    <del className="text-lg font-bold text-gray-600">${price}</del>
                </div>
                {/* rating  */}
                <div className="flex items-center justify-center pb-4">
                    <Rating
                        emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                        fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                        initialRating={`${rating}`}
                        readonly
                    />
                    <span className="text-gray-600">({rating})</span>

                </div>
            </div>

            {/* button  */}
            <div className="flex items-center justify-center space-x-3" >
                <button className="bg-primary ring-blue-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-blue-500  uppercase text-sm flex items-center space-x-1">
                    {/* <BsCartCheckFill className="text-lg" /> */}
                    <span className="text-sm">+ Add To Cart</span>
                </button>
                <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-3 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700 uppercase text-sm flex items-center space-x-1">
                    <BsBagCheckFill className="text-sm" />
                    <span className="text-sm">Buy Now</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
