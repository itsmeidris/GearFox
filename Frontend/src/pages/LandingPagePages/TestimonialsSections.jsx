import React from 'react'
import model7 from '../../assets/LpageAssets/ModelsPics/model7.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation ,Autoplay } from 'swiper/modules';
import TestimonyCard from '../../components/LandingPageComponents/TestimonyCard';
import testimonies from '../../utils/testimonials';

function TestimonialsSections() {
  return (
    <div className='bg-myBlack py-[4vh] flex-col items-center p-8'>
      <div className='text-left text-myWhite py-5 mb-4 font-chillax font-semibold'>
        <h1 className='text-[2.5vw]  bg-myRed inline-block p-1 mb-4 rounded-md'>Testimonials</h1>
        <h1 className='text-[3vw] '>With gears that made our client's ride </h1>
        <h1 className='text-[5vw] '>COMPLETLY <span className='border-b-4 border-myRed rounded-md'>THRILLED</span>
        </h1>
      </div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          'textAlign' : 'left',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation ,Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'backgroundImage':
              `url(${model7})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {
        testimonies.map((t ,i) =>{
            return(
                <SwiperSlide key={i}>
                    <TestimonyCard comment={t.comment} img={t.profileImg} name={t.name} userName={t.userName}/>
                </SwiperSlide>
            );
        })               
        }
        
      </Swiper>
    </div>
  )
}

export default TestimonialsSections
