import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center my-24 w-full '>
            <div>
                <img className='animate-pulse w-96 object-contain' src="../../assets/404.png" alt="error page" />
            </div>
            <Link to="/">
                <button className='bg-primary text-white rounded-full px-6 py-3 focus:outline-none hover:bg-blue-500 transform hover:scale-110 transition duration-500'>Go to home</button>
            </Link>
        </div>
    )
}

export default ErrorPage
