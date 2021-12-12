import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([ Navigation, Thumbs]);


const ProductImage = (props) => {
    const { image } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                <SwiperSlide>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: `${image}`
                        },
                        largeImage: {
                            src: `${image}`,
                            width: 1200,
                            height: 1800,
                            isFluidWidth: true,
                        }
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: "https://swiperjs.com/demos/images/nature-2.jpg"
                        },
                        largeImage: {
                            src: "https://swiperjs.com/demos/images/nature-2.jpg",
                            width: 1200,
                            height: 1800,
                            isFluidWidth: true,
                        }
                    }} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                    <img src={`${image}`} alt="phone" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="nature" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductImage
