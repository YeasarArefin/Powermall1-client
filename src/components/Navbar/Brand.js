import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
    return (
        <div className="flex items-center space-x-2">
            <Link to="/">
                <img src="../../../assets/logo.png" alt="logo" className="object-contain w-36 cursor-pointer" />
            </Link>
        </div>
    )
}

export default Brand
