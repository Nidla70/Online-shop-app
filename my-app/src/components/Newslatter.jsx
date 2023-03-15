import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Newslatter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-pink-100">
      <p className="text-7xl mb-9">Newslatter</p>
      <p className="text-3xl mb-9">Get updates on our products.</p>
      <div className="flex items-center justify-center gap-x-5 w-full">
        <input
          placeholder="Email"
          className="text-2xl w-2/6 border-2 border-gray-500 outline-none h-14 rounded-lg p-2"
        ></input>
        <button className="">
          <AiOutlineSend size={55} className="hover:scale-125" />
        </button>
      </div>
    </div>
  );
};

export default Newslatter;
