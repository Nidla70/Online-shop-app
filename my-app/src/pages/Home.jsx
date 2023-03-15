import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newslatter from "../components/Newslatter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newslatter />
      <Footer />
    </div>
  );
};

export default Home;
