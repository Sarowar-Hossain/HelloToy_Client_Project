import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HotOffer = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(39);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Update countdown values
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays((prevDays) => prevDays - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="w-full ">
      <h1
        style={{ fontFamily: "Caveat, cursive" }}
        className="text-center font-bold text-4xl md:text-6xl mt-20 text-cyan-500 underline"
      >
        Special Offer
      </h1>
      <h1 className="text-2xl font-semibold text-center mb-14 mt-4">
        Special Offer For Limited Time
      </h1>
      <div className="md:flex justify-center items-center">
        <div className="md:flex items-center gap-10">
          <div className="md:w-1/2">
            <img
              className="md:w-full md:h-[550px] object-cover object-bottom rounded-2xl "
              src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318361.jpg?w=740&t=st=1684438336~exp=1684438936~hmac=7e92e93bc3345bc5d998f9253707fa7170ea3736b3b567ae2344cda1e2d389b4"
              alt=""
            />
          </div>
          <div className="md:w-1/2 space-y-8 my-8 px-8 md:space-y-6">
            <h1 className="font-semibold text-center font md:text-left text-5xl text-black">
              Kids Funny Car Toys
            </h1>
            <p className="font-bold text-center md:text-left text-3xl text-black">
              $49.99{" "}
              <span className="font-semibold text-3xl text-orange-600 ms-4">
                25% OFF
              </span>
            </p>
            <div className="flex gap-5">
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": days }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": hours }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": minutes }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": seconds }}></span>
                </span>
                sec
              </div>
            </div>
            <p className="text-xl">
              This sturdy truck is great for hauling toys and other items. Its
              large cargo bed can hold a variety of objects, and the durable
              tires can handle any terrain. The realistic design and attention
              to detail make it a favorite among young truck enthusiasts.
            </p>
            <Link to="/alltoys">
              <button className="px-8 py-3 bg-cyan-500 text-2xl rounded hover:bg-cyan-600 font-bold text-white mt-4">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
