import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [logo,setLogo] = useState();
    useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/logo')
            .then(res => setLogo(res.data[0]))
    },[]);

    return (
        <div className="">
            <Link to="/">
                <img src={logo?.logo} alt={logo?._id} className="w-60 h-12 object-contain cursor-pointer" />
            </Link>
        </div>
    )
}

export default Brand
