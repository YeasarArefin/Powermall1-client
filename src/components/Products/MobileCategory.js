import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import SectionTitle from '../Section Title/SectionTitle';
import ProductCard from './ProductCard';
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const MobileCategory = () => {
    const [products] = useFetch();
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <section className="py-6">
                <SectionTitle title="Mobile Phones" />
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
                    {products?.slice(0, 6)?.map(product => (
                        <SwiperSlide key={product._id} className="h-full">
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='my-6 flex justify-center items-center'>
                    <Link to={`/shops?categories=mobile`}>
                        <button className=' bg-primary hover:bg-blue-600 ring-blue-200 ring-offset-2 px-4 py-3 text-white focus:ring-4 transition duration-300 rounded-md   uppercase text-sm flex items-center space-x-1'>Explore More</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default MobileCategory
