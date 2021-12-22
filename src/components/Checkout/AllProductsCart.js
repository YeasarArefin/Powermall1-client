import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import useCart from '../../hooks/useCart';

const AllProductsCart = () => {
    const { cart, setCart} = useCart();

    const handleDelete = (id) => {
        setCart(cart.filter(item => item._id !== id))
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Image & Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {cart.map((item) => {
                                    const image = item?.img?.split(',');
                                    // const price = (parseFloat(item.price) - parseFloat(item.discount) * parseFloat(item.discount)/100) * item.pdQuantity;
                                    const newPrice = parseFloat(item.price);
                                    const discountPrice = parseFloat(item.discount);
                                    return (
                                        <tr key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 object-contain" src={image[0]} alt={item.name} />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-base font-semibold text-gray-900 flex justify-center">
                                                    &#2547; {(newPrice - newPrice * discountPrice / 100) * item.pdQuantity}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 text-xs leading-5 font-semibold text-gray-600 flex justify-center">
                                                    {item?.pdQuantity}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center">
                                                <MdDeleteOutline className='text-red-500 font-semibold cursor-pointer text-2xl' onClick={() => handleDelete(item._id)} />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductsCart
