import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import ToyCard from "../AllToys/ToyCard";
import Card from "./Card";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, setTitle } = useContext(UserContext);
  const [data, setData] = useState([]);
  setTitle('MyToys');
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?sellerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
          Swal.fire({
            icon: "success",
            title: "Delete Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          const remainingData = data.filter(
            (product) => product._id !== id
          );
          const updatedData = data.find((product) => product._id === id);
          const updatedinfo = [updatedData, ...remainingData];
          setData(updatedinfo);
        }
      });
  };

  console.log(data);

  return (
    <div>
      {" "}
      <div className="overflow-x-auto w-full">
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
