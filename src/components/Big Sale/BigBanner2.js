import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const BigBanner2 = () => {
    const [images, setImage] = useState([]);

    useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/salebanner')
            .then(res => setImage(res.data));
    }, []);

    return (
        <Slide bottom>
            <section className="h-72 mb-8 rounded-lg overflow-hidden">
                <a href={images[1]?.link} >
                    <img className='w-full h-full object-cover' src={images[1]?.img} alt="banner" />
                </a>
            </section>
        </Slide>
    );
};

export default BigBanner2;
