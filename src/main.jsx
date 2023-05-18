import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import Context from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-slate-50">
    <React.StrictMode>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </React.StrictMode>
  </div>
);
