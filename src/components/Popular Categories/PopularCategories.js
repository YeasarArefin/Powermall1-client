import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import { Link, useSearchParams } from 'react-router-dom';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const PopularCategories = () => {
    const [categories, setCategories] = useState([])
        // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/category')
            .then(res => setCategories(res.data))
    }, [])


    return (
        <>
            <section className="py-6">
                <h1 className="text-primary text-left py-3 capitalize text-2xl font-bold ">Popular Categories</h1>
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
                    {categories?.map(item => (
                        <SwiperSlide key={item._id} className="h-full">
                            <Slide bottom key={item._id}>
                                <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                    setSearchParams({ categories: item?.slug })
                                }}>
                                    <div className='bg-white rounded-lg p-3 box-border shadow-xl flex flex-col items-center justify-center h-full space-y-2 hover:scale-105 transform transition duration-500 cursor-pointer'>
                                        <img className="w-16 object-contain" src={item.img} alt={item.category} />
                                        <p className="text-gray-600">{item.category}</p>
                                    </div>
                                    </Link>
                            </Slide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default PopularCategories
