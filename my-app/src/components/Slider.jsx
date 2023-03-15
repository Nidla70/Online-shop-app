import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slide1 from "./slide/Slide1";
import Slide2 from "./slide/Slide2";
import Slide3 from "./slide/Slide3";

const Slider = () => {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" justify-between  flex flex-row items-center pt-18 w-full h-screen bg-purple-100 ">
      <div className="">
        <AiOutlineArrowLeft
          onClick={prevSlide}
          size={50}
          className="bg-black rounded-full cursor-pointer ml-5 opacity-75 bg-opacity-25 hover:scale-125"
        />
      </div>

      <div className="flex flex-row items-center ">{slides[currentIndex]}</div>

      <div className="">
        <AiOutlineArrowRight
          onClick={nextSlide}
          size={50}
          className="bg-black rounded-full cursor-pointer mr-5 opacity-75 bg-opacity-25  hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Slider;
