import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCartCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';


const ProductCard = (props) => {
    const [tempPd, setTempPd] = useState([]);
    const [singlePuchased, setSinglePurchase] = useState(false);
    const [allPurchasePd, setALlPursPd] = useState([]);
    const [pd, setPd] = useState([]);
    const [changeCartBtn, setCartBtn] = useState(true);
    const [wishlistDone, setWishListDone] = useState(false);
    const [wishListPd, setWishListPd] = useState([]);
    const { handleClick, cart } = useCart();
    const { _id, name, price, img, discount, color, delivery } = props;
    const priceInNum = parseFloat(price);
    const disCountedPrice = priceInNum - (discount / 100) * priceInNum;
    const image = img.split(',');
    const pdColor = color?.split(',');
    const newProduct = { ...props };
    newProduct['pdQuantity'] = 1;
    newProduct['pdColor'] = pdColor?.[0];
    const navigate = useNavigate();
    const savedPrice = price - disCountedPrice;
    const findPd = cart?.find(item => item._id === _id);
    const { newUser } = useAuth();
    //checking
    const findWishList = newUser?.wishlist?.find(item => item?._id === _id);
    const FindwishListPd = wishListPd?.find(item => item?._id === _id);
    const findUser = wishListPd?.map(item => item?.wishListUser?.find(item => item?.email !== newUser?.email));
    // console.log(FindwishListPd)
    //handle add to cart 
    const handleCart = () => {
        handleClick(newProduct);
        setTempPd([...tempPd, newProduct]);
        localStorage.setItem('cart', JSON.stringify(tempPd));

    };

    React.useEffect(() => {
        fetch('https://api.powermall.com.bd/wishlist')
            .then(res => res.json())
            .then(data => setWishListPd(data));
    }, []);

    //loading order
    React.useEffect(() => {
        axios.get(`https://api.powermall.com.bd/orders?email=${newUser?.email}`)
            .then(res => {
                setPd(res.data?.map(item => item));
            });
    }, [newUser?.email]);

    React.useEffect(() => {
        pd?.map(item => item?.cart?.filter(item => item?.delivery === "Single Purchase"))?.map(item => setALlPursPd(item));
    }, [pd]);


    // find prchase pd 
    const purchasedPd = allPurchasePd?.find(item => item?._id === _id);

    React.useEffect(() => {
        if (purchasedPd) {
            setSinglePurchase(true);
        }
    }, [purchasedPd]);

    //handle wishlist product
    const handleWishlistPd = (pd) => {
        if (newUser) {
            newUser?.wishlist?.push(pd);

            //count for wishlist 
            const wishListUser = [];
            wishListUser?.push(newUser);
            const wishListData = { ...pd, wishListUser };
            console.log(wishListData);
            axios.put(`https://api.powermall.com.bd/users/${newUser._id}`, {
                wishlist: newUser?.wishlist
            })
                .then(res => {
                    setWishListDone(true);
                    swal("Done!!", "This product has added to wishlist!", "success");

                    if (!FindwishListPd) {
                        axios.post(`https://api.powermall.com.bd/wishlist`, wishListData).then(res => {
                            setWishListDone(true);
                            swal("Done!!", "This product has added to wishlist!", "success");
                        });


                    } else {
                        if (findUser) {
                            const wishListUser2 = [];
                            wishListUser2?.push(newUser);
                            axios.put(`https://api.powermall.com.bd/wishlist/${_id}`, {
                                wishListUser: wishListUser2
                            }).then(res => {
                                setWishListDone(true);
                                swal("Done!!", "This product has added to wishlist!", "success");
                            });
                        }

                    }

                });
        } else {
            swal("Something Went Wrong!!", "You have to login first to add your wishlist", "info");
            navigate('/login');
        }

    };

    return (
        <>
            <div className="rounded-md p-4 box-border w-full  transition duration-500 h-84 flex flex-col justify-between hover:shadow-xl bg-white border border-1 relative" >

                <div >
                    {/* discount badge  */}
                    {
                        delivery !== 'Upcoming' ? (
                            discount > 0 && (
                                <>
                                    <div className="flex left-0 top-4 z-20 absolute">
                                        <span className="px-2 py-1 text-xs bg-primary text-center text-gray-700 rounded-tr-full rounded-br-full"> Save: {savedPrice?.toFixed(0)}&#2547;</span>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <div className="flex left-0 top-4 z-20 absolute">
                                    <span className="px-2 py-1 text-xs bg-primary text-center text-gray-700 rounded-tr-full rounded-br-full">Upcoming Product</span>
                                </div>
                            </>
                        )
                    }
                    {/* image  */}
                    <div className="cursor-pointer h-40 mt-5" onClick={() => navigate(`/shops/${_id}`)}>
                        <img className="w-48 h-full  mx-auto object-contain hover:opacity-80" src={image?.[0]} alt={_id} />
                    </div>

                    <div className="flex flex-col flex-grow mt-3 border-t border-gray-200  space-y-1">
                        <h1 className="text-sm pt-2 md:text-sm lg:text-sm text-gray-700 font-semibold cursor-pointer hover:underline hover:text-primary truncate" onClick={() => navigate(`/shops/${_id}`)}>{name}</h1>
                        {/* <p className="text-xs md:text-sm lg:text-sm text-gray-500">{quantity}pc(s) </p> */}

                        {
                            delivery === 'Upcoming' ? (
                                <div className="pt-2">
                                    {
                                        !wishlistDone & !findWishList ? (
                                            <>
                                                <button className='w-full px-3 py-2 bg-primary border-none rounded-md focus:outline-none text-xs text-gray-700 hover:bg-yellow-400' onClick={() => handleWishlistPd(props)}>Add To Wishlist</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className='w-full px-3 py-2 bg-yellow-200 opacity-40 border-none rounded-md focus:outline-none text-xs text-gray-600 '>Added to Wishlist</button>
                                            </>
                                        )
                                    }

                                </div>
                            ) : (

                                singlePuchased ? (
                                    <div className="pt-2">
                                        <button className='w-full px-3 py-2 bg-yellow-200 opacity-80 border-none rounded-md focus:outline-none text-xs text-gray-600 '>Already Purchased</button>
                                    </div>
                                ) : (
                                    <>
                                        <div className='flex flex-col justify-end'>
                                            <div className='flex flex-row md:flex-row lg:flex-row justify-between md:items-center lg:items-center pt-2'>
                                                {/* price  */}
                                                <div className="flex flex-row space-x-1 items-center">
                                                    <h2 className="text-sm md:text-base lg:text-base font-semibold text-primary">&#2547; {disCountedPrice?.toFixed(0)}</h2>
                                                    {discount > 0 && (
                                                        <>
                                                            <del className="text-sm italic text-gray-500" style={{ fontSize: '10px' }}>&#2547; {price}</del>
                                                        </>
                                                    )}

                                                </div>


                                                {/* cart  */}
                                                {findPd ? (
                                                    <>
                                                        <div className='flex items-center justify-end'>
                                                            <button className="hidden bg-yellow-200 opacity-40 px-2 py-2 rounded-lg text-gray-500 transition duration-300  text-sm md:flex lg:flex items-center space-x-1">
                                                                <BsCartCheckFill className="text-lg" />
                                                                <span className="text-xs">Added</span>
                                                            </button>
                                                            <button className="flex md:hidden lg:hidden border border-gray-200 rounded-full p-2 bg-gray-200 opacity-40 ring-yellow-200">
                                                                <BsCartCheckFill className="text-lg text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className='flex items-center justify-end'>
                                                            <button className="hidden bg-primary hover:bg-yellow-400  ring-yellow-200 ring-offset-2 px-2 py-2 rounded-md text-gray-700 focus:ring-4 transition duration-300   text-xs md:text-sm lg:text-sm md:flex lg:flex items-center space-x-1" onClick={handleCart}>
                                                                {/* <BsCartCheckFill className="text-lg" /> */}
                                                                {changeCartBtn ? <span className="text-xs" onMouseEnter={() => setCartBtn(false)} onMouseLeave={() => setCartBtn(true)}>Buy Now</span> : <span className="text-xs" onMouseEnter={() => setCartBtn(true)} onMouseLeave={() => setCartBtn(true)}>Cart</span>}

                                                            </button>

                                                            <button className="flex md:hidden lg:hidden border border-gray-200 rounded-full p-2" onClick={handleCart}>
                                                                <AiOutlineShoppingCart className="text-lg text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )


                            )
                        }

                    </div>
                </div>


            </div>
        </>
    );
};

export default ProductCard;
