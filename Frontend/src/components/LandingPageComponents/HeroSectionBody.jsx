import React from 'react'
import '../style/Content.css';
import ProductsSlider from '../LandingPageComponents/ProductsSlider';
function HeroSectionBody() {
  return (
    <div className='bg-myBlack mainContainer z-5 relative'>
      <div className="title font-chillax text-myWhite px-4 flex z-5 border-2 border-myWhite">
        <h1>G</h1>
        <h1>E</h1>
        <h1>A</h1>
        <h1>R</h1>
        <h1>F</h1>
        <h1>O</h1>
        <h1>X</h1>
      </div>
      <div className='description flex items-center w-full h-auto'>
        <div className="footer-copy text-myWhite font-chillax z-10">
          <div className='title2 flex flex-col'>
          <h1>Ignite Your Ride</h1>
          <h1>Embrace the Thrill</h1>
          <h1>Master the Road!</h1>
          </div>
        </div>
        <div className="footer-nav">
          <div className="img p-4 relative z-[4] w-full h-auto">
            <ProductsSlider/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionBody
