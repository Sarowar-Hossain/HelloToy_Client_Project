import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Gallary from "../../Gallary/Gallary";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import HotOffer from "../../HotOffer/HotOffer";
import { UserContext } from "../../../Context/Context";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
  const { user, spinner } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <>
          {" "}
          <Banner></Banner>
          <Gallary></Gallary>
          <ShopByCategory></ShopByCategory>
          <HotOffer></HotOffer>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">{spinner()}</div>
        </>
      )}
    </div>
  );
};

export default Home;
