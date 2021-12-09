import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Slider = () => {
    const images = [
        { id: 1, image: 'https://links.papareact.com/gi1'}, 
        { id: 1, image: 'https://links.papareact.com/6ff'},
        { id: 1, image: 'https://links.papareact.com/7ma'},
    ]
    return (
        <div>
            <Swiper pagination={true} autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }} speed={150} className="mySwiper">
                {images?.map(image => (
                    <SwiperSlide key={image.id}>
                        <img className="object-cover w-full" src={image.image} alt="slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
