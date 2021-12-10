import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import SectionTitle from '../Section Title/SectionTitle';
import ProductCard from './ProductCard';
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const AcCategory = () => {
    const [products] = useFetch();


    return (
        <>
            <section className="py-6">
                <SectionTitle title="Air Conditioner" />
                <Swiper
                    slidesPerView={4}
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
                            slidesPerView: 4
                        },
                        1400: {
                            slidesPerView: 4
                        }
                    }}>
                    {products?.slice(6,12)?.map(product => (
                        <SwiperSlide key={product.id} className="h-full">
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default AcCategory
