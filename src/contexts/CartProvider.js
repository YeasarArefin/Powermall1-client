import React, { createContext } from 'react';
import { toast } from 'react-toastify';
export const CartContext = createContext();

const CartProvider = ({ children}) => {
    const [cart, setCart] = React.useState([]);
    const handleClick = (product) => {
            setCart([...cart, product]);
            toast.success('Added to Cart!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }
    const value = { cart, handleClick, setCart };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
