import React from 'react';
import CartItemCard from './CartItemCard';
import CartSideBar from './CartSideBar';

const ProductCart = () => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div>
            <CartItemCard handleShow={handleShow} />
            {show && (
                <>
                    <CartSideBar setShow={setShow} />
                    <div className='cursor-pointer w-full fixed top-0 left-0 h-screen z-40 bg-gray-800 opacity-70' onClick={() => setShow(false)}>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductCart
