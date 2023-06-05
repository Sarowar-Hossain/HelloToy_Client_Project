import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";

const ShopByCategory = () => {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://toy-server-five.vercel.app/categoryData")
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
          <TabList className="font-bold text-2xl ">
            <Tab onClick={() => handleCategory("cars")}>Cars</Tab>
            <Tab onClick={() => handleCategory("Trucks")}>Trucks</Tab>
            <Tab onClick={() => handleCategory("city_vehicles")}>
              City Vehicles
            </Tab>
          </TabList>

          <TabPanel>
            {/* <div className="md:flex flex-wrap justify-center md:gap-5 space-y-2"> */}
            <OverPack style={{ overflow: "hidden", height: 700 }}>
              <TweenOne
                key="0"
                animation={{ opacity: 1 }}
                className="code-box-shape"
                style={{ opacity: 0, marginBottom: 10 }}
              />
              <QueueAnim
                key="queue"
                leaveReverse
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  width: 1500
                }}
              >
                {categoryData.map((category, index) => (
                  <div
                    key={index + 1}
                    className="me-4 hover:shadow-lg hover:shadow-sky-200 mt-4"
                  >
                    <CategoryCard key={category._id} category={category} />
                  </div>
                ))}
              </QueueAnim>
            </OverPack>
            {/* </div> */}
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
