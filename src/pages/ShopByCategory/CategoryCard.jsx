import React, { useContext } from "react";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import Swal from "sweetalert2";

const CategoryCard = ({ category }) => {
  const { user } = useContext(UserContext);
  const { name, picture, price, rating, _id } = category;
  const navigate = useNavigate();

  const handleDetails = (id) => {
    if(!user){
      Swal.fire({
        title: "For View Details!",
        text: "Please Login First!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }else{
      navigate(`/productDetails/${id}`);
    }
  };

  return (
    // <div className="flex">
    <div className="card w-[450px] bg-base-100 shadow-xl text-center">
      <figure className="">
        <img className="" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="text-center text-gray-800 font-bold text-2xl">
          Name: {name}
        </h2>
        <Rating
          initialRating={rating}
          emptySymbol={<span className="text-gray-300 text-3xl">★</span>}
          fullSymbol={<span className="text-orange-500 text-3xl">★</span>}
          readonly
        />
        <div className="flex items-center gap-10">
          <p className="font-bold text-2xl">${price}</p>
          <button
            onClick={() => handleDetails(_id)}
            className="bg-cyan-500 px-4 py-2 rounded-md text-white font-semibold normal-case"
          >
            Details
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CategoryCard;
