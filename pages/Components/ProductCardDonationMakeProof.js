import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    ChevronDownIcon
  } from '@chakra-ui/react'

const ProductCardDonationMakeProof = (props) => {
    return (
        <div>
            <div>
          <div>
            <img className=" h-[300px] w-[266px] rounded-t-lg " src={props.img} alt="" />
            </div>

            <div className="flex  mb-3 w-[266px]">
            <button className="w-[235px] rounded-bl-lg bg-skin-lightGreen text-skin-darkGreen py-3 font-bold text-left pl-4">Get Donation Proof</button>
            {/* /////////////////////////////////////////// Dropdown Menu Config Start/////////////////////////////////////////////////////*/}

            <Menu>
            <MenuButton className="bg-skin-lightGreen text-skin-darkGreen rounded-br-lg border-none"  px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'Green.400' }}
            _focus={{ boxShadow: 'outline' }} rightIcon={<ChevronDownIcon />}>
            <div className="w-[35px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            </div>    
            </MenuButton>
            <MenuList  className=" bg-white rounded-lg p-2 w-28 shadow-lg" >
                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"><span className="text-skin-darkGreen">Edit</span></MenuItem>
                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"><span className="text-skin-darkGreen">Delete</span></MenuItem>
                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"><span className="text-skin-darkGreen">Donated</span></MenuItem>
            </MenuList>
            </Menu>


            {/* /////////////////////////////////////////// Dropdown Menu Config End/////////////////////////////////////////////////////*/}
            </div>
            <h1 className="w-[266px] font-semibold text-xl mb-2">{props.name}</h1>
            <div className="flex">
            <span className="font-bold text-base">{props.condition}</span>
            <span className="pl-1"><svg xmlns="http://www.w3.org/2000/svg" className="h- w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            </span>
            </div>  
        </div>
        </div>
    )
}

export default ProductCardDonationMakeProof
