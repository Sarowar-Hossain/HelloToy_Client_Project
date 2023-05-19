import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import ToyCard from "../AllToys/ToyCard";
import Card from "./Card";

const MyToys = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?sellerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          {data.map((product) => (
            <Card key={product._id} product={product}></Card>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
