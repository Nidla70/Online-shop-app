import React from "react";
import { BsCart, BsSearch, BsHeart } from "react-icons/bs";

const Product = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center w-1/4 py-4 px-3 relative ">
      <img src={item.img}></img>
      <div className="flex flex-row items-center justify-center w-full h-full gap-x-4 absolute opacity-0 hover:opacity-100 bg-yellow-100/25 ease-in duration-150">
        <BsCart
          size={50}
          className="  hover:scale-125  rounded-md ease-in duration-150 cursor-pointer"
        />
        <BsSearch
          size={50}
          className="  hover:scale-125  rounded-md ease-in duration-150 cursor-pointer"
        />
        <BsHeart
          size={50}
          className="  hover:scale-125 rounded-md ease-in duration-150 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Product;
