import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css';
import { Navigation } from 'swiper/modules';
import { productsQualities , jacketImages} from '../../components/LandingPageComponents/ProductsData/data'
import ProductQualities from '../../components/LandingPageComponents/ProductQualities'
import ProductsImage from '../../components/LandingPageComponents/ProductsImage'
import ProductVariants from '../../components/LandingPageComponents/ProductVariants'
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
        <div className='w-full h-96 relative flex '>
        <div className='productsQualties border-2 border-myBlack w-[30%]'>
          {
          productsQualities.map((quality ,i) =>{
            return <ProductQualities 
            key={i} 
            qualityTitle={quality.qualityTitle} 
            qualityDescription={quality.qualityDescription} 
            qualityNumber={quality.qualityNumber}/>
            })
          }
        </div>
      <div className='productsImages border-2 border-black w-[40%]'>
        {
          jacketImages.map((pic ,i) =>{
            return <ProductsImage 
            key={i} 
            jacketImage={pic.jacketInfos.img}/>
          })
        }
      </div>
      <div className='productsVariants border-2 border-black w-[30%]'>
        {
          jacketImages.map((pic,i) =>{
            return (
            <div className='flex'>
              <div>
              <ProductVariants 
              key={i}
              productVariant = {pic.jacketVariants.jacketVar1} 
              />
              <ProductVariants 
              key={i}
              productVariant = {pic.jacketVariants.jacketVar2} 
              />
              <ProductVariants 
              key={i}
              productVariant = {pic.jacketVariants.jacketVar3} 
              />
              <ProductVariants 
              key={i}
              productVariant = {pic.jacketVariants.jacketVar4} 
              />
            </div>
          </div>
          )
          })
        }
      </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
            
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default ProductsShowcase
