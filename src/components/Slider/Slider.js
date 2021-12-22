import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Slider = () => {
    const [image,setImage] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/headerbanner')
        .then(res => setImage(res?.data?.[0]?.img?.split(',')))
    }, [image])

    return (
        <section id="hero">
            <Swiper pagination={true} autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }} speed={150} className="mySwiper">
                {image?.map((item,index) => (
                    <SwiperSlide key={index}>
                        <img className="object-cover w-full" src={item} alt="slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Slider
