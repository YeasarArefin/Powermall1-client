import { useContext } from 'react';
import { QuantityContext } from '../contexts/QuantityProvider';

const useQuantity = () => {
    return useContext(QuantityContext);
}

export default useQuantity
