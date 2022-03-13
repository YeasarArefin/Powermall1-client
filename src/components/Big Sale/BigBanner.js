import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const BigBanner = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://api.powermall.com.bd/salebanner')
            .then(res => setImages(res?.data));
    }, []);

    return (
        <Slide bottom>
            <section className="h-72 mb-8 rounded-lg overflow-hidden">
                <a href={images[0]?.link}  >
                    <img className='w-full h-full object-cover' src={images[0]?.img} alt="banner" />
                </a>
            </section>
        </Slide>
    );
};

export default BigBanner;
