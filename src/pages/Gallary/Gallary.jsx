import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// home component child component

const Gallery = () => {
  const [slider, setSlider] = useState([]);

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

  fetch("/gallery.json")
    .then((res) => res.json())
    .then((data) => setSlider(data));

  return (
    <div className="mt-[80px]">
      <h1
        style={{ fontFamily: "Caveat, cursive" }}
        className="text-center font-bold text-3xl md:text-6xl my-4 text-cyan-500 underline"
      >
        Gallery Section{" "}
      </h1>
      <h1 className="text-2xl font-semibold text-center mb-10 mt-5">
        Customer gallery
      </h1>
      <div className="lg:flex w-full gap-6 ">
        <div className="gallery lg:w-1/3 rounded-lg md:mb-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            modules={[Autoplay]}
            className="mySwiper"
          >
            {slider.map((slide) => (
              <SwiperSlide>
                <img
                  className=" md:w-full md:h-[250px] object-fill lg:w-full lg:h-[860px] rounded-lg"
                  src={slide.picture}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:flex  md:flex flex-wrap lg:w-2/3 md:gap-6 space-y-4 md:space-y-0">
          {/* add data-aos attribute to each image */}
          <img
            data-aos="fade-down"
            src="https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?w=900&t=st=1684361389~exp=1684361989~hmac=bb63f11e361eab39cff2b57fff639f58697c153fb313019afb8f9b0addb35b72"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-down"
            src="https://img.freepik.com/premium-photo/cute-little-boy-playing-sand-with-toy-truck-beach_107612-296.jpg?w=900"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-down"
            src="https://img.freepik.com/premium-photo/medium-shot-boy-with-cars_23-2148551532.jpg?w=826"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src="https://img.freepik.com/free-photo/children-playing-with-lego-toy-train-playing-room_1157-26668.jpg?w=900&t=st=1684361362~exp=1684361962~hmac=5ecea47b2363ee4e9fb02a115e1fb387e2487d5e15f4496a842df88fb1d6f81c"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src="https://img.freepik.com/free-photo/non-binary-kids-playing-with-cars-game_23-2148779599.jpg?w=1060&t=st=1684361352~exp=1684361952~hmac=2b7060e7c2e28511d87db7cd868f44db4b2a4b676323c953c703fb4f04a3aece"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src="https://img.freepik.com/free-photo/child-playing-home_1328-1111.jpg?w=900&t=st=1684361349~exp=1684361949~hmac=1fef6faeb2dd194d0ca2efe2ae9c8ad3022432e32c1ba7ef435eb52c092564be"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src="https://img.freepik.com/free-photo/children-playing-with-lego-toy-train-playing-room_1157-26668.jpg?w=900&t=st=1684361362~exp=1684361962~hmac=5ecea47b2363ee4e9fb02a115e1fb387e2487d5e15f4496a842df88fb1d6f81c"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src="https://img.freepik.com/free-photo/non-binary-kids-playing-with-cars-game_23-2148779599.jpg?w=1060&t=st=1684361352~exp=1684361952~hmac=2b7060e7c2e28511d87db7cd868f44db4b2a4b676323c953c703fb4f04a3aece"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
          <img
            data-aos="fade-up"
            src="https://img.freepik.com/free-photo/child-playing-home_1328-1111.jpg?w=900&t=st=1684361349~exp=1684361949~hmac=1fef6faeb2dd194d0ca2efe2ae9c8ad3022432e32c1ba7ef435eb52c092564be"
            className="md:w-full md:h-[250px] lg:w-[300px] lg:h-[260px] object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
