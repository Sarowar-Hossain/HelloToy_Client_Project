import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';

const Card = ({ product }) => {
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
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Name : {name}</div>
              <div className="text-sm opacity-50">Category: {subCategory}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br />
          <span className="text-sm">Quantity : {quantity}</span>
        </td>
        <td className="text-lg font-semibold">${price}</td>
        <th className="space-x-3">
          <Link
            // to={`/productDetails/${_id}`}
            className="hover:bg-cyan-700 font-semibold bg-cyan-500 text-base text-white px-3 py-1 rounded"
          >
            Update
          </Link>
          <button className="hover:text-orange-700 font-semibold text-xl text-orange-500 px-3">
            <FaTrash></FaTrash>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Card;
