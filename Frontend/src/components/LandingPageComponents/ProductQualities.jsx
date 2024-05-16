import React from 'react'

function ProductQualities(props) {
  return (
    <div className='flex justify-between items-center mt-8 mb-8 ml-2 mr-2'>
      <div>
        <h1 className='text-3xl font-bold font-chillax'>{props.qualityTitle}</h1>
        <h1 className='text-1xl max-w-96'>{props.qualityDescription}</h1>
      </div>
      <div>
        <h1 className='text-myGrey font-panchang font-bold text-2xl'>{props.qualityNumber}</h1>
      </div>
    </div>
  )
}

export default ProductQualities
