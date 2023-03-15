import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newslatter from "../components/Newslatter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="flex flex-col">
        <p className="text-7xl font-semibold mb-3">Dresses</p>
        <div className="flex justify-between m-5 text-2xl font-semibold">
          <div className="flex flex-row justify-between gap-x-3 items-center">
            <p className="p-2"> Filter Products:</p>
            <div className="relative  lg:max-w-sm">
              <select className="w-fit h-3/4 p-2 text-gray-500 bg-white border-2 border-black outline-black  ">
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
              </select>
            </div>
            <div className="relative  lg:max-w-sm">
              <select className="w-fit h-3/4 p-2 text-gray-500 bg-white border-2 border-black outline-black  ">
                <option>XS </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-3">
            <p>Sort Products: </p>
            <div className="relative  lg:max-w-sm">
              <select className="w-fit h-3/4 p-2 text-gray-500 bg-white border-2 border-black outline-black  ">
                <option>Newest</option>
                <option>Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Newslatter />
      <Footer />
    </div>
  );
};

export default ProductList;
