import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import useCart from '../../hooks/useCart';

const CartPdCard = (props) => {
    const { cart, setCart } = useCart()
    const { _id, name, price, img, pdQuantity, discount } = props;
    const image = img.split(',');
    const newPrice = parseFloat(price);
    const discountPrice = parseFloat(discount);

    const handleDelete = (id) => {
        setCart(cart.filter(item => item._id !== id))
    }
    return (
        <div className='my-3 mx-1 rounded-md border border-gray-200'>
            <div className="px-3 py-4 flex justify-between space-x-1 bg-white shadow-lg">
                {/* image  */}
                <div>
                    <img src={image?.[0]} alt={_id} className='object-contain w-16' />
                </div>

                {/* infos  */}
                <div className="flex flex-col space-y-2">
                    <h1 className='break-all text-sm'>{name}</h1>
                    <p className='text-primary'>&#2547; {newPrice - newPrice * discountPrice / 100} <span className='text-gray-600'>({pdQuantity} pcs)</span></p>

                </div>

                {/* price  */}
                <div className='flex flex-col justify-center'>
                    <h2 className='text-gray-700'>&#2547; {(newPrice - newPrice * discountPrice / 100) * pdQuantity}</h2>
                </div>

                {/* action  */}
                <div className='flex flex-col justify-center cursor-pointer'>
                    <RiCloseLine onClick={() => handleDelete(_id)} className="text-lg text-gray-700 " />
                </div>
            </div>
        </div>
    )
}

export default CartPdCard
