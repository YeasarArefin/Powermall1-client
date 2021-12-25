import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import ProductModal from './ProductModal';

const Orders = () => {
    const [pd, setPd] = useState([]);
    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState({})
    const { newUser } = useAuth()
    const [loading, setLoading] = useState(true)

    const handleModal = (id) => {
        const productFind = pd?.find(item => item._id === id)
        setOpen(true)
        setProduct(productFind)
    }

    const handleDelete = (id) => {
        axios.delete(`https://electro-shop-server.herokuapp.com/orders/${id}`)
            .then(res => {
                swal("Cancel", "Order cancel done!!!", "success");
            }).catch((err) => {
                swal("Something went wrong!", `${err.message}`, "error")
            })
    }

    useEffect(() => {
        axios.get(`https://electro-shop-server.herokuapp.com/orders?email=${newUser?.email}`)
            .then(res => {
                setPd(res.data?.map(item => item))
            })
    }, [newUser?.email, pd])

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const Spinner = () => {
        return (
            <div className='flex flex-col h-screen w-full justify-center items-center space-y-6'>
                <FadeLoader color="#11A0DB" loading={loading} size={50} />
            </div>
        )
    }

    return (
        loading ? (
            <Spinner />
        ) : (
            <div className='mb-12'>
                <div className="px-4 py-5 sm:px-6 bg-gray-100 flex justify-between mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Order History</h3>
                </div>
                <div className=" overflow-scroll  sm:rounded-lg order_table">

                    {pd?.length > 0 ? (
                        <>
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
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
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
                                                            &#2547; {item?.price}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`p-1 px-3 w-20 text-center mx-auto rounded-full text-xs font-bold ${item?.status === "Pending" ? " bg-red-200 text-red-900" : item?.status === "Delivered" ? "bg-green-200 text-green-900" : "bg-yellow-200 text-yellow-900"}`}>
                                                            {item?.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-3 bg-primary rounded-full py-1 text-xs leading-5 font-semibold text-white flex justify-center hover:bg-blue-500 cursor-pointer" onClick={() => handleModal(item?._id)}>
                                                            View
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">

                                                        {item?.status === "Pending" ? (
                                                            <>
                                                                <span className="px-3 bg-red-600 rounded-full py-1 text-xs leading-5 font-semibold text-white flex justify-center hover:bg-red-500 cursor-pointer" onClick={() => handleDelete(item?._id)}>
                                                                    Cancel
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span disabled className="px-3 bg-red-600 opacity-20 rounded-full py-1 text-xs leading-5 font-semibold text-white flex justify-center hover:bg-red-500 cursor-pointer">
                                                                    Cancel
                                                                </span>
                                                            </>
                                                        )}

                                                    </td>
                                                    <ProductModal open={open} setOpen={setOpen} product={product} id={item?._id} />
                                                </tr>


                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <>
                            <div className='mb-4'>
                                <img className='animate-pulse w-96 mx-auto object-contain' src="../../assets/notfound.jpg" alt="error page" />
                                <h1 className='text-3xl text-center text-gray-600'> No Order!!</h1>
                            </div>
                        </>
                    )}

                </div>
            </div>
        )
    )
}

export default Orders
