import React, { useEffect } from "react";
import img1 from "../../assets/demo-pic-product.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration
      once: true, // animation only plays once
    });
  }, []);

  return (
    <div className="">
      <h1 style={{ fontFamily: "Caveat, cursive" }} className="text-center font-bold text-6xl my-8 text-cyan-500 underline">Gallery Section </h1>
      <div className="flex w-full gap-6">
        <div className="w-1/3 rounded-lg">
          {/* add data-aos attribute to image */}
          <img data-aos="fade-right" className="" src={img1} alt="" />
        </div>
        <div className="flex flex-wrap w-2/3 gap-6">
          {/* add data-aos attribute to each image */}
          <img
            data-aos="fade-down"
            src={img1}
            className="w-[300px] h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-down"
            src={img1}
            className="w-[300px] h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-down"
            src={img1}
            className="w-[300px] h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src={img1}
            className="w-[300px] h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src={img1}
            className="w-[300px] h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src={img1}
            className="w-[300px] h-[260px] object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
