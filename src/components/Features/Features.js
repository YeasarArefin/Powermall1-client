import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Features = () => {
    const [featuresData, setFeatureData] = useState([]);

    useEffect(() => {
        axios.get('https://api.powermall.com.bd/feature')
            .then(res => setFeatureData(res?.data))
    }, [])


    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
        <>
            <Swiper
                slidesPerView={4}
                navigation={true}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                className="mySwiper py-8 pb-10" breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 2,
                    },
                    414: {
                        slidesPerView: 2,
                    },
                    425: {
                        slidesPerView: 2,
                    },
                    500: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
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
            {featuresData?.map(feature => (
                <SwiperSlide key={feature?._id}>
                    <Link to={`/${feature?.tag}`} >
                    <div className="rounded-lg cursor-pointer hover:shadow-xl overflow-hidden h-24
                     lg:h-52 transition duration-500" style={{ background: `url(${feature?.img})`, backgroundSize:'cover' }}>
                        <div className="flex flex-col justify-center space-y-1 h-full p-6 box-border ">
                            {/* text  */}
                            <div>
                                    <h3 className="featureTitle font-bold text-white">{feature?.title}</h3>
                                    <p className=" text-white lg:mb-2 featureDesc">{feature?.details}</p>
                            </div>

                            {/* button  */}
                            <div>
                                <Link to={`/${feature?.tag}`} >
                                        <button className={`bg-white w-24 lg:w-28 px-1 py-1 lg:px-3 lg:py-2 lg:mt-2 rounded-full text-gray-600 hover:scale-110 transform transition duration-300 featureDesc`}  >
                                            <span className="">{feature?.name}</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Link>
                </SwiperSlide>
            ))}
            </Swiper>
            
        {/* </div> */}
        </>
    )
}

export default Features
