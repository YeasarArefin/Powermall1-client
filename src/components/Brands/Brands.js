import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SectionTitle from '../Section Title/SectionTitle';
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/brands')
            .then(res => setBrands(res?.data))
    }, [])

    return (
        <>
            <section className="py-6">
                <SectionTitle title="Brands" />
                <Swiper
                    loop={true}
                    navigation={true}
                    slidesPerView={6}
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
                            slidesPerView: 1,
                        },
                        375: {
                            slidesPerView: 1,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        500: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6
                        },
                        1200: {
                            slidesPerView: 6
                        },
                        1400: {
                            slidesPerView: 6
                        }
                    }}>
                    {brands?.map(item => (
                        <SwiperSlide key={item._id} className="h-full">
                            <Slide bottom>
                                <div className='w-36 h-24 bg-white rounded-lg p-2 box-border'>
                                    <img className='w-24 h-full object-contain mx-auto' src={item?.img} alt={item.brand} />
                                </div>
                            </Slide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Brands
