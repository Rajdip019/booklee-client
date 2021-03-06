import React from "react";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import Document from "../document";
import { useToast } from '@chakra-ui/react'
import {
  Input,
  ChakraProvider,
  Box,Button
} from "@chakra-ui/react";

const ListBookForSelling = () => {
  
  
  function ToastComponent(event) {
    const toast = useToast();

    return(
    <Box className="w-[70px] mt-5" onClick={() =>
      toast({
        title: 'Book Listed.',
        description: "We've listed your book for selling.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }>
      <button type="submit" className="bg-skin-lightGreen text-skin-darkGreen font-bold p-2 rounded-lg "
      onClick={(event) => event.preventDefault()
      }
    >
      Submit
    </button>
    </Box>
    )
  }


  return (
    <div>
    <Document />
    <Navbar />
    <GeneralSidebar title="List Your Book" />

    <form>
      {/* ///////////////////////////////////Enter Book Details Below(first part)//////////////////////////////// */}
      <div className="mt-10 w-10/12 mx-auto">
        <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-5">
              Enter Book Details Below
            </h1>
            <div className="my-3">
              <h3>Book Name</h3>
              <ChakraProvider className="w-[30vw]">
                <Input placeholder="Enter the book Name" className="w-[10vw]" />
              </ChakraProvider>{" "}
              <div className="my-5">
                <h3>Author Name</h3>
                <ChakraProvider>
                  <Input placeholder="Enter the Author Name" />
                </ChakraProvider>
              </div>
              <div className="my-3">
                <h3>Product Description</h3>
                <ChakraProvider>
                  <Input placeholder="Enter Product Description" />
                </ChakraProvider>
              </div>
              <div className="my-3">
                <h3>Quantity</h3>
                <ChakraProvider>
                  <Input placeholder="Enter Quantity" />
                </ChakraProvider>
              </div>
              <div className="mt-5">
                <div className="mb-5">
                  <h3> price</h3>
                  <ChakraProvider>
                    <Input placeholder="Enter price" />
                  </ChakraProvider>
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////Enter Book Details Below(last part)//////////////////////////////// */}
          <div className="mt-0 md:mt-[50px]">
            <div className="xl:pr-8">
              <div className="hidden md:block">
                <img
                  src="/ListBookForSelling.svg"
                  className="w-[230px] h-[160px]"
                ></img>
              </div>

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
        </div>
      </div>
      {/* /////////<///////////////////////////After Grid////////////////////////////////////////// */}

      <div className="mt-5 w-10/12 mx-auto">
      <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)]">
                <label className="block text-sm font-medium text-gray-700">
        Add Product Image
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          </div>
        </div>
      <ChakraProvider>
      <ToastComponent />
      </ChakraProvider>
      </div>
      </div>
    </form>
    </div>
  );
};

export default ListBookForSelling;
