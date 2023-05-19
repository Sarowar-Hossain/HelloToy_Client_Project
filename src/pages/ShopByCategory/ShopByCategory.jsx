import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categoryData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        handleCategory("cars");
        const filterData = data.filter((dt) => dt.subCategory === "cars");
        setCategoryData(filterData);
      });
  }, []);

  const handleCategory = (name) => {
    const filterData = data.filter((dt) => dt.subCategory === name);
    setCategoryData(filterData);
  };

  return (
    <div className="text-center my-14">
      <h1
        style={{ fontFamily: "Caveat, cursive" }}
        className="text-center font-bold text-4xl md:text-6xl mt-20 text-cyan-500 underline"
      >
        Popular Category
      </h1>
      <p className="my-8 font-semibold text-xl">Product Category</p>
      <div>
        <Tabs className="text-center font-semibold text-xl text-cyan-500">
          <TabList>
            <Tab onClick={() => handleCategory("cars")}>Cars</Tab>
            <Tab onClick={() => handleCategory("Trucks")}>Trucks</Tab>
            <Tab onClick={() => handleCategory("city_vehicles")}>
              City Vehicles
            </Tab>
          </TabList>

          <TabPanel>
            <div className="md:flex flex-wrap justify-center md:gap-5 space-y-2">
              {categoryData.map((category, index) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:flex flex-wrap justify-center md:gap-5 space-y-2">
              {categoryData.map((category, index) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:flex flex-wrap justify-center md:gap-5 space-y-2">
              {categoryData.map((category, index) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
