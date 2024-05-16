import React from 'react'
import ProductsShowcase from '../../components/LandingPageComponents/ProductsShowcase'


function ProductSection() {
  return (
    <div className='w-full h-auto bg-myWhite relative'>
      <div className='text-center'>
        <h1 className='text-4xl font-chillax font-semibold'>Discover the effeciency of</h1>
        <h1 className='text-8xl font-chillax font-semibold'>GEARFOX Products</h1>
      </div>
      <ProductsShowcase/>
    </div>
  )
}

export default ProductSection
