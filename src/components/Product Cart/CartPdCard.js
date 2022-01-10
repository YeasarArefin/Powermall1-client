import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import useCart from '../../hooks/useCart';

const CartPdCard = (props) => {
    const [quantity, setQuantity] = React.useState(props.pdQuantity);
    const { cart, setCart } = useCart()
    const { _id, name, price, img, discount } = props;
    const image = img.split(',');
    const newPrice = parseFloat(price);
    const discountPrice = parseFloat(discount);
    const newProduct = { ...props };
    // newProduct['pdQuantity'] = quantity;
    const getALlPD = localStorage.getItem('cart');
    const parsedPd = JSON.parse(getALlPD)
    const getThisPD = parsedPd?.find(item => item?._id === _id)
    console.log(getThisPD)
    newProduct.pdQuantity = quantity
    // getThisPD?.pdQuantity = quantity

    const handleDelete = (id) => {
        setCart(cart.filter(item => item._id !== id))
        localStorage.removeItem(getThisPD);
    }

    const handleIncrease = () => {
        newProduct.pdQuantity = quantity + 1;
        localStorage.setItem('cart', JSON.stringify([newProduct]));
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            newProduct.pdQuantity = quantity - 1;
            localStorage.setItem('cart', JSON.stringify([newProduct]));
            setQuantity(quantity - 1);
        } else {
            newProduct.pdQuantity = 1;
            localStorage.setItem('cart', JSON.stringify([newProduct]));
            setQuantity(1);
        }
    };

    return (
        <div className='my-3 mx-1 rounded-md border border-gray-200'>
            <div className="px-3 py-4 flex justify-between space-x-1 bg-white shadow-lg">

                {/* quanityty  */}
                <div className='flex flex-col items-center space-y-1'>
                    <button onClick={handleDecrease}>
                        <AiOutlineMinus className='text-xl text-gray-600 bg-secondary w-6 hover:bg-primary transition duration-500 transform hover:scale-105 hover:text-white cursor-pointer h-6 rounded-full p-1' />
                    </button>
                    <span className='text-gray-700 font-semibold select-none'>{getThisPD?.pdQuantity}</span>
                    <button onClick={handleIncrease}>
                        <AiOutlinePlus className='text-xl text-gray-600 bg-secondary w-6 hover:bg-primary transition duration-500 transform hover:scale-105 hover:text-white cursor-pointer h-6 rounded-full p-1' />
                    </button>
                </div>

                {/* image  */}
                <div>
                    <img src={image?.[0]} alt={_id} className='object-contain w-16' />
                </div>

                {/* infos  */}
                <div className="flex flex-col space-y-2">
                    <h1 className='break-all text-sm'>{name}</h1>
                    <p className='text-primary'>&#2547; {newPrice - newPrice * discountPrice / 100} <span className='text-gray-600'>({getThisPD?.pdQuantity} pcs)</span></p>

                </div>

                {/* price  */}
                <div className='flex flex-col justify-center'>
                    <h2 className='text-gray-700'>&#2547; {(newPrice - newPrice * discountPrice / 100).toFixed(2) * getThisPD?.pdQuantity}</h2>
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
