import React, { useContext, useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { UserContext } from "../../Context/Context";
import { TailSpin } from "react-loader-spinner";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const {loading, setLoading, setTitle } = useContext(UserContext);
  setTitle("AllToys")
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data);
          setLoading(false);
        }
      });
  }, []);

  console.log(products);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <TailSpin
            height="130"
            width="130"
            color="rgb(12, 187, 231)"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AllToys;