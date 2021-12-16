import React from 'react'

const Input = ({ type, name, id, placeholder,...rest}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            {...rest}
            className="mt-1 ring-blue-200 focus:outline-none focus:ring-2 transition duration-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md py-3 px-4"
        />
    )
}

export default Input
