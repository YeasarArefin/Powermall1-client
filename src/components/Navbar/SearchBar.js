import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { BsSearch } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SearchBar = ({ searchShow}) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [serachBarMode, setSearchBarMode] = useState(false);

    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const { newUser } = useAuth();

    useEffect(() => {
        axios.get('https://api.powermall.com.bd/products')
            .then(res => setProducts(res?.data));
    }, []);

    const onSubmit = data => {
        setSearchParams({ search: data?.search });
        navigate(`/shops?search=${data?.search}`);
        reset();
    };

    const changeNav = () => {
        if (window.innerWidth < 1250) {
            setMobileNav(true);
        } else {
            setMobileNav(false);

        }
    };
    const changeSearchBar = () => {
        if (window.innerWidth > 1250) {
            setSearchBarMode(true);
        } else {
            setSearchBarMode(false);

        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', changeNav);
        window.addEventListener('resize', changeSearchBar);
    }, [])


    return (
        <>
        {mobileNav ? (
            <>
                    <form className="flex items-center space-x-3 p-2" onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                        <div className='relative w-full'>
                            <BsSearch className='absolute top-3.5 left-4 text-sm text-gray-600 hover:text-primary cursor-pointer' />
                            <input
                                type="text" placeholder="Search Products" className="text-sm ring-primary focus:ring-1 w-full bg-gray-100 transition duration-500 focus:outline-none focus:bg-white rounded-md py-2.5 pl-12 pr-4"
                                {...register("search", { required: true })}
                                list="title" id="brand"
                            />
                        </div>
                        <datalist id="title">
                            {products?.map(item => (
                                <option value={item?.name?.toLowerCase()} key={item?._id} />
                            ))}
                        </datalist>
                    </form>
            </>
        ) : (
            <>
                        {searchShow ? (
                            <>
                                <form className="flex items-center space-x-3 p-2" onSubmit={handleSubmit(onSubmit)} style={{ width: '350px',margin:'auto' }}>
                                    <div className='relative w-full'>
                                        <BsSearch className='absolute top-3.5 left-4 text-sm text-gray-600 hover:text-primary cursor-pointer' />
                                        <input
                                            type="text" placeholder="Search Products" className="text-sm ring-primary focus:ring-1 w-full bg-gray-100 transition duration-500 focus:outline-none focus:bg-white rounded-md py-2.5 pl-12 pr-4"
                                            {...register("search", { required: true })}
                                            list="title" id="brand"
                                        />
                                    </div>
                                    <datalist id="title">
                                        {products?.map(item => (
                                            <option value={item?.name?.toLowerCase()} key={item?._id}/>
                                        ))}
                                    </datalist>
                                </form>
                            </>
                        ): (
                                serachBarMode ? (
                                    <>
                                        <form className="flex items-center space-x-2 p-2 " style={{ width: `${newUser ? "895px" : '795px'}` }} onSubmit={handleSubmit(onSubmit)} >
                                            <div className='relative w-full '>
                                                <BsSearch className='absolute top-3.5 left-4 text-sm text-gray-600 hover:text-primary cursor-pointer' />
                                                <input
                                                    type="text" placeholder="Search Products" className="text-sm ring-primary focus:ring-1 w-full bg-gray-100 transition duration-500 focus:outline-none focus:bg-white rounded-md py-2.5 pl-12 pr-4"
                                                    {...register("search", { required: true })}
                                                    list="title" id="brand"
                                                />
                                            </div>
                                            <datalist id="title">
                                                {products?.map(item => (
                                                    <option value={item?.name?.toLowerCase()} key={item?._id} />
                                                ))}
                                            </datalist>
                                        </form>
                                    </>
                                ) : (
                                        <>
                                            <form className="flex items-center space-x-2 p-2 " style={{ width: `${newUser ? "700px" : '600px'}` }} onSubmit={handleSubmit(onSubmit)} >
                                                <div className='relative w-full '>
                                                    <BsSearch className='absolute top-3.5 left-4 text-sm text-gray-600 hover:text-primary cursor-pointer' />
                                                    <input
                                                        type="text" placeholder="Search Products" className="text-sm ring-primary focus:ring-1 w-full bg-gray-100 transition duration-500 focus:outline-none focus:bg-white rounded-md py-2.5 pl-12 pr-4"
                                                        {...register("search", { required: true })}
                                                        list="title" id="brand"
                                                    />
                                                </div>
                                                <datalist id="title">
                                                    {products?.map(item => (
                                                        <option value={item?.name?.toLowerCase()} key={item?._id} />
                                                    ))}
                                                </datalist>
                                            </form>
                                        </>
                                )
                           
                        )}
                        
            </>
        ) }
        </>
        
    );
};

export default SearchBar;
