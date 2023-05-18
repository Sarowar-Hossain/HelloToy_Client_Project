import React, { useState } from "react";
import {
  FaGift,
  FaMoneyBill,
  FaStar,
  FaShirtsinbulk,
  FaUserAlt,
  FaUsb,
  FaDollarSign,
} from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  const {
    name,
    picture,
    price,
    quantity,
    sellerEmail,
    rating,
    sellerName,
    subCategory,
    _id,
    description,
  } = data;

  console.log(data);
  return (
    <div className="my-10">
      <div className="flex gap-10 items-center justify-center">
        <div className="">
          <img
            className="w-[450px] h-[450px] rounded-2xl"
            src={picture}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-500">Name: {name}</h1>
          <p className="text-2xl flex items-center gap-3">
            Review:{" "}
            <span className="text-orange-500">
              {" "}
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
            </span>
          </p>

          <p className="font-xl font-semibold">Category: {subCategory}</p>
          <p className="font-bold text-3xl text-cyan-500 flex items-center"><span><FaDollarSign /></span>{price}</p>
          <p className="font-base text-xl">Available Quantity: {quantity}</p>
          <p>Hurry Only {quantity} units left in stock!</p>

          <div className="flex flex-col gap-4 my-4">
            <button className="border-cyan-500 border-2 hover:bg-cyan-500 w-full hover:text-white text-cyan-500 text-xl font-bold py-2 px-6 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-700 w-full text-white text-xl font-bold py-2 px-6 rounded-lg">
              Buy it Now
            </button>
          </div>
          <div>
            <div className="flex gap-4">
              <p className="flex items-center gap-4">
                <FaGift className="text-3xl text-cyan-500"></FaGift>
                <span className="font-base text-xl">Gift Voucher</span>
              </p>
              <p className="flex items-center gap-4">
                <FaMoneyBill className="text-3xl text-cyan-500"></FaMoneyBill>
                <span className="font-base text-xl">Big Savings</span>
              </p>
            </div>
            <div className=" flex gap-4 my-3">
              <p className="flex items-center gap-4">
                <FaShirtsinbulk className="text-3xl text-cyan-500"></FaShirtsinbulk>
                <span className="font-base text-xl">Gift Voucher</span>
              </p>
              <p className="flex items-center gap-4">
                <FaUserAlt className="text-3xl text-cyan-500"></FaUserAlt>
                <span className="font-base text-xl">Customer Support</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 space-y-4 mt-10">
        <h1 className="bg-cyan-500 text-white justify-center items-center flex font-bold w-[150px] h-[30px]">Description</h1>
        <h1>{description}</h1>
        <p>This sleek sports car is perfect for racing around the living room. With its aerodynamic design and smooth wheels, it can reach top speeds in no time. The bright red color and realistic details make it a favorite among car enthusiasts of all ages.This sleek sports car is perfect for racing around the living room. With its aerodynamic design and smooth wheels, it can reach top speeds in no time. The bright red color and realistic details make it a favorite among car enthusiasts of all ages.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
