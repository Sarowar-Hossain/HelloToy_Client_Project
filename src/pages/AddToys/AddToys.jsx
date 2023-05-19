import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../Context/Context";

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
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="pictureUrl"
            className="block text-gray-700 font-bold mb-2"
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
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
          required
            type="text"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sellerName"
            className="block text-gray-700 font-bold mb-2"
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
        <div className="mb-4">
          <label
            htmlFor="sellerEmail"
            className="block text-gray-700 font-bold mb-2"
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
        <div className="mb-4">
          <label
            htmlFor="subCategory"
            className="block text-gray-700 font-bold mb-2"
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
            <option value="cars">cars</option>
            <option value="Trucks">Trucks</option>
            <option value="city_vehicles">city_vehicles</option>
            <option value="Ambulance">Ambulance</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input 
          required
            type="text"
            name="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-bold mb-2"
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
        <div className="mb-4">
          <label
            htmlFor="availableQuantity"
            className="block text-gray-700 font-bold mb-2"
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
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Detail Description
          </label>
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToys;
