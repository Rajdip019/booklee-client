import React from "react";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import { Input, ChakraProvider } from "@chakra-ui/react";
import ProgressChecker from "../Components/ProgressChecker";

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
            <ProgressChecker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBookForm;
