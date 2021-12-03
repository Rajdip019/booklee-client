import React from "react";
import { useDisclosure } from '@chakra-ui/hooks'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,  
    ChakraProvider,
    Checkbox
  } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ChevronDownIcon,
} from "@chakra-ui/react";

import { Avatar } from "@chakra-ui/react";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (

    <div className="shadow-lg z-40">

      <nav className="bg-white flex justify-between max-w-8xl sm:px-6 lg:px-[200px]">
        <div className="flex-shrink-0">
          <Avatar
            className="flex justify-start h-20 w-auto"
            src="/Logo.png"
            alt="Workflow"
          />
        </div>
        <div className="w-72 flex">
          <Input
            type="text"
            placeholder="Search "
            className="hidden xl:block bg-gray-200 h-10  my-5 w-full rounded-r-none"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              className="bg-gray-300 h-10 mb-1.5 px-4 rounded-r-lg hidden xl:block"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <span className="hidden xl:block">
            <Button className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue p-2 px-3 rounded-lg mx-4">
              Sell
            </Button>
          </span>
          <span className="hidden xl:block">
            <Button className="bg-skin-lightGreen hover:bg-skin-hoverGreen text-skin-darkGreen p-2 rounded-lg mx-4">
              Donate
            </Button>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden xl:block h-5 w-5 text-skin-darkBlue mx-4 scale-150"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>

          {/* --------------------------------User Profile----------------------------------------------------- */}
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.2s"
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
              rightIcon={<ChevronDownIcon />}
            >
              <div className="w-[35px] hidden xl:block ml-4 ">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  borderRadius="100%"
                />
              </div>
            </MenuButton>
            <MenuList className=" bg-white rounded-lg p-2 w-28 shadow-lg">
              <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold">
                <span className="text-skin-darkBlue">Edit</span>
              </MenuItem>
              <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold">
                <span className="text-skin-darkBlue">Favourite</span>
              </MenuItem>
              <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold">
                <span className="text-skin-darkBlue">Message</span>
              </MenuItem>
              <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold">
                <span className="text-skin-darkBlue">Log-out</span>
              </MenuItem>
            </MenuList>
          </Menu>
          {/*Donate Button for mobile*/}
          <div className="block xl:hidden">
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.2s"
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                rightIcon={<ChevronDownIcon />}
              >
                <div className="w-[35px] ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-skin-darkGreen hover:"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
              </MenuButton>
              <MenuList className=" bg-white rounded-lg p-2 w-24 shadow-xl ">
                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold">
                  <span className="text-skin-darkGreen text-center mx-auto">
                    Sell
                  </span>
                </MenuItem>
                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold">
                  <span className="text-skin-darkGreen text-center mx-auto">
                    Donate
                  </span>
                </MenuItem>
                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold">
                  <span className="text-skin-darkGreen text-center mx-auto">
                    Donate to NGO
                  </span>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          {/* {/--------------------------------------*Hamburger Menu*--------------------------------------------/} */}
          <div className="block xl:hidden">
          <>
        <ChakraProvider>
        <Button ref={btnRef} onClick={onOpen} bgColor="white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
  
            <DrawerBody >
            <>
            <div className="text-center">
                <h1 className="text-3xl font-semibold py-10">Booklee</h1>
                <button className="w-full bg-skin-lightBlue text-xl rounded-lg font-semibold text-skin-darkBlue mb-2">Profile</button>
                <button className="w-full bg-skin-lightBlue text-xl rounded-lg font-semibold text-skin-darkBlue mb-2">Favourite</button>
                <button className="w-full bg-skin-lightBlue text-xl rounded-lg font-semibold text-skin-darkBlue mb-2">Messege</button>
                <button className="w-full bg-skin-lightBlue text-xl rounded-lg font-semibold text-skin-darkBlue mb-2">Logout</button>
            </div>
        </>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
        </ChakraProvider>
      </>
          </div>
        </div>
      </nav>
      {/* //////////////////////////////Mobile Serch Input/////////////////////////////////////////// */}
      <div className="w-full pb-5">
        <div className="mx-auto flex justify-center">
        <Input
          type="text"
          placeholder="Search"
          className="block xl:hidden bg-gray-200 h-10 w-[315px] md:w-[450px] rounded-r-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 30 30"
          className="bg-gray-300 h-10 mb-1.5 px-4 rounded-r-lg block xl:hidden  cursor-pointer "
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
      </div>
      </div>
    </div>
  );

};


export default Navbar;
