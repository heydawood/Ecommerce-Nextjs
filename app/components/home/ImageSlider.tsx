'use client'
import React, { useState } from 'react'

type Slide = {
  url: string;
  title: string;
};


interface Props {
  slides: Slide[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ImageSlider({ slides, currentIndex, setCurrentIndex }: Props) {



    const sliderStyles: React.CSSProperties = {
        
        height: "100%",
        position: "relative",
        
    }


    const slideStyles = {
        width: "1250px",
        height: "450px",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        //backgroundImage: `url(${slides[currentIndex].url})`,  
        backgroundImage: `url(${typeof slides[currentIndex].url === 'object' 
        ? (slides[currentIndex].url as any).src 
        : slides[currentIndex].url})`,
        
        
  }

  //w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105

  const leftArrowStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#212121",
    zIndex: 1,
    cursor: "pointer",
  }

  const rightArrowStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "-600px",
    fontSize: "45px",
    color: "#212121",
    zIndex: 1,
    cursor: "pointer",
    transition: "",
  }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

  return (
    <div style={sliderStyles}>

        <div style={leftArrowStyles} onClick={goToPrevious}>←</div>
        <div style={rightArrowStyles} onClick={goToNext}>→</div>

      <div style={slideStyles} className=''>
        
      </div>

      
    </div>
  )
}

export default ImageSlider