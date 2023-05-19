import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Card = ({ product, setData, data }) => {
  const [Modal, setModal] = useState(false);

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

  const toggleModal = () => {
    setModal(!Modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const picture = e.target.picture.value;
    const description = e.target.description.value;

    const info = { price, quantity, picture, description };

    fetch(`http://localhost:5000/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updated", data);
        // setData(data);
      });

    console.log(_id);
    toggleModal();
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "ARE YOU SURE!",
      text: "Please Click Okay for Delete!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okay",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const newData = data.filter((product) => product._id !== _id);
              setData(newData);
              Swal.fire({
                icon: "success",
                title: "Delete Successful",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  const UpdateModal = () => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg p-8 space-y-6 w-1/4 border-4 border-cyan-500">
            <h2 className="text-xl font-semibold text-center">
              Update Product Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <label className="font-medium" htmlFor="price">
                  Price:
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered input-info w-full"
                />

                <label className="font-medium" htmlFor="quantity">
                  Available Quantity:
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-bordered input-info w-full "
                />
                <label className="font-medium" htmlFor="picture">
                  Product Picture URL:
                </label>
                <input
                  type="text"
                  name="picture"
                  defaultValue={picture}
                  className="input input-bordered input-info w-full "
                />
                <label className="font-medium" htmlFor="description">
                  Description:
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  className="input input-bordered input-info w-full"
                ></textarea>

                <button
                  type="submit"
                  className="bg-cyan-500 text-white mt-4 rounded-lg px-4 py-2 hover:bg-cyan-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <tbody>
      <tr className="hover:border-2 border-cyan-500">
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
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Category: {subCategory}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br />
          <span className="text-sm">Quantity : {quantity}</span>
        </td>
        <td className="text-xl font-semibold">
          ${price}
          <br />
          <span className="text-sm font-base">Rating: {rating}</span>
        </td>
        <th className="space-x-3  items-center">
          <button
            onClick={toggleModal}
            className="hover:bg-cyan-700 font-semibold bg-cyan-500 text-base text-white px-3 py-1 rounded"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="hover:text-orange-700 font-semibold text-2xl text-orange-500 px-3"
          >
            <FaTrash></FaTrash>
          </button>
        </th>
      </tr>
      {Modal && <UpdateModal />}
    </tbody>
  );
};

export default Card;
