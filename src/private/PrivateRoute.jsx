import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
    const location = useLocation();
  if (loading) {
    return (
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
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
