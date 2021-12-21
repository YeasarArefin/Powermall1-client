import React, { useState } from 'react';
import { BsCartCheckFill, BsEyeFill } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const ProductCard = (props) => {
    const [changeBtn, setChangeBtn] = useState(false)
    const { handleClick } = useCart();
    const { _id, name, description, price, img, discount } = props;
    const priceInNum = parseFloat(price)
    const disCountedPrice = priceInNum - (discount / 100) * priceInNum;
    const image = img.split(',');
    const newProduct = { ...props }
    newProduct['pdQuantity'] = 1
    const navigate = useNavigate();

    return (
        <Slide bottom>
            <div className="rounded-lg p-4 box-border hover:translate-y-4 transform transition duration-500 h-full flex flex-col justify-between hover:shadow-xl bg-white">
                
                <div className="cursor-pointer" onClick={() => navigate(`/products/${_id}`)}>
                    {/* discount badge  */}
                <div className="flex justify-end">
                    <span className="px-3 py-1 bg-yellow-500 text-center text-white rounded-lg"> -{discount}%</span>
                </div>
                {/* image  */}
                <div>
                    <img className="w-full mx-auto object-contain" src={image?.[0]} alt={_id} />
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-base text-gray-700 font-semibold hover:underline cursor-pointer">{name}</h1>
                    <p className="text-sm text-gray-500 text-center">{description?.slice(0, 80)} </p>

                    {/* price  */}
                    <div className="flex items-center space-x-2 mb-2">
                        <h2 className="text-xl font-semibold text-gray-900">&#2547;{disCountedPrice?.toFixed(0)}</h2>
                        <del className="text-base font-semibold text-gray-500">&#2547; {price}</del>
                    </div>
                </div>
                </div>

                {/* button  */}
                <div className="flex items-center justify-center space-x-3 pt-3" >

                    <button disabled={changeBtn} className={` ${changeBtn ? "bg-blue-300" : " bg-primary hover:bg-blue-600"}  ring-blue-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md   uppercase text-sm flex items-center space-x-1`} onClick={() => {
                        handleClick(newProduct)
                        setChangeBtn(true)
                    }}>
                        <BsCartCheckFill className="text-lg" />
                        <span className="text-sm"> {changeBtn ? "Added" : "Add to Cart"}</span>
                    </button>



                    {/* <Link to={`/products/${_id}`}>
                        <button className="bg-gray-600 ring-gray-200 ring-offset-2 px-3 py-3 text-white focus:ring-4 transition duration-300 rounded-md hover:bg-gray-700 uppercase text-sm flex items-center space-x-1">
                            <BsEyeFill className="text-sm" />
                            <span className="text-sm">View</span>
                        </button>
                    </Link> */}
                </div>
            </div>
        </Slide>
    )
}

export default ProductCard
