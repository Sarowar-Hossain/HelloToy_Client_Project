import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Card = ({ product, setData, data, handleUpdate }) => {
  const [modalOpen, setModalOpen] = useState(false);
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
    sellerEmail
  } = product;

  // console.log(product)
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const picture = e.target.picture.value;
    const description = e.target.description.value;

    const info = { price, quantity, picture, description };

    handleUpdate(_id, info);

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

  return (
    <tr className="hover:border-2 border-cyan-500">
      <td>
        <div className="avatar me-2">
          <div className="rounded-lg w-[100px] h-[100px]">
            <img src={picture} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="text-left space-y-3">
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">Category: {subCategory}</div>
        </div>
      </td>
      <td>
        {sellerEmail}
        <br />
        <span className="text-sm">Quantity : {quantity}</span>
      </td>
      <td className="text-xl font-semibold">
        ${price}
        <br />
        <span className="text-sm font-base">Rating: {rating}</span>
      </td>
      <th className="space-x-3 items-center">
        <button
          onClick={toggleModal}
          className="hover:bg-cyan-700 font-semibold bg-cyan-500 text-base text-white px-3 py-1 rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="hover:bg-orange-700 font-semibold bg-orange-500 text-base text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </th>
      {modalOpen && (
        <UpdateModal
          handleSubmit={handleSubmit}
          toggleModal={toggleModal}
          product={product}
        />
      )}
    </tr>
  );
};

const UpdateModal = ({ handleSubmit, toggleModal, product }) => {
  const { name, picture, price, quantity, description } = product;

  return (
    <tr className="">
      <td colSpan="5">
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label
                        htmlFor="price"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        defaultValue={price}
                        name="price"
                        id="price"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter price"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="quantity"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Quantity
                      </label>
                      <input
                        type="text"
                        defaultValue={quantity}
                        name="quantity"
                        id="quantity"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter quantity"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="picture"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Picture URL
                      </label>
                      <input
                        type="url"
                        defaultValue={picture}
                        name="picture"
                        id="picture"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter picture URL"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        defaultValue={description}
                        name="description"
                        id="description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter description"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="hover:bg-cyan-700 font-semibold bg-cyan-500 text-base text-white px-3 py-1 rounded sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="hover:bg-gray-200 font-semibold bg-gray-100 text-base text-gray-600 px-3 py-1 rounded sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Card;
