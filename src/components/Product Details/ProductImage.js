import React, { useState } from 'react';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Thumbs]);


const ProductImage = (props) => {
    const { img, ytLink } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const image = img?.split(',');
    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff"
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2">

                {/* changed code */}

                {/* <SwiperSlide>
                    <img src={image?.[0]} className='w-full mx-auto   object-fill' alt="nature" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image?.[1]} className='w-full mx-auto   object-fill' alt="nature" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image?.[2]} className='w-full mx-auto   object-fill' alt="nature" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image?.[3]} className='w-full mx-auto   object-fill' alt="nature" />
                </SwiperSlide> */}

                {
                    image?.[0] && <SwiperSlide>
                        <img src={image?.[0]} className='w-full mx-auto   object-fill' alt="nature" />
                    </SwiperSlide>
                }

                {
                    image?.[1] && <SwiperSlide>
                        <img src={image?.[1]} className='w-full mx-auto   object-fill' alt="nature" />
                    </SwiperSlide>
                }

                {
                    image?.[2] && <SwiperSlide>
                        <img src={image?.[2]} className='w-full mx-auto   object-fill' alt="nature" />
                    </SwiperSlide>
                }

                {
                    image?.[3] && <SwiperSlide>
                        <img src={image?.[3]} className='w-full mx-auto   object-fill' alt="nature" />
                    </SwiperSlide>
                }

                {
                    ytLink && (
                        <SwiperSlide>
                            <iframe width="450" height="450" src={ytLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                    )
                }

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                className="mySwiper">

                {
                    image?.[0] && <SwiperSlide>
                        <img src={image?.[0]} className='w-full mx-auto   object-contain' alt="nature" />
                    </SwiperSlide>
                }

                {
                    image?.[1] && <SwiperSlide>
                        <img src={image?.[1]} className='w-full mx-auto   object-contain' alt="nature" />
                    </SwiperSlide>
                }

                {
                    image?.[2] && <SwiperSlide>
                        <img src={image?.[2]} className='w-full mx-auto   object-contain' alt="nature" />
                    </SwiperSlide>
                }

                {
                    image?.[3] && <SwiperSlide>
                        <img src={image?.[3]} className='w-full mx-auto   object-contain' alt="nature" />
                    </SwiperSlide>
                }


                {
                    ytLink && (
                        <SwiperSlide>
                            <iframe width="100" height="100" src={ytLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>

                    )
                }

            </Swiper>
        </div>
    );
};

export default ProductImage;
