import React from 'react'

function ProductsImage(props) {
  return (
    <div className=''>
      <img src={props.productImage} className='w-96 h-auto'/>
    </div>
  )
}

export default ProductsImage
