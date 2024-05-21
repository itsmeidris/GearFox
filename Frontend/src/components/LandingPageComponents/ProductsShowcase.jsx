import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css';
import '../style/productQuality.css';
import { Navigation ,Autoplay ,Pagination} from 'swiper/modules';
import { productsQualities, jacketImages ,glovesImages ,helmetsImages ,bootsImages} from '../../utils/data.js';
import ProductQualities from '../../components/LandingPageComponents/ProductQualities';
import ProductsImage from '../../components/LandingPageComponents/ProductsImage';
import ProductVariants from '../../components/LandingPageComponents/ProductVariants';

function ProductsShowcase() {
  const [mainJacket, setMainJacket] = useState(jacketImages[0].jacketVariants.img);
  const [mainGloves, setMainGloves] = useState(glovesImages[0].glovesVariants.img);
  const [mainHelmet, setMainHelmet] = useState(helmetsImages[0].helemtsVariants.img);
  const [mainBoots, setMainBoots] = useState(bootsImages[0].bootsVariants.img);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper border-2 border-myBlack pt-2 pb-2"
        >
        <SwiperSlide>
          <div className='w-full h-fit relative flex flex-wrap justify-between items-center px-8'>
            <div className='productQuality border-2 border-myBlack w-fit h-auto bg-myWhite rounded-2xl relative'>
              {productsQualities.map((quality, i) => (
                <ProductQualities 
                  key={i} 
                  qualityTitle={quality.qualityTitle} 
                  qualityDescription={quality.qualityDescription} 
                  qualityNumber={quality.qualityNumber} 
                />
              ))}
            </div>

            <div className='productsImages flex flex-row-reverse'>
              {jacketImages.map((pic, i) => (
                <div key={i}>
                  <div className='flex flex-col h-full justify-around'>
                    <ProductVariants 
                      productVariant={pic.jacketVariants.jacketVar1} 
                      onMouseEnter={() => setMainJacket(pic.jacketVariants.jacketVar1)} 
                      onMouseLeave={() => setMainJacket(pic.jacketVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.jacketVariants.jacketVar2} 
                      onMouseEnter={() => setMainJacket(pic.jacketVariants.jacketVar2)} 
                      onMouseLeave={() => setMainJacket(pic.jacketVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.jacketVariants.jacketVar3} 
                      onMouseEnter={() => setMainJacket(pic.jacketVariants.jacketVar3)} 
                      onMouseLeave={() => setMainJacket(pic.jacketVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.jacketVariants.jacketVar4} 
                      onMouseEnter={() => setMainJacket(pic.jacketVariants.jacketVar4)} 
                      onMouseLeave={() => setMainJacket(pic.jacketVariants.img)}
                    />
                  </div>
                </div>
              ))}
              {jacketImages.map((pic, i) => (
              <ProductsImage key={i} productImage={mainJacket} />
              ))}
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-fit relative flex flex-wrap justify-between items-center px-8'>
            <div className='productQuality border-2 border-myBlack w-fit h-auto bg-myWhite rounded-2xl relative'>
              {productsQualities.map((quality, i) => (
                <ProductQualities 
                  key={i} 
                  qualityTitle={quality.qualityTitle} 
                  qualityDescription={quality.qualityDescription} 
                  qualityNumber={quality.qualityNumber} 
                />
              ))}
            </div>
            <div className='productsImages flex flex-row-reverse'>

        {<div className='productsImages flex flex-row-reverse'>
              {glovesImages.map((pic, i) => (
                <div key={i}>
                  <div className='flex flex-col h-full justify-around'>
                    <ProductVariants 
                      productVariant={pic.glovesVariants.gloveVar1} 
                      onMouseEnter={() => setMainGloves(pic.glovesVariants.gloveVar1)} 
                      onMouseLeave={() => setMainGloves(pic.glovesVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.glovesVariants.gloveVar2} 
                      onMouseEnter={() => setMainGloves(pic.glovesVariants.gloveVar2)} 
                      onMouseLeave={() => setMainGloves(pic.glovesVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.glovesVariants.gloveVar3} 
                      onMouseEnter={() => setMainGloves(pic.glovesVariants.gloveVar3)} 
                      onMouseLeave={() => setMainGloves(pic.glovesVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.glovesVariants.gloveVar4} 
                      onMouseEnter={() => setMainGloves(pic.glovesVariants.gloveVar4)} 
                      onMouseLeave={() => setMainGloves(pic.glovesVariants.img)}
                    />
                  </div>
                </div>
              ))}
              {glovesImages.map((pic, i) => (
              <ProductsImage key={i} productImage={mainGloves} />
              ))}
            </div>           }
            </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-fit relative flex flex-wrap justify-between items-center px-8'>
            <div className='productQuality border-2 border-myBlack w-fit h-auto bg-myWhite rounded-2xl relative'>
              {productsQualities.map((quality, i) => (
                <ProductQualities 
                  key={i} 
                  qualityTitle={quality.qualityTitle} 
                  qualityDescription={quality.qualityDescription} 
                  qualityNumber={quality.qualityNumber} 
                />
              ))}
            </div>
            <div className='productsImages flex flex-row-reverse'>

        {<div className='productsImages flex flex-row-reverse'>
              {helmetsImages.map((pic, i) => (
                <div key={i}>
                  <div className='flex flex-col h-full justify-around'>
                    <ProductVariants 
                      productVariant={pic.helemtsVariants.helemetVar1} 
                      onMouseEnter={() => setMainHelmet(pic.helemtsVariants.helemetVar1)} 
                      onMouseLeave={() => setMainHelmet(pic.helemtsVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.helemtsVariants.gloveVar2} 
                      onMouseEnter={() => setMainHelmet(pic.helemtsVariants.helemetVar2)} 
                      onMouseLeave={() => setMainHelmet(pic.helemtsVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.helemtsVariants.gloveVar3} 
                      onMouseEnter={() => setMainHelmet(pic.helemtsVariants.helemetVar3)} 
                      onMouseLeave={() => setMainHelmet(pic.helemtsVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.helemtsVariants.gloveVar4} 
                      onMouseEnter={() => setMainHelmet(pic.helemtsVariants.helemetVar4)} 
                      onMouseLeave={() => setMainHelmet(pic.helemtsVariants.img)}
                    />
                  </div>
                </div>
              ))}
              {helmetsImages.map((pic, i) => (
              <ProductsImage key={i} productImage={mainHelmet} />
              ))}
            </div>           }
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-fit relative flex flex-wrap justify-between items-center px-8'>
            <div className='productQuality border-2 border-myBlack w-fit h-auto bg-myWhite rounded-2xl relative'>
              {productsQualities.map((quality, i) => (
                <ProductQualities 
                  key={i} 
                  qualityTitle={quality.qualityTitle} 
                  qualityDescription={quality.qualityDescription} 
                  qualityNumber={quality.qualityNumber} 
                />
              ))}
            </div>
            <div className='productsImages flex flex-row-reverse'>

        {<div className='productsImages flex flex-row-reverse'>
              {bootsImages.map((pic, i) => (
                <div key={i}>
                  <div className='flex flex-col h-full justify-around'>
                    <ProductVariants 
                      productVariant={pic.bootsVariants.bootVar1} 
                      onMouseEnter={() => setMainBoots(pic.bootsVariants.bootVar1)} 
                      onMouseLeave={() => setMainBoots(pic.bootsVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.bootsVariants.bootVar2} 
                      onMouseEnter={() => setMainBoots(pic.bootsVariants.bootVar2)} 
                      onMouseLeave={() => setMainBoots(pic.bootsVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.bootsVariants.bootVar3} 
                      onMouseEnter={() => setMainBoots(pic.bootsVariants.bootVar3)} 
                      onMouseLeave={() => setMainBoots(pic.bootsVariants.img)}
                    />
                    <ProductVariants 
                      productVariant={pic.bootsVariants.bootVar4} 
                      onMouseEnter={() => setMainBoots(pic.bootsVariants.bootVar4)} 
                      onMouseLeave={() => setMainBoots(pic.bootsVariants.img)}
                    />
                  </div>
                </div>
              ))}
              {helmetsImages.map((pic, i) => (
              <ProductsImage key={i} productImage={mainBoots} />
              ))}
            </div>}
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}

export default ProductsShowcase;
