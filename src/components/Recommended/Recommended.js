import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);
const Recommended = () => {
    const [images, setImages] = useState([]);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        axios.get('https://api.powermall.com.bd/recomendedbanner')
            .then(res => setImages(res.data));
    }, []);

    //tablet mode 
    const changeNav = () => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);

        }
    };

    useEffect(() => {
        window.addEventListener('resize', changeNav);
    }, [])

    return (
        <>
            <section className="py-6">
                {/* title  */}
                <h1 className="text-gray-700 text-left py-3 capitalize text-xl font-semibold ">Recommended</h1>


            </section>
            {mobile ? (
                <>
                    <Swiper
                        slidesPerView={4}
                        navigation={true}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            "clickable": true
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        className="mySwiper py-8 pb-10" breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            414: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3
                            },
                            1200: {
                                slidesPerView: 3
                            },
                            1400: {
                                slidesPerView: 3
                            }
                        }}>
                        {images.map((image) => (
                            <SwiperSlide  key={image?._id}>
                                <div className="col-span-1">
                                    <div className="flex flex-col items-center overflow-hidden rounded-lg">
                                        <a href={image?.link}>
                                            <img src={image?.img} alt="recommended" className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-125 transform transition duration-500" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                    <>
                        {/* cards  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
                            {images.map((image) => (
                                <Slide bottom key={image?._id}>
                                    <div className="col-span-1">
                                        <div className="flex flex-col items-center overflow-hidden rounded-lg">
                                            <a href={image?.link} >
                                                <img src={image?.img} alt="recommended" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-125 transform transition duration-500" />
                                            </a>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    </>
            )}
            
        </>
    );
};

export default Recommended;
