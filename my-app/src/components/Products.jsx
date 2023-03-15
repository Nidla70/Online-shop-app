import React from "react";
import { popularProduct } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex justify-between flex-wrap ">
      {popularProduct.map((item) => (
        <Product item={item}></Product>
      ))}
    </div>
  );
};

export default Products;
