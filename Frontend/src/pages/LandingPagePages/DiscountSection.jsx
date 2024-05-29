import React from 'react'
import { Discount } from '../../components/LandingPageComponents/Discount'
import { FlipWords } from '../../components/LandingPageComponents/FlipWords'

function DiscountSection() {
  const words = ["-10%", "-20%", "-30%", "-40%"]
  return (
    <div className='flex flex-col font-chillax bg-myBlack py-[4vh] p-8'>
      <div className='text-left text-myWhite py-5 mb-4 font-chillax font-semibold'>
        <h1 className='text-[2.5vw]  bg-myRed inline-block p-1 mb-4 rounded-md'>Discounts</h1>
        <h1 className='text-[3vw] '>Offer discounts that reaches</h1>
        <h1 className='text-[5vw] '>MORE THAN
          <span className="text-[5vw] mx-4">
            <FlipWords words={words} /> <br />
          </span> 
        </h1>
      </div>
      <Discount/>
    </div>
  )
}

export default DiscountSection
