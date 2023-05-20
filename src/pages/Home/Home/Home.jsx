import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Gallary from "../../Gallary/Gallary";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import HotOffer from "../../HotOffer/HotOffer";
import { UserContext } from "../../../Context/Context";
import { TailSpin } from "react-loader-spinner";
import ClientsReview from "../../Clients/ClientsReview";

const Home = () => {
  const { user, spinner, setTitle } = useContext(UserContext);
  setTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
      <HotOffer></HotOffer>
      <ClientsReview></ClientsReview>
    </div>
  );
};

export default Home;
