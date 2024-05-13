import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Content.css';

function HeroSectionHeader() {
  return (
    <>
      <header className='bg-myBlack flex justify-between items-center w-full p-4'>
        <div className="logo">
          <a href="/" className='text-myWhite font-panchang bodrer-2 border-myWhite'>GEARFOX</a>
        </div>
        <div className="links font-chillax text-myWhite flex gap-6 cursor-pointer">
          <a href="/">ABOUT</a>
          <a href="/">PRODUCTS</a>
          <a href="/">FEEDBACK</a>
          <a href="/">CONTACT</a>
        </div>
        <Link to='/signin' className='border-2 border-myWhite rounded-lg px-2 py-1'>
              Login
        </Link>
      </header>
      
    </>
  )
}

export default HeroSectionHeader
