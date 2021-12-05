import React from 'react'
import {
    ChakraProvider,
    Checkbox
  } from '@chakra-ui/react'

const FilterPC = () => {
    return (
        <>
        <ChakraProvider>
            <div className="w-[300px] text-center shadow-2xl h-[100vh] fixed">
                <h1 className="text-3xl font-semibold py-10">Filter</h1>
                <div>
                    <h2 className="text-left pl-10 text-xl font-semibold py-3">Price</h2>
                    <input type="range" className="w-9/12"/>
                    <div>

                    </div>
                </div>
                <div  className="mt-10">
                    <h2 className="text-left pl-10 text-xl font-semibold py-3">Condition</h2>
                    <div className="text-left pl-10 mt-1">
                    <Checkbox>4 Star & above</Checkbox>
                    <br />
                    <Checkbox >3 Star and above</Checkbox>
                    <br />
                    <Checkbox >All</Checkbox>
                    </div>
                </div>
                <div  className="mt-10">
                <h2 className="text-left pl-10 text-xl font-semibold py-3">Category</h2>
                    <div className="text-left pl-10 mt-1">
                    <Checkbox>Educational</Checkbox>
                    <br />
                    <Checkbox >Story</Checkbox>
                    <br />
                    <Checkbox >Sci-fi</Checkbox>
                    <br />
                    <Checkbox >Documentry</Checkbox>
                    </div>
                </div>
                <div  className="mt-10">
                    <h2 className="text-left pl-10 text-xl font-semibold py-3">Locations</h2>
                   <select name="" id="" className="block ml-10 mt-1 w-9/12">
                       <option value="">Select a State</option>
                   </select>
                   <select name="" id="" className="block ml-10 mt-3 w-9/12">
                       <option value="">Select a City</option>
                   </select>
                </div>
            </div>
            </ChakraProvider>
        </>
    )
}

export default FilterPC
