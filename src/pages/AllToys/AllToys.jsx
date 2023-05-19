import React, { useContext, useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { UserContext } from "../../Context/Context";
import { TailSpin } from "react-loader-spinner";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [productLoad, SetProductLoad] = useState();
  const { loading, setLoading, setTitle } = useContext(UserContext);
  setTitle("AllToys");
  useEffect(() => {
    fetch(`http://localhost:5000/products?limit=${productLoad}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data);
          setLoading(false);
        }
      });
  }, [productLoad]);

  const pageLoader = (e) => {
    const num = e.target.value;
    SetProductLoad(num);
  };

  console.log(productLoad);

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
      <div className="w-full border-t-2 my-2"></div>
      <div className="flex items-center justify-center gap-4 my-4">
        <label
          htmlFor="subCategory"
          className="block text-gray-700 text-sm font-medium"
        >
          Page Load
        </label>
        <form onChange={pageLoader}>
          <select>
            <option value={20}>20</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default AllToys;
