import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        axios.get('https://api.powermall.com.bd/category')
            .then(res => {
                const newData = res?.data?.sort((a, b) => a?.position - b?.position);
                setCategories(newData)
            })
    }, [])


    return (
        <>
            <section className="py-6">
                <h1 className="text-gray-700 text-left py-3 capitalize text-xl font-semibold">Popular Categories</h1>
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
                            slidesPerView: 3,
                        },
                        375: {
                            slidesPerView:3,
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
                            slidesPerView: 8
                        }
                    }}>
                    {categories?.map(item => (
                        <SwiperSlide key={item._id} className="h-full">
                                <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                    setSearchParams({ categories: item?.slug })
                                }}>
                                    <div className='bg-white rounded-md p-4 box-border flex flex-col items-center justify-center h-full space-y-2 hover:scale-105 transform transition duration-500 cursor-pointer' style={{height:'120px'}}>
                                        <img className="w-12 md:w-14 lg:w-w-14 object-contain" src={item.img} alt={item.category} />
                                        <p className="text-gray-600 text-xs pt-2">{item.category}</p>
                                    </div>
                                    </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default PopularCategories
