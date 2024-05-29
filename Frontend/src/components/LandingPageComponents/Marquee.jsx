import React, { useEffect } from 'react'
// import helmet from '../../assets/LpageAssets/ProductsIcons/helmet.png'
// import boots from '../../assets/LpageAssets/ProductsIcons/boots.png'
// import jackets from '../../assets/LpageAssets/ProductsIcons/jackets.png'
import gloves from '../../assets/LpageAssets/ProductsIcons/gloves.png'
import '../style/Content.css';
import { GiRubberBoot } from "react-icons/gi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { GiSleevelessJacket } from "react-icons/gi";


function Marquee() {
    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
    
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
        for(let i = 0; i < marqueeElementsDisplayed; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    
        return () => {
        };
      }, []); 
  return (
    <>
    <div className="marquee">
      <ul className="marquee-content">
        <li>
        <GiFullMotorcycleHelmet />
          {/* <img src={helmet}/> */}
          <h1 className='font-semibold ml-1'>HELMETS</h1>
        </li>
        <li>
        <GiSleevelessJacket />
          {/* <img src={jackets}/> */}
          <h1 className='font-semibold ml-1'>JACKETS</h1>
        </li>
        <li>
        <GiRubberBoot />
          {/* <img src={boots}/> */}
          <h1 className='font-semibold ml-1'>BOOTS</h1>
        </li>
        <li>
          <img src={gloves}/>
          <h1 className='font-semibold ml-1'>GLOVES</h1>
        </li>
       </ul>
    </div>
    </>
  )
}

export default Marquee
