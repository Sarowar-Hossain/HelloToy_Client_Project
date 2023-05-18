import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <div>
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
          {products.map((product) => (
            <ToyCard key={product._id} product={product}></ToyCard>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
