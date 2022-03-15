import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://api.powermall.com.bd/brands')
            .then(res => setBrands(res?.data))
    }, [])

    return (
        <>
            <section className="py-6">
                <h1 className="text-gray-700 text-left py-3 capitalize text-xl font-semibold ">Brands</h1>
                <Swiper
                    loop={false}
                    navigation={true}
                    slidesPerView={8}
                    centeredSlides={false}
                    spaceBetween={10}
                    grabCursor={true}
                    pagination={{
                        "clickable": true
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    className="mySwiper py-8 pb-10 px-10" breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        375: {
                            slidesPerView: 3,
                        },
                        414: {
                            slidesPerView: 3,
                        },
                        425: {
                            slidesPerView: 3,
                        },
                        500: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 6
                        },
                        1200: {
                            slidesPerView: 8
                        },
                        1400: {
                            slidesPerView:8
                        }
                    }}>
                    {brands?.map(item => (
                        <SwiperSlide key={item._id} className="h-full">
                                <div className=' h-24 bg-white rounded-md p-4 box-border'>
                                    <img className='w-12 md:w-18 lg:w-18 h-full object-contain mx-auto' src={item?.img} alt={item.brand} />
                                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Brands
