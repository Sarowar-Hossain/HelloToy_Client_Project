import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ product }) => {
  const {
    name,
    picture,
    price,
    quantity,
    rating,
    sellerName,
    subCategory,
    _id,
    description,
  } = product;
  return (
    <tbody className="border">
      <tr>
        <td>
          <img className="w-[120px] h-[120px] rounded-3xl" src={picture} />
        </td>
        <td className="text-xl font-normal">{sellerName}</td>
        <td className="text-xl font-normal">{name}</td>
        <td className="text-xl font-normal">{subCategory}</td>
        <td className="text-xl font-normal">${price}</td>
        <td className="text-xl font-normal">{quantity} <small>piece</small> </td>
        <th>
          <Link
            to={`/productDetails/${_id}`}
            className="hover:bg-cyan-600 font-semibold bg-cyan-500 text-xl text-white px-3 py-1 rounded-lg"
          >
            Details
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default ToyCard;
