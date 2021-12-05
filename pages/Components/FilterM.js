import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,  
    ChakraProvider,
    Checkbox
  } from '@chakra-ui/react'

const FilterM = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    
    return (
        <>
        <ChakraProvider>
        <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pr-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
        Filter
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
  
            <DrawerBody >
            <>
            <div className="text-center">
                <h1 className="text-3xl font-semibold py-10">Filter</h1>
                <div>
                    <h2 className="text-center text-xl font-semibold py-3">Price</h2>
                    <input type="range" className="w-9/12"/>
                    <div>

                    </div>
                </div>
                <div  className="mt-10">
                    <h2 className="text-xl font-semibold py-3">Condition</h2>
                    <div className="mx-auto">
                    <div className="text-left inline">
                      

                    <Checkbox>4 Star & above</Checkbox>
                    <br />
                    <Checkbox >3 Star and above</Checkbox>
                    <br />
                    <Checkbox >All</Checkbox>
    
                    </div>
                    </div>
                </div>
                <div  className="mt-10">
                <h2 className="text-xl font-semibold py-3">Category</h2>
                <Checkbox>Educational</Checkbox>
                    <br />
                    <Checkbox >Story</Checkbox>
                    <br />
                    <Checkbox >Sci-fi</Checkbox>
                    <br />
                    <Checkbox >Documentry</Checkbox>
                </div>
                <div  className="mt-10 text-center">
                    <h2 className="text-center text-xl font-semibold py-3">Locations</h2>
                   <select name="" id="" className=" ml-10 mt-1 w-9/12 pl-3">
                       <option value="" className="pl-3">Select a State</option>
                   </select>
                   <select name="" id="" className=" ml-10 mt-3 w-9/12 pl-3">
                       <option value="" className="pl-3">Select a City</option>
                   </select>
                </div>
            </div>
        </>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
        </ChakraProvider>
      </>
    )
}

export default FilterM
