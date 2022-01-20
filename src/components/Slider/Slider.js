import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Slider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/headerbanner')
            .then(res => setImages(res.data));
    }, []);


    return (
        <section id="hero" className='lg:h-96 overflow-hidden'>
            <Swiper pagination={true} autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }} speed={150} className="mySwiper">
                {images?.map((image) => (
                    <SwiperSlide key={image?._id}>
                        <a href={image?.link} target="_blank" rel='noreferrer'  >
                            <div className={` w-full h-56 lg:h-96 rounded-lg overflow-hidden`}>
                                <img className="w-full h-full object-contain md:object-cover lg:object-cover" src={image?.img} alt="slider" />
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
