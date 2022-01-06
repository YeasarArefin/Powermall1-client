import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);
}

const OrderSummary = ({ setPrice, btnCick, order }) => {
    const { cart, setCart } = useCart();
    const { newUser } = useAuth();
    const [info, setInfo] = useState();
    const [disabled, setDisabled] = useState(false);
    const [coupon, setCoupon] = useState([]);
    const [usedCoupon, setUsedCoupon] = useState({});
    const [findedCoupon, setFindedCoupon] = useState({});
    const { register, handleSubmit } = useForm();
    const [totalPrice, setTotalPrice] = useState();
    let price = 0;
    const navigate = useNavigate();
    const [couponCheck, setCouponCheck] = useState(
        getSessionStorageOrDefault('coupons', [])
    );

    useEffect(() => {
        sessionStorage.setItem('coupons', JSON.stringify(couponCheck));
    }, [couponCheck]);

    // price 
    for (var i = 0; i < cart.length; i++) {
        price += (cart[i].price - (cart[i].price * cart[i].discount / 100)) * (cart[i].pdQuantity);
    }

    useEffect(() => {
        setTotalPrice(price + parseFloat(info?.insidecost));
    }, [price, info?.insidecost]);

    useEffect(() => {
        if (disabled) {
            setPrice(totalPrice);
        } else {
            setPrice(price + parseFloat(info?.insidecost));

        }
    }, [price, setPrice, info?.insidecost, disabled, totalPrice]);

    //information api
    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/information')
            .then(res => setInfo(res.data[0]));
    }, []);



    //coupons api
    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/coupons')
            .then(res => setCoupon(res.data));
    }, []);


    //coupon function
    const onSubmit = data => {
        if (data) {
            //find coupon
            const couponFind = coupon.find(item => item?.code === data.coupon);
            setFindedCoupon(couponFind);
            if (newUser?.usedCoupon) {
                if (newUser?.usedCoupon?.find(item => item?._id === couponFind?._id)) {
                    swal("Something went wrong!", "You have already used this coupon", "error");
                    return;
                }
            }

            //validate when user gibe wrong coupon
            if (!couponFind) {
                swal("Something went wrong!", "Coupon isn't existed", "error");
                return;
            }

            //expired checking
            if (couponFind?.end === new Date().toLocaleDateString()) {
                swal("Something went wrong!", "Coupon has expired!!", "error");
                return;
            }

            //coupon check from session storage
            const couponFindSS = couponCheck.find(item => item?.code === data.coupon);

            if (couponFindSS) {
                setDisabled(true);
            }

            if (!couponFindSS) {
                setCouponCheck([...couponCheck, couponFind]);

            }


            const addCouponPrice = totalPrice - parseFloat(couponFind?.ammount);
            setTotalPrice(addCouponPrice);
            newUser?.usedCoupon?.push(couponFind);
            setDisabled(true);
            setUsedCoupon(newUser);
            swal("Yo!!!", "Successfully coupon applied!!!", "success");
        }
    };

    //post order function
    const handleSubmitForm = () => {
        axios.put(`https://elec-shop-server.herokuapp.com/users/${newUser._id}`, {
            usedCoupon: usedCoupon?.usedCoupon
        })
            .then(res => {
                setDisabled(true);
            });
        // axios.post('https://elec-shop-server.herokuapp.com/init', {
        //     ...order, time: new Date().toLocaleTimeString()
        // })
        //     .then(res => {
        //         window.location.replace(res.data)
        //         //add used coupon to user object 
        //         setCart([])
        //         // navigate('/order-successful')
        //     }).catch((err) => {
        //         swal("Something went wrong!", `${err.message}`, "error")
        //     })
        axios.post('https://elec-shop-server.herokuapp.com/orders', {
            ...order, time: new Date().toLocaleTimeString(), refund: 'Refund'
        })
            .then(res => {
                swal("Yo!!!", "Successfully order done!!!", "success");
                //add used coupon to user object 
                setCart([]);
                navigate('/order-successful');
            }).catch((err) => {
                swal("Something went wrong!", `${err.message}`, "error");
            });
    };

    return (
        <div className='flex flex-col py-6' >
            {/* subtotal  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Subtotal({cart.length} items)</span>
                <span>&#2547; {price}</span>
            </div>
            {/* Shipping free  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Shipping Fee</span>
                <span>&#2547; {parseFloat(info?.insidecost)}</span>
            </div>

            {/* coupon  */}
            <form className='flex items-center space-x-2 py-3 border-b border-gray-200' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="input2" placeholder="Enter your coupon" {...register("coupon", { required: true })} />
                <button disabled={disabled} className={`${disabled ? "opacity-40 px-4 py-3  text-white rounded-md focus:outline-none bg-primary" : "bg-primary px-4 py-3  text-white rounded-md focus:outline-none"}`}>Apply</button>
            </form>

            {/* total  */}
            <div className='flex justify-between text-gray-500 text-base py-3 border-b border-gray-200'>
                <span>Total</span>
                <span className='text-xl font-semibold text-primary'>
                    &#2547; {totalPrice?.toFixed(2)} {usedCoupon?.usedCoupon?.length > 0 && <del className="text-gray-600 text-base italic">&#2547;  {totalPrice + parseFloat(findedCoupon?.ammount)} </del>}
                </span>
            </div>

            <button disabled={!btnCick} className={`${!btnCick ? " bg-gray-500 text-gray-100 opacity-20" : " bg-primary text-white hover:bg-blue-500 "}mt-6  w-full py-3 rounded-md  `} onClick={handleSubmitForm}>Proceed to pay</button>
        </div>
    );
};

export default OrderSummary;
