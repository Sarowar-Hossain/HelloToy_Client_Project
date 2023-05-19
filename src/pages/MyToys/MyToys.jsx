import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import ToyCard from "../AllToys/ToyCard";
import Card from "./Card";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, setTitle } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  setTitle("MyToys");

  useEffect(() => {
    fetch(
      `http://localhost:5000/mytoys?sellerEmail=${user?.email}&sortOrder=${sortOrder}&sortBy=price`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [sortOrder]);

  const handleUpdate = (id, info) => {
    fetch(`http://localhost:5000/mytoys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          const remainingData = data.filter((product) => product._id !== id);
          const updatedData = data.find((product) => product._id === id);
          const updatedinfo = [updatedData, ...remainingData];
          setData(updatedinfo);
        }
      });
  };

  const handleSortAscending = () => {
    setSortOrder("asc");
  };

  const handleSortDescending = () => {
    setSortOrder("desc");
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="flex justify-end gap-8 items-center text-center mb-3">
          <p className="">Sort by Price:</p>
          <button
            onClick={handleSortAscending}
            className="hover:bg-cyan-700 font-semibold bg-cyan-500 text-base text-white px-3 py-1 rounded"
          >
            Ascending
          </button>
          <button
            onClick={handleSortDescending}
            className="hover:bg-cyan-700 font-semibold bg-cyan-500 text-base text-white px-3 py-1 rounded"
          >
            Descending
          </button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name and Category</th>
              <th>Seller and Quantity</th>
              <th>Price & Rating</th>
              <th>Details</th>
            </tr>
          </thead>
          {data.map((product) => (
            <Card
              key={product._id}
              setData={setData}
              data={data}
              product={product}
              handleUpdate={handleUpdate}
            ></Card>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
