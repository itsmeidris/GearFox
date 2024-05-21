import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Content.css';

function HeroSectionHeader() {
  return (
    <>
      <header className='myHeader flex justify-between items-center w-10/12 p-4 fixed z-20 '>
        <div className="logo">
          <a href="/" className='text-myWhite font-panchang bodrer-2 border-myWhite'>GEARFOX</a>
        </div>
        <div className="links font-chillax text-myWhite flex gap-6 cursor-pointer">
          <a href="/">HOME</a>
          <a href="/">PRODUCTS</a>
          <a href="/">FEEDBACK</a>
          <a href="/">CONTACT</a>
        </div>
        <Link to='/signin' className='border-2 border-myWhite bg-myWhite rounded-lg px-4 py-1 font-chillax font-semibold'>
              Login
        </Link>
        
      </header>
      
    </>
  )
}

export default HeroSectionHeader
