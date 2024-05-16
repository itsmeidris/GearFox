import React from 'react'
import { productsQualities , jacketImages} from '../../components/LandingPageComponents/ProductsData/data'
import ProductQualities from '../../components/LandingPageComponents/ProductQualities'
import ProductsImage from '../../components/LandingPageComponents/ProductsImage'
import ProductVariants from '../../components/LandingPageComponents/ProductVariants'

function ProductSection() {
  return (
    <div className='w-full h-auto bg-myWhite relative'>
      <div className='text-center'>
        <h1 className='text-4xl font-chillax font-semibold'>Discover the effeciency of</h1>
        <h1 className='text-8xl font-chillax font-semibold'>GEARFOX Products</h1>
      </div>
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
      <div className='productsImages border-2 border-black w-[40%] relative'>
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
    </div>
  )
}

export default ProductSection
