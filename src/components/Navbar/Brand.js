import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [logo,setLogo] = useState();
    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/logo')
            .then(res => setLogo(res.data[0]))
    },[]);

    return (
        <div className="">
            <Link to="/">
                <img src={logo?.logo} alt={logo?._id} className="object-contain  w-36 cursor-pointer" />
            </Link>
        </div>
    )
}

export default Brand
