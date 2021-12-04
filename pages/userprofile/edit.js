import React from "react";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import Document from "../document";
import {
  Input,
  InputRightElement,
  InputGroup,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

const EditProfile = () => {
  return (
    <div>
    <Document />
      <Navbar />
      <GeneralSidebar title="Edit Profile" />
        {/* ///////////////////////////////////Avatar Section//////////////////////////////// */}
        <div className="flex justify-center">
      <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-5 lg:grid-cols-5 gap-0 md:gap-10">
        <div className="col-span-2 md:col-span-1 mt-5 mx-auto">
          <Avatar
            className="w-36 h-28 scale-100 lg:scale-75 xl:scale-100"
            name="Debajyoti Saha"
            borderRadius="100%"
            src="/Mask Group.png"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8 bg-skin-lightGreen text-skin-darkGreen rounded-2xl mt-16"
              viewBox="0 0 20 20"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            <AvatarBadge boxSize="1.25em" src="_square.png" />
          </Avatar>
          <div className="flex">
            <h3 className="text-xs underline mx-2">Remove</h3>
            <h3 className="text-xs underline mx-2">Change</h3>
          </div>
        </div>
        {/* ///////////////////////////////////Edit Your Profile Section(mid part)//////////////////////////////// */}
        <div className="col-span-2 mt-5">
          <h1 className="text-2xl font-semibold mb-5">Edit Your Profile</h1>
          <h3 className="text-xl font-medium">Personal Details</h3>
          <div className="my-3">
            <h3>First Name</h3>
            <ChakraProvider className="w-[30vw]">
              <Input placeholder="Enter Your First Name" className="w-[10vw]" />
            </ChakraProvider>{" "}
            <div className="my-5 block md:hidden">
            <h3>Last Name</h3>
            <ChakraProvider>
              <Input placeholder="Enter Your Last Name" />
            </ChakraProvider>
          </div>
            <div className="my-3">
              <h3>Phone No</h3>
              <ChakraProvider>
                <Input placeholder="Enter Your Mobile No" />
              </ChakraProvider>
            </div>
            <div className="my-3">
              <h3>Email</h3>
              <ChakraProvider>
                <Input placeholder="john@gmail.com" />
              </ChakraProvider>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-medium mb-5">Address Details</h3>
              <div className="mb-5">
                <h3>Address</h3>
                <ChakraProvider>
                  <Input placeholder="Enter Your Address" />
                </ChakraProvider>
              </div>
              <label for="cars">Country</label>
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
                            {/* ////////////////////Laptop Buttons////////////////////////////// */}

              <div className=" flex mt-5">
              <button className="hidden md:block bg-skin-lightGreen text-skin-darkGreen font-bold p-2 rounded-lg mr-6">Save</button>
              <button className="hidden md:block bg-skin-lightRed text-skin-darkRed font-bold p-2 rounded-lg">Discard</button>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////Edit Your Profile Section(last part)//////////////////////////////// */}
        <div className="col-span-2 xl:pr-8"> 
          <div className="hidden md:block my-5">
            <h3>Last Name</h3>
            <ChakraProvider>
              <Input placeholder="Enter Your Last Name" />
            </ChakraProvider>
          </div>
          <div className="hidden md:block">
            <img src="/Editprofile.svg" className="w-[230px] h-[160px]"></img>
          </div>

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
              {/* ////////////////////Mobile Buttons////////////////////////////// */}
      <div className=" flex justify-center">
              <button className="block md:hidden bg-skin-lightGreen text-skin-darkGreen font-bold p-2 rounded-lg mr-6">Save</button>
              <button className="block md:hidden bg-skin-lightRed text-skin-darkRed font-bold p-2 rounded-lg">Discard</button>
              </div>

      </div>

        </div>
      </div>
    </div>
  );
};

export default EditProfile;
