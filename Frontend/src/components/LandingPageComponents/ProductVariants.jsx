import React from 'react'

function ProductVariants(props) {
  return (
    <>
    <div 
    className='productVariant relative w-[75px] h-[75px] bg-myWhite rounded-lg border-2 border-myBlack cursor-pointer z-3' 
    onMouseEnter={props.onMouseEnter} 
    onMouseLeave={props.onMouseLeave}>
      <img src={props.productVariant} className='absolute w-20 h-auto'/>
    </div>  
    </>
  )
}

export default ProductVariants
