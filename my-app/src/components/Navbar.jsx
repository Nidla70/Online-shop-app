import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-row h-[60px] px-7 py-8 justify-between items-center gap-6">
      <div className="w-1/3 cursor-pointer text-lg flex flex-row  items-center">
        <div className="w-1/5 h-max"> EN</div>
        <div className="border-2 rounded-lg w-4/5 h-max flex flex-row items-center justify-between py-2 px-2">
          <input
            className="border-none outline-none py-1 w-4/5"
            placeholder="Search..."
          ></input>
          <FaSearch className="text-gray-500 hover:scale-125" size={25} />
        </div>
      </div>
      <div className="w-1/3 font-bold text-4xl justify-center flex">NIDLA</div>
      <div className="w-1/3 cursor-pointer text-lg flex flex-row gap-5 items-center justify-end">
        <div>REGISTER</div>
        <div>SIGN IN</div>
        <div>
          <BsCart3 size={25} />
          <span className="w-[30px] h-[30px] bg-red-600 rounded-full items-center justify-center top-7 left-14 "></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
