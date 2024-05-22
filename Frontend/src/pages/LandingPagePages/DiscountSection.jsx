import React from 'react'
import { Discount } from '../../components/LandingPageComponents/Discount'

function DiscountSection() {
  return (
    <div className='flex font-chillax bg-myBlack py-[4vh]'>
      <div>
        <h1 className='text-[3vw] text-myWhite'>DISCOVER OUR LATEST DISCOUNTS</h1>
      </div>
      <Discount/>
    </div>
  )
}

export default DiscountSection
