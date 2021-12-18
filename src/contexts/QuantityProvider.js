import React, { createContext, useState } from 'react';

export const QuantityContext = createContext();

const QuantityProvider = ({children}) => {
    const [quantity , setQuantity] = useState(1)

    const handleIncrease = (newProduct) => {
        newProduct['pdQuantity'] = quantity - 1;
        setQuantity(quantity + 1)
    }

    const handleDecrease = (newProduct) => {
        if (quantity > 1) {
            newProduct['pdQuantity'] = quantity - 1;
            setQuantity(quantity - 1);
        } else {
            newProduct['pdQuantity'] = 1;
            setQuantity(1);
        }
    }
    const value = { 
        handleIncrease,
        handleDecrease,
        quantity
    }
    return (
        <QuantityContext.Provider value={value}>
            {children}
        </QuantityContext.Provider>
    )
}

export default QuantityProvider
