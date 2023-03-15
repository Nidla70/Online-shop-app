import React from "react";
import winter from "C:/projects/GitHub/Online-shop-app/my-app/src/img/winter.png";

const Slide1 = () => {
  return (
    <div className="flex flex-row items-center ">
      <div className="w-3/5">
        <img src={winter} className="h-[700px] w-[500px] " />
      </div>

      <div className="pr-40  flex flex-col gap-10 font-sans">
        <p className="font-semibold text-8xl ">WINTER SALE</p>
        <p className="text-3xl ">
          DONT COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
        </p>

        <a href="#_" className="relative px-6 py-3 text-black group">
          <span className="absolute inset-0 w-1/4 h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-1/4 h-full border-4 border-black"></span>
          <span className="relative text-2xl ">SHOW NOW</span>
        </a>
      </div>
    </div>
  );
};

export default Slide1;
