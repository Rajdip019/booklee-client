import React from "react";
import GeneralSidebar from "../Components/GeneralSidebar";
import Navbar from "../Components/Navbar";
import NGOlist from "../Components/NGOlist";
import ProgressChecker from "../Components/ProgressChecker";

const DonationNGOlist = () => {
  return (
    <div>
      <Navbar />
      <GeneralSidebar title="Donate to a NGO" />
      <div className="lg:w-[calc(100%-300px)] mt-10">
        <div className="lg:ml-[calc(300px+4vw)]  w-11/12 mx-auto ">
          <h1 className="text-2xl font-bold mb-5 w-10/12 mx-auto lg:mx-0 xl:ml-44 lg:w-[calc(100%-300px)] ">
            Find Nearby NGO
          </h1>
          <NGOlist />
          <NGOlist />
          <NGOlist />
          <div className="mt-5">
          <ProgressChecker 
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationNGOlist;
