import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

const UpArrow = () => {
    return (
        <a href="#hero" className='animate-bounce absolute right-10 bottom-28 bg-primary w-12 h-12 rounded-full flex flex-col justify-center items-center cursor-pointer'>
            <FiArrowUp className='text-lg text-gray-700' />
        </a>
    )
}

export default UpArrow
