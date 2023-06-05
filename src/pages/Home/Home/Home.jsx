import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Gallary from "../../Gallary/Gallary";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import HotOffer from "../../HotOffer/HotOffer";
import { UserContext } from "../../../Context/Context";
import { TailSpin } from "react-loader-spinner";
import ClientsReview from "../../Clients/ClientsReview";
import AddToys from "../../AddToys/AddToys";
import HomeAddToy from "../HomeAddToy/HomeAddToy";

const Home = () => {
  const { user, spinner, setTitle } = useContext(UserContext);
  setTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <HomeAddToy></HomeAddToy>
      <Gallary></Gallary>
      <HotOffer></HotOffer>
      <ClientsReview></ClientsReview>
    </div>
  );
};

export default Home;
