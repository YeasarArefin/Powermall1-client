import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const ProductsCategory = () => {
    const [categories, setCategories] = useState([]);
    const [products] = useFetch();
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/category')
            .then(res => setCategories(res.data));
    }, []);

    return (
        <div>
            {
                // eslint-disable-next-line array-callback-return
                categories?.map(item => {
                    const pdFound = products.filter(pd => pd?.category?.toLowerCase() === item?.category?.toLowerCase());


                    return (
                        pdFound?.length !== 0 && (
                            <>
                                {item?.banner && (
                                    <>
                                        <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                            setSearchParams({ categories: item?.slug })
                                        }}>
                                            <div className='rounded-md overflow-hidden mb-6 h-20  md:h-36 lg:h-36'>
                                                <img src={item?.banner} alt={item?.slug} className='w-full h-20  md:h-36 lg:h-36 object-contain lg:object-cover hover:opacity-80' />
                                            </div>

                                        </Link>
                                    </>
                                )}
                                
                                <SectionTitle title={item?.category} slug={item?.slug} />
                                <Swiper
                                    slidesPerView={5}
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
                                    className="mySwiper py-8 pb-10" breakpoints={{
                                        320: {
                                            slidesPerView: 2,
                                        },
                                        375: {
                                            slidesPerView: 2,
                                        },
                                        390: {
                                            slidesPerView: 2,
                                        },
                                        414: {
                                            slidesPerView: 2,
                                        },
                                        425: {
                                            slidesPerView: 2,
                                        },
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 5
                                        },
                                        1400: {
                                            slidesPerView: 5
                                        }
                                    }}>
                                    {pdFound?.map(product => (
                                        <SwiperSlide key={product._id} className="h-full">
                                            <ProductCard {...product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </>
                        )
                    );

                })
            }
        </div>
    );
};

export default ProductsCategory;
