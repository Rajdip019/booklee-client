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
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
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
                    <h2 className="text-center text-xl font-semibold py-3">Condition</h2>
                    <div className="w-full ">

                    <Checkbox>4 Star & above</Checkbox>
                    <br />
                    <Checkbox >3 Star and above</Checkbox>
                    <br />
                    <Checkbox >All</Checkbox>
    
                    </div>
                </div>
                <div  className="mt-10">
                <h2 className="text-center text-xl font-semibold py-3">Category</h2>
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
