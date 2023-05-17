import React from "react";
import Rating from "react-rating";

const CategoryCard = ({ category }) => {
  const { name, picture, price, rating } = category;




  return (
    // <div className="flex">
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="text-center text-gray-800 font-bold text-2xl">Name: {name}</h2>
        <Rating
          initialRating={rating}
          emptySymbol={<span className="text-gray-300 text-3xl">★</span>}
          fullSymbol={<span className="text-orange-500 text-3xl">★</span>}
          readonly
        />
        <div className="flex items-center gap-10">
          <p className="font-bold text-2xl">${price}</p>
          <button className="bg-cyan-500 px-4 py-2 rounded-md text-white font-semibold normal-case">
            Details
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CategoryCard;
