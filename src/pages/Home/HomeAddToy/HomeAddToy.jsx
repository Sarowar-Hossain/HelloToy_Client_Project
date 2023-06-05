import React from "react";
import AddToys from "../../AddToys/AddToys";

const HomeAddToy = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);

  return (
    <div>
      <h1
        style={{ fontFamily: "Caveat, cursive" }}
        className="text-center font-bold text-3xl md:text-6xl my-4 text-cyan-500 underline"
      >
        Add Your Products{" "}
      </h1>
      <h1 className="text-2xl font-semibold text-center mb-5 mt-5">
        Products listing section
      </h1>
      <div className="flex justify-between items-center flex-row lg:flex-row gap-10">
        <div className="text-center lg:text-left w-2/6">
          <h1 className="text-5xl font-bold">Add Your Product!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            qui, optio quia hic earum nostrum sequi inventore eos provident, id
            omnis est incidunt iure recusandae impedit quae reiciendis nesciunt
            ipsa!
          </p>
          <button className="">
            Learn More
          </button>
        </div>

        <AddToys className="shadow-xl bg-base-100"></AddToys>
      </div>
    </div>
  );
};

export default HomeAddToy;
