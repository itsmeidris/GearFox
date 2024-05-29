import React from 'react';
import '../style/Content.css';
import bgVideo from '../../assets/LpageAssets/Videos/bgVid.mp4';
// import {Slogan } from './Slogan';
// import img1 from '../../assets/LpageAssets/bgGears.jpeg';
// import img2 from '../../assets/LpageAssets/bgGears2.jpg';
// import { Link } from 'react-router-dom';

function HeroSectionBody() {
  return (
    <div className='bg-myBlack mainContainer z-5 relative '>
      <video playsInline autoPlay muted loop className="bgVid">
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <div className="header font-panchang text-myWhite px-4 pt-[12vh] flex z-5 border-2 border-myWhite">
        <h1>G</h1>
        <h1>E</h1>
        <h1>A</h1>
        <h1>R</h1>
        <h1>F</h1>
        <h1>O</h1>
        <h1>X</h1>
      </div>
      {/* <div className='description flex justify-between items-center w-full'>
        <Slogan />
        <div className="footer-nav flex">
          <div className="img p-4 relative z-[4] w-[30vw] h-auto">
            <img src={img1} className='rounded-3xl'/>
          </div>
          <div className="img2 p-4 relative z-[4] w-[30vw] h-auto">
            <img src={img2} className='rounded-3xl'/>
          </div>
        </div>
      </div> */}
      {/* <button className="cursor-pointer z-5">
          <Link to="/products" className="cursor-pointer">
            <h1 className="text-2xl font-chillax font-semibold bg-myWhite ">
              Explore Products
            </h1>
          </Link>
      </button> */}
    </div>
  );
}

export default HeroSectionBody;
