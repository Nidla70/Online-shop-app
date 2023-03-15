import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="flex flex-row w-full h-80 justify-evenly items-start">
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-7xl font-semibold mb-6">NIDLA</p>
        <div className="flex flex-row items-center justify-center gap-x-5 w-full ">
          <BsFacebook
            size={45}
            className="hover:text-pink-200 cursor-pointer hover:scale-125"
          />

          <BsInstagram
            size={45}
            className="hover:text-pink-200 cursor-pointer hover:scale-125"
          />
          <BsTwitter
            size={45}
            className="hover:text-pink-200 cursor-pointer hover:scale-125"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-5xl font-semibold mb-6">Contact</p>
        <div className="flex flex-col items-start justify-center gap-y-5 w-full ">
          <div className="flex flex-row items-center justify-center gap-x-3">
            <VscLocation
              size={50}
              className="hover:text-pink-200 cursor-pointer hover:scale-125"
            />
            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-3">
            <BsFillTelephoneFill
              size={45}
              className="hover:text-pink-200 cursor-pointer hover:scale-125"
            />
            <p className="text-2xl">+060 314 5165</p>
          </div>
          <div className="flex flex-row items-center gap-x-3 justify-center">
            <GrMail
              size={45}
              className="hover:text-pink-200 cursor-pointer hover:scale-125"
            />
            <p className="text-2xl">qqqqqxxxxx313@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
