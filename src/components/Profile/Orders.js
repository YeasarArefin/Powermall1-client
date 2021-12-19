import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ProductModal from './ProductModal';

const Orders = () => {
    const [pd, setPd] = useState([]);
    const [open, setOpen] = useState(false)
    const [product,setProduct] = useState({})
    const {newUser} = useAuth()

    const handleModal = (id) => {
        const productFind = pd?.find(item => item._id === id)
        setOpen(true)
        setProduct(productFind)
    }

    useEffect(() => {
        axios.get(`https://electro-shop-server.herokuapp.com/orders?email=${newUser?.email}`)
            .then(res => {
                setPd(res.data?.map(item => item))
                // console.log(res?.data)
            })
    }, [newUser?.email])

    return (
        <div>
            <div className="px-4 py-5 sm:px-6 bg-gray-100 flex justify-between mb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Order History</h3>
            </div>
            <div className=" overflow-x-scroll border-b border-gray-200 sm:rounded-lg order_table">
                <table className="min-w-full divide-y divide-gray-200 order_table">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Tracking No.
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Date
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
                                Price
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Products
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            pd?.map(item => {
                                return (
                                    <tr key={item._id}>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 text-xs leading-5 font-semibold text-gray-600 flex justify-center">
                                                {item?._id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 text-xs leading-5 font-semibold text-gray-600 flex justify-center">
                                                {item?.email}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 text-xs leading-5 font-semibold text-gray-600 flex justify-center">
                                                {item?.date}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 text-xs leading-5 font-semibold text-gray-600 flex justify-center">
                                                {item?.cart?.length}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 text-xs leading-5 font-semibold text-gray-600 flex justify-center">
                                                {item?.price}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 font-semibold mx-auto rounded-full text-xs ${!item?.status === "Pending" ? " bg-green-200 text-green-900" : "bg-red-200 text-red-900"}`}>
                                                {item?.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-3 bg-primary rounded-full py-1 text-xs leading-5 font-semibold text-white flex justify-center hover:bg-blue-500 cursor-pointer" onClick={() => handleModal(item?._id)}>
                                                View
                                            </span>
                                        </td>
                                        <ProductModal open={open} setOpen={setOpen} product={product} id={item?._id} />
                                    </tr>


                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders
