import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className="flex items-center space-x-3 p-2 w-96">
            <input type="text" placeholder="Search products" className="w-full border border-gray-300 bg-gray-100 transition duration-500 focus:outline-none rounded-md py-2.5 px-4"/>
            <AiOutlineSearch className="cursor-pointer text-xl text-gray-400 w-9 h-9 p-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition duration-500 focus:shadow-xl" />
        </div>
    )
}

export default SearchBar
