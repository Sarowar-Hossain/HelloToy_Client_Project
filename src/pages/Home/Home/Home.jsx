import React from "react";
import Banner from "../Banner/Banner";
import Gallary from "../../Gallary/Gallary";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import HotOffer from "../../HotOffer/HotOffer";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
      <HotOffer></HotOffer>
    </div>
  );
};

export default Home;
