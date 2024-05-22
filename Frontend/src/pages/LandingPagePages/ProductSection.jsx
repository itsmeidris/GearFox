import React from 'react'
import ProductsShowcase from '../../components/LandingPageComponents/ProductsShowcase'
// import Marquee from '../../components/LandingPageComponents/Marquee'

function ProductSection() {
  return (
    <div className='w-full h-auto bg-myWhite relative pt-4 pb-4 '>
      <div className='text-center'>
        <h1 className='text-4xl font-chillax font-semibold'>Discover the effeciency of</h1>
        <h1 className='text-8xl font-chillax font-semibold'>GEARFOX Products</h1>
      </div>
      <ProductsShowcase/>
      {/* <Marquee/> */}
    </div>
  )
}

export default ProductSection
