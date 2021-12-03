import React from "react";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import {
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import ProgressChecker from "../Components/ProgressChecker";

const DonationAddressForm = () => {
  return (
    <div>
      <Navbar />
      <GeneralSidebar title="Donate to a NGO" />

      {/* ///////////////////////////////////DonationAdressForm(first part)//////////////////////////////// */}
      <div className="mt-10 w-10/12 mx-auto">
        <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-5">
              Enter Address Details 
            </h1>
            <div className="my-3">
              <h3>Address</h3>
              <ChakraProvider className="w-[30vw]">
                <Input placeholder="Enter your Address" className="mb-5"/>
              </ChakraProvider>{" "}
              <label for="cars" >Country</label>
              <select className="block w-full h-[40px] pl-2 mb-5">
                <option value="India">India</option>
                <option value="China" >China</option>
                <option value="Japan" >Japan</option>
                <option value="US">US</option>
              </select>
              <label for="cars">City</label>
              <select className="block w-full h-[40px] pl-2 ">
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
              </select>
              
            </div>
          </div>
          {/* ///////////////////////////////////DonationAdressForm(second part)//////////////////////////////// */}
          <div className="mt-0 md:mt-[50px]">
            <div>
            <div className="mb-5">
            <h3>Landmark</h3>
            <ChakraProvider>
              <Input placeholder="Enter Your nearby Landmark" />
            </ChakraProvider>
          </div>
          <label for="cars" >State</label>
              <select className="block w-full h-[40px] pl-2 mb-5">
                <option value="Kolkata">West Bengal</option>
                <option value="Mumbai">tamilnadu</option>
                <option value="Delhi">UP</option>
                <option value="Chennai">Gujrat</option>
              </select>
              <div className="mb-5">
            <h3>Pincode</h3>
            <ChakraProvider>
              <Input placeholder="Enter Your Pincode" />
            </ChakraProvider>
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
        <ProgressChecker/>
        </div>


      </div>
      </div>
    </div>
  );
};

export default DonationAddressForm;