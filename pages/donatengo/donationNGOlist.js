import React from "react";
import GeneralSidebar from "../Components/GeneralSidebar";
import Navbar from "../Components/Navbar";
import NGOlist from "../Components/NGOlist";
import Link from "next/link";
import Document from "../document";

const DonationNGOlist = () => {
  return (
    <div>
    <Document />
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
          <NGOlist />
          <NGOlist />
          <NGOlist />

          <div className="mt-5">
            <div className="w-full text-center">
              <Link href="/donatengo/donationbookform">
                <button className="mx-auto font-bold text-lg bg-skin-lightGreen text-skin-darkGreen p-2 px-2 rounded-xl mb-5">
                  Continue
                </button>
              </Link>
            </div>
            <div className="w-10/12 mx-auto"> 
              <div className="grid grid-cols-3">
                <div className="px-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                </div>
                <div className="px-5 mx-auto">
                  <span className="inline-block bg-skin-lightBlue px-5 rounded-full text-skin-darkBlue font-bold p-3">
                    2
                  </span>
                </div>
                <div className="px-5 mx-auto">
                  <span className="inline-block bg-skin-lightBlue px-5 rounded-full text-skin-darkBlue font-bold p-3">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationNGOlist;
