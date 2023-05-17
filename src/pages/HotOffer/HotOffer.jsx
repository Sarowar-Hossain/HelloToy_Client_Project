import React from "react";
import { Link } from "react-router-dom";

const HotOffer = () => {
  return (
    <div className="w-full ">
        <h1 className="text-5xl font-bold text-center my-14 underline text-c">Special Offer For Limited Time</h1>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-10">
          <div className="w-1/2">
            <img
              className="w-full h-[800px] object-cover object-bottom rounded-2xl"
              src="https://img.freepik.com/free-photo/wooden-red-toy-train-wooden-tracks_181624-18723.jpg?w=740&t=st=1684363376~exp=1684363976~hmac=f554dd4b1ce2ea440751d417d01c817fe54e3e0df100596aba614ee5ca05d6d0"
              alt=""
            />
          </div>
          <div className="w-1/2 space-y-6 px-8">
            <h1 className="font-bold text-4xl text-black">
              Kids Funny Car Toys
            </h1>
            <p className="font-bold text-2xl text-black">
              $49.99{" "}
              <span className="font-semibold text-3xl text-orange-600 ms-4">
                25% OFF
              </span>
            </p>
            <div className="flex gap-5">
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 39 }}></span>
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
            <button className="px-8 py-3 bg-cyan-500 text-2xl font-bold text-white mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
