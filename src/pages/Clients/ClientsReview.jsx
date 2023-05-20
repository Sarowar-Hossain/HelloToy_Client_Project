import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

// home component child component

const ClientsReview = () => {
  return (
    <div className="mt-[100px]">
      <h1
        className="text-5xl my-4 text-cyan-500 font-serif text-center underline font-semibold md:ms-20 mt-8"
        style={{ fontFamily: "Caveat, cursive" }}
      >
        Clients Reviews
      </h1>
      <div className="w-full lg:flex">
        <div className="lg:w-1/2  mx-auto p-3 md:w-[95%] my-10">
          <div className="relative bg-cyan-500 text-white rounded-e-3xl lg:h-[420px]">
            <div className="p-8 md:p-12">
              <h1
                className="text-4xl md:text-5xl font-semibold mb-6"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                What Our Clients Say?
              </h1>
              <p className="md:w-[500px]">
                "I recently bought the Super Fun Playland toy for my 5-year-old
                daughter, and it has exceeded my expectations! The quality is
                outstanding, with vibrant colors and attention to detail. It
                offers a range of activities, including a ball pit, climbing
                wall, and slide, keeping my daughter entertained and encouraging
                imaginative play. It's versatile for both indoor and outdoor
                use, easy to assemble, and safe for children. I highly recommend
                the Super Fun Playland for endless fun and excitement!"
              </p>
              <div className="flex mt-6">
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
              </div>
            </div>
            <div
              className="bg-white hidden md:block  absolute right-0 md:right-[0px] 
            bottom-[-50px] rounded-full"
            >
              <div className="flex flex-col items-center p-6">
                <img className="w-[80px]" src="data:image/png;base64,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" alt="" />
                <h1 className="text-xl text-black font-semibold">marlin rox</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto p-3 md:w-[95%] my-10">
          <div className="relative bg-cyan-500 text-white rounded-e-3xl lg:h-[420px]">
            <div className="p-8 md:p-12">
              <h1
                className="text-4xl md:text-5xl font-semibold mb-6"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                What Our Clients Say?
              </h1>
              <p className="md:w-[500px]">
                "First off, the quality of the Adventure Explorer Set is exceptional. The pieces are made from sturdy and durable materials, ensuring they can withstand even the most adventurous play. The attention to detail in the design is impressive, with vibrant colors and realistic features that capture my son's attention from the moment he lays eyes on it.. It's versatile for both indoor and outdoor he attention to detail in the design is impressive
                use!"
              </p>
              <div className="flex mt-6">
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
                <FaStar className="text-2xl text-white"></FaStar>
              </div>
            </div>
            <div
              className="bg-white hidden md:block  absolute right-0 md:right-[0px] 
            bottom-[-50px] rounded-full"
            >
              <div className="flex flex-col items-center p-6">
                <img className="w-[80px]" src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg" alt="" />
                <h1 className="text-xl text-black font-semibold">John Snow</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsReview;
