import React from "react";

const DonateBottomHome = () => {
  return (
    <div className="px-[12vw]">
      <div className="bg-skin-lightGreen text-skin-darkGreen rounded-xl h-[20vh]">
          <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between h-full ">
            <div className="ml-0 sm:ml-7 my-auto ">
              <h1 className="text-lg sm:text-xl font-bold">Spread </h1>
              <h1 className="text-md sm:text-lg font-bold">
                Educational and Help
              </h1>
              <h1 className="text-md sm:text-lg font-bold">
              A Needy child 
              </h1>
            </div>
            <div className="my-auto text-center">
            <button className="font-bold bg-skin-darkGreen text-skin-lightGreen rounded-xl mr-0 sm:mr-7 p-2 my-3">
              Donate Now
            </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DonateBottomHome;
