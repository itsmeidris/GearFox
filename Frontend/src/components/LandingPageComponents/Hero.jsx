import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";



function Hero() {
  return (
    <>
    
      <h1 className="text-8xl my-5 ml-12">
        The Journey to <br /> a Perfection.
      </h1>
      <div className="flex justify-between mx-12 mt-36">
        <a href="#" className=" text-2xl underline underline-offset-8 mt-28" to="/">
          Book a Free Driving Experience
        </a>
        <div className="grid justify-items-end text-4xl ">
          <p>
            Top performance requires <br />
          </p>
          <p>
            more than perfect conditions <br />
          </p>
          <p>especially just luck.</p>
        </div>
      </div>

      <nav className="flex justify-between mx-12 mt-12  border-t-2">
        <p className="text-l m-5">
          <span className="opacity-75">01/</span> homepage
        </p>
        <p className="my-3 ml-12">
          Experince the new products of GearFox in top form
          <span className="opacity-75">- with</span>
          <br />
          <span className="opacity-75">increased race track performance.</span>
        </p>

        <div className=" flex m-8 ">
          <a href="#"> SCROLL DOWN </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
      </nav>
      
    </>
  );
}

export default Hero;
