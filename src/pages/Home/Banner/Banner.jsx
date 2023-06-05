import React from "react";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner from "../../../assets/banner.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner} /></SwiperSlide>
        <SwiperSlide><img src={banner2} /></SwiperSlide>
        <SwiperSlide><img src={banner3} /></SwiperSlide>
        <SwiperSlide><img src={banner4} /></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
