import React from "react";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import { Input, ChakraProvider } from "@chakra-ui/react";
import ProgressChecker from "../Components/ProgressChecker";
import Link from "next/link";

const DonationBookForm = () => {
  return (
    <div>
      <Navbar />
      <GeneralSidebar title="Donate to a NGO" />

      {/* ///////////////////////////////////DonationBookForm(first part)//////////////////////////////// */}
      <div className="mt-10 w-10/12 mx-auto">
        <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-5">Enter Book Details</h1>
            <div className="my-3">
              <h3>Quantity</h3>
              <ChakraProvider className="w-[30vw]">
                <Input
                  placeholder="Enter Quantity"
                  type="tel"
                  className="mb-5"
                />
              </ChakraProvider>{" "}
              <label for="cars">Overall Condition</label>
              <select className="block w-full h-[40px] pl-2 mb-5">
                <option value="Kolkata">4 stars or above</option>
                <option value="Mumbai">3 stars or above</option>
                <option value="Delhi">2 stars or above</option>
                <option value="Chennai">1 stars or above</option>
              </select>
              <label for="cars">Category</label>
              <select className="block w-full h-[40px] pl-2 mb-5">
                <option value="Education">Education</option>
                <option value="Story Book">Story Book</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Self-Growth">Self-Growth</option>
                <option value="Horror">Horror</option>
                <option value="Documentry">Documentry</option>
              </select>
            </div>
          </div>
          {/* ///////////////////////////////////DonationBookForm(second part)//////////////////////////////// */}
          <div className="mt-0 md:mt-[50px]">
            <div>
              <div className="hidden md:block">
                <img
                  src="/ListBookForSelling.svg"
                  className="w-[394px] h-[221px]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////<///////////////////////////After Grid////////////////////////////////////////// */}

      <div className="mt-5 w-10/12 mx-auto">
        <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)]">
          <hr className="my-5"></hr>
          <div className="mb-10">
          <div className="w-full text-center">
            <Link href="/thankyoufordonation">
          <button
            className="mx-auto font-bold text-lg bg-skin-lightGreen text-skin-darkGreen p-2 px-2 rounded-xl mb-10"
          >
            Confirm Pickup
          </button>
          </Link>
          </div>
          <div className="">
                <div className="grid grid-cols-3">
                  <div className="px-5 mx-auto">
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

export default DonationBookForm;
