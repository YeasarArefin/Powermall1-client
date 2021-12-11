import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

const UpArrow = () => {
    return (
        <a href="#hero" className='animate-bounce absolute right-10 bottom-20 bg-primary w-12 h-12 rounded-full flex flex-col justify-center items-center cursor-pointer'>
            <FiArrowUp className='text-lg text-white' />
        </a>
    )
}

export default UpArrow
