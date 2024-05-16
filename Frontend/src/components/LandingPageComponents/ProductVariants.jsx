import React from 'react'

function ProductVariants(props) {
  return (
    <>
    <div className='border-2 border-red-800 relative w-[75px] h-[75px]'>
      <img src={props.productVariant} className='absolute w-full h-full'/>
    </div>
    
    </>
  )
}

export default ProductVariants
