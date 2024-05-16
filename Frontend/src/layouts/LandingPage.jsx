import React, { useEffect } from 'react'
import Loader from '../components/LandingPageComponents/Loader'
import HeroSection from '../pages/LandingPagePages/HeroSection'
import ProductsShowcase from '../components/LandingPageComponents/ProductsShowcase';
import ProductSection from '../pages/LandingPagePages/ProductSection';



function LandingPage() {
  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".count p");
      let currentValue = 0;
  
      function updateCounter() {
        if (currentValue < 100) {
          let increment = Math.floor(Math.random() * 10) + 1;
          currentValue = Math.min(currentValue + increment, 100);
          counterElement.textContent = currentValue;
  
          let delay = Math.floor(Math.random() * 200) + 25;
          setTimeout(updateCounter, delay);
        }
      }
      updateCounter();
    }
    startLoader();
  
    gsap.to('.count', { opacity: 0, delay: 3.5, duration: 0.5 });
  
    let textWrapper = document.querySelector(".ml16");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    anime.timeline({loop: false})
    .add({
        targets : '.ml16 .letter',
        translateY : [-100 ,0],
        easing :'easeOutExpo',
        duration : 1500,
        delay :(el ,i) => 30 * i
    })
    .add({
        targets : '.ml16 .letter',
        translateY : [0 ,100],
        easing :'easeOutExpo',
        duration : 3000,
        delay : (el ,i) => 2000 + 30 * i
    });

    gsap.to('.pre-loader' ,{
        scale : 0.5,
        ease : 'power4 .inOut',
        duration : 2,
        delay : 3
    });

    gsap.to('.loader' ,{
        height : '0',
        ease : 'power4 .inOut',
        duration : 1.5,
        delay: 3.75
    });

    gsap.to('.loader-bg' ,{
        height : '0',
        ease : 'power4 .inOut',
        duration : 1.5,
        delay : 4
    });

    gsap.to('.loader-2' ,{
        clipPath: 'polygon(0% 0% ,100% 0% ,100% 0% ,0% 0%)',
        ease : 'power4 .inOut',
        duration : 1.5,
        delay : 3.5
    });
   
    gsap.from('.title h1' ,{
        y : 200,
        ease : 'power4.inOut',
        duration : 1.5,
        delay : 3.75,
        stagger : 0.05
    });
    gsap.to('.mainContainer' ,{
      y : 0,
      ease : 'power4.inOut',
      duration : 1,
      delay : 3.75,
      stagger : 0.05
  });

    gsap.to('.img' ,{
        clipPath: 'polygon(0% 0% ,100% 0% ,100% 100% ,0% 100%)',
        ease : 'power4 .inOut',
        duration : 1.5,
        delay : 6.5,
        stagger : 0.25
    });

    gsap.from('.marquee' ,{
      y : 200,
      ease : 'power4.inOut',
      duration : 1.5,
      delay : 3.75,
      stagger : 0.05
  });
  }, []);
  
  return (
    <>
      <Loader/>
      <HeroSection/>
      <ProductSection/>
      {/* <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  )
}

export default LandingPage
