import React from 'react'
import HeroSectionHeader from '../components/LandingPageComponents/HeroSectionHeader'
import Marquee from '../components/LandingPageComponents/Marquee'
import HeroSectionBody from '../components/LandingPageComponents/HeroSectionBody'

function HeroSection() {
  
  return (
    <div className='overflow-hidden relative border-4 border-red-600'>
      <HeroSectionHeader/>
      <HeroSectionBody/>
      {/* <Marquee/> */}
    </div>
  )
}

export default HeroSection
