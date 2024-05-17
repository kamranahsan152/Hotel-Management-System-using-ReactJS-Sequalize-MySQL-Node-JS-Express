import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Slider.scss";
import AOS from "aos";
import "aos/dist/aos"
import { sliderdata } from "./slider-data";
const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const sliderlength = sliderdata.length

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () =>{
    setcurrentSlide(currentSlide === sliderlength -1 ? 0 : currentSlide+1)
  }
  const prevSlide = () =>{
    setcurrentSlide(currentSlide ===  0 ? sliderlength-1 : currentSlide+1)
  }

  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(()=>{
    if(autoScroll){
      auto();
    }
    return () => clearInterval(slideInterval)
  })

  useEffect(()=>{
    AOS.init({  
      duration: 2000
    })
    setcurrentSlide(0);
  }, [])
  return (

    <div className="slider">
    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
    <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
    {sliderdata.map((slide, index) => {
      return (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <>
              <img src={slide.image} alt="slide"/>
              <div className="content" data-aos = "slide-up">
                <h2 className="text">{slide.heading}</h2>
                <p className="dec">{slide.desc}</p>
                <hr />
                <button className="btn btn-danger pointer-event discover">Discover Now</button>
              </div>
            </>
          )}
        </div>
      );
    })}
   
  </div>
  );
};

export default Slider;