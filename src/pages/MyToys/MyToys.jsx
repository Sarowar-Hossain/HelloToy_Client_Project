import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";

const MyToys = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/products?email=${user?.email}`, {
      method: "get",
      headers: {
        "content-type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // const filterData = data.filter((dt) => dt.subCategory === "cars");
      });
  }, []);

  return <div>this is my toys page</div>;
};

export default MyToys;.

