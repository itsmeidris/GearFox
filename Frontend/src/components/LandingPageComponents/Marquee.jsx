import React, { useEffect } from 'react'
import helmet from '../LandingPageComponents/LandingPagePics/helmet.png'
import boots from '../LandingPageComponents/LandingPagePics/boots.png'
import jackets from '../LandingPageComponents/LandingPagePics/jackets.png'
import gloves from '../LandingPageComponents/LandingPagePics/gloves.png'
import '../style/Content.css';

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
          <img src={helmet}/>
          <h1 className='font-semibold ml-1'>HELMETS</h1>
        </li>
        <li>
          <img src={jackets}/>
          <h1 className='font-semibold ml-1'>JACKETS</h1>
        </li>
        <li>
          <img src={boots}/>
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
