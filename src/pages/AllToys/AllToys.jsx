import React, { useContext, useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { UserContext } from "../../Context/Context";
import { TailSpin } from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [productLoad, SetProductLoad] = useState();
  const [search, setSearch] = useState("");

  const { loading, setLoading, setTitle } = useContext(UserContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchString = e.target.searchfield.value;
    setSearch(searchString);
  };


  setTitle("AllToys");
  useEffect(() => {
    fetch(
      `https://toy-server-five.vercel.app/products?limit=${productLoad}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data);
          setLoading(false);
          console.log(data);
        }
      });
  }, [productLoad, search]);

  const pageLoader = (e) => {
    const num = e.target.value;
    SetProductLoad(num);
  };


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
          <div className="flex justify-center my-4 items-center">
            <form
              className="flex justify-center gap-4 items-center"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                id="simple-search"
                name="searchfield"
                className="text-gray-900 text-sm rounded-lg block w-full p-3"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button
                type="submit"
                className="hover:bg-cyan-600 font-semibold bg-cyan-500 text-xl text-white px-3 py-1 rounded-lg"
              >
                Search
              </button>
            </form>
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
