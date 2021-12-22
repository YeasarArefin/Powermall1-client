import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const BigBanner2 = () => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/salebanner')
            .then(res => setImage(res?.data?.[0]?.img?.split(',')))
    }, [image])

    return (
        <Slide bottom>
            <section className="h-72 mb-8 rounded-lg overflow-hidden">
                <img className='w-full h-full object-cover' src={image[1]} alt="banner" />
            </section>
        </Slide>
    )
}

export default BigBanner2
