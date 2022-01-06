import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { BsSearch } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/products')
            .then(res => setProducts(res?.data));
    }, []);

    const onSubmit = data => {
        setSearchParams({ search: data?.search });
        navigate(`/shops?search=${data?.search}`);
        reset();
    };


    return (
        <form className="flex items-center space-x-3 p-2" onSubmit={handleSubmit(onSubmit)} style={{ width: '500px' }}>
            <div className='relative w-full'>
                <BsSearch className='absolute top-3 left-4 text-xl text-gray-600' />
                <input
                    type="text" placeholder="Search Products" className="w-full border border-gray-300 bg-gray-100 transition duration-500 focus:outline-none rounded-md py-2.5 pl-12 pr-4"
                    {...register("search", { required: true })}
                    list="title" id="brand"
                />
            </div>
            <datalist id="title">
                {products?.map(item => (
                    <option value={item?.name?.toLowerCase()} />
                ))}
            </datalist>
            {/* <Link to={`/shops?search=${data}`} onClick={() => { */}
            {/* // setSearchParams({ search: data }) */}
            {/* // }}> */}
            {/* <button type="submit">
                <AiOutlineSearch className="cursor-pointer text-xl text-gray-400 w-9 h-9 p-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition duration-500 focus:shadow-xl" />
            </button> */}
            {/* </Link> */}
        </form>
    );
};

export default SearchBar;
