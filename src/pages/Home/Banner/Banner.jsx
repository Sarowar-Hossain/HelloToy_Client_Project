import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <img src={banner} className="rounded-lg" alt="" />
    </div>
  );
};

export default Banner;
