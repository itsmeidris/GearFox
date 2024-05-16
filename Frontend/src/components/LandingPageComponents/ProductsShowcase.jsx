import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css';
import { Navigation } from 'swiper/modules';
import ProductSection from '../../pages/LandingPagePages/ProductSection';

function ProductsShowcase() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper border-2 border-red-400"
      >
        <SwiperSlide>
            <ProductSection/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductSection/>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default ProductsShowcase
