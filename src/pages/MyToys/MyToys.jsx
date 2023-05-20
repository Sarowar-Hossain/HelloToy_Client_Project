import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import Card from "./Card";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, setTitle } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  setTitle("MyToys");

  useEffect(() => {
    fetch(
      `https://toy-server-five.vercel.app/mytoys?sellerEmail=${user?.email}&sortOrder=${sortOrder}&sortBy=price`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [sortOrder]);

  const handleUpdate = (id, info) => {
    fetch(`https://toy-server-five.vercel.app/mytoys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          const updatedData = data.map((product) => {
            if (product._id === id) {
              return { ...product, ...info };
            }
            return product;
          });
          setData(updatedData);
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

        <table className="table mx-auto w-full">
          <thead className="z-0">
            <tr className="z-0 ">
              <th className="text-base font-semibold">Product Picture</th>
              <th className="text-base font-semibold">Product Name & Category</th>
              <th className="text-base font-semibold">Seller Email & Quantity</th>
              <th className="text-base font-semibold">Price & Rating</th>
              <th className="text-base font-semibold">update / delete</th>
            </tr>
          </thead>
          <tbody className="z-10">
            {data.map((product) => (
              <Card
                key={product._id}
                setData={setData}
                data={data}
                product={product}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;