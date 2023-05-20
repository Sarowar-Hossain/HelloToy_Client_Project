import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/Context";
import Swal from "sweetalert2";

const AddToys = () => {
  const [subCategory, setSubCategory] = useState("");
  const { user, setTitle } = useContext(UserContext);
  setTitle("AddToys");

  const handleSubmit = (e) => {
    e.preventDefault();
    const picture = e.target.pictureUrl.value;
    const name = e.target.name.value;
    const sellerName = e.target.sellerName.value;
    const sellerEmail = e.target.sellerEmail.value;
    const rating = e.target.rating.value;
    const quantity = e.target.availableQuantity.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    const addProduct = {
      picture,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      rating,
      quantity,
      description,
      price,
    };

    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Thank You",
            showConfirmButton: false,
            timer: 1000,
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="w-1/2 rounded-lg my-6 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pictureUrl"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Picture URL of the toy
            </label>
            <input
              type="text"
              required
              name="pictureUrl"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="sellerName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Seller Name
            </label>
            <input
              required
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Seller Email
            </label>
            <input
              required
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="subCategory"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sub-category
            </label>
            <select
              name="subCategory"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="">Select a sub-category</option>
              <option value="cars">Cars</option>
              <option value="trucks">Trucks</option>
              <option value="city_vehicles">City Vehicles</option>
              <option value="ambulance">Ambulance</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              required
              type="text"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Rating
            </label>
            <input
              required
              type="text"
              name="rating"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="availableQuantity"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Available Quantity
            </label>
            <input
              required
              type="number"
              name="availableQuantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Detail Description
            </label>
            <textarea
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="hover:bg-cyan-600 mt-3 font-bold bg-cyan-500 text-xl text-white w-full py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToys;
