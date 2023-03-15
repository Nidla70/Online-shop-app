import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="w-full ">
      <div className=" gap-y-4 px-3 relative">
        <div className="relative">
          <img
            src={item.img}
            className="object-cover h-[80vh] w-[500px] "
          ></img>
        </div>
        <div className="absolute top-0 left-0 px-6 py-4 flex h-[80vh] w-[500px] gap-y-7 flex-col items-center justify-center">
          <p className="text-4xl text-white font-bold">{item.title}</p>
          <button className="bg-white p-2 font-semibold cursor-pointer hover:scale-110">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
