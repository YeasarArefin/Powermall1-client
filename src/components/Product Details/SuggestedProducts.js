import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import ProductCard from '../Products/ProductCard';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const SuggestedProducts = (props) => {
    const { _id,category} = props;
    const [products] = useFetch();

    const pds = products?.filter(item => item?.category?.toLowerCase() === category.toLowerCase())

  return (
      <>
          <div>
              {pds?.length > 1 && <h3 className="text-lg leading-6 font-medium text-gray-900">Suggest Products</h3>}
              
              {pds?.length > 1 && (
                  <>
                      <Swiper
                          slidesPerView={4}
                          centeredSlides={false}
                          navigation={true}
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
                                  slidesPerView: 4
                              },
                              1400: {
                                  slidesPerView: 4
                              }
                          }}>
                          {pds?.filter(item => item?._id !== _id)?.slice(0,8)?.map(item => (
                              <SwiperSlide key={item._id} className="h-full">
                                  <ProductCard {...item} />
                              </SwiperSlide>
                          ))}

                      </Swiper>
                  </>
              )}
              
              
          </div>
      </>
  );
};

export default SuggestedProducts;
