import { useState } from "react"
import React from 'react'
import { useDisclosure } from "@chakra-ui/hooks"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'

const DonationProofMakingForm = () => {

        
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [expandZone, setExpandZone] = useState(false);

    function handleExpansion() {
      setExpandZone(true);
    }
    function handleExpansionClose() {
      setExpandZone(false);
    }

    
    return (
        <>

      {/* ////////////////////This is the button which willbe shown style this Acoording to that./////////////////////////////////////// */}


      <Button onClick={() => {onOpen(); handleExpansionClose(); }}>Open Modal</Button>

 
      <Modal isOpen={isOpen} onClose={onClose}  isCentered>
        <ModalOverlay bgColor="rgba(0, 0, 0, 0.2)"/>
        <div>
        <ModalContent className="bg-white rounded-lg shadow-lg p-8" maxW="400px" m="auto" minH="100px">
          <ModalHeader className="text-center text-2xl font-semibold">Make Donation Proof</ModalHeader>
          <ModalCloseButton className=" right-4 absolute" />
          <ModalBody className="text-center">

          {expandZone ?(
            <>
            <p className="text-left mt-6">Full Name (Buyer):</p>
            <input type="text" className="w-full mr-auto ml-auto bg-gray-100 " placeholder="Full Name" disabled/>
            <p className="text-left mt-3" >Price</p>
            <input type="text" className="w-full mr-auto ml-auto bg-gray-100 " placeholder="Price" disabled/>
            <p className="text-left mt-3" >Mobile no.</p>
            <input type="tel" className="w-full mr-auto ml-auto bg-gray-100" placeholder="Mobile no." disabled/>
            <p className="text-left mt-3">Enter OTP</p>
            <input type="text" className="w-full mr-auto ml-auto focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="OTP"/>
            </>
          ) : (
            <>
            <p className="text-left mt-6">Full Name (Buyer):</p>
            <input type="text" className="w-full mr-auto ml-auto focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="Full Name"/>
            <p className="text-left mt-3">Price</p>
            <input type="tel" className="w-full mr-auto ml-auto bg-gray-100" placeholder="Price" disabled value="₹0"/>
            <p className="text-left mt-3">Mobile no.</p>
            <input type="text" className="w-full mr-auto ml-auto focus:border-green-600 focus:ring-1 focus:ring-green-600"  placeholder="Mobile no"/>
            </>
          )}
          </ModalBody>

          <ModalFooter display="block" className="text-center">

          {expandZone ?(
            <>
            <button className="ml-auto mr-auto bg-skin-lightGreen text-skin-darkGreen rounded-lg p-3 mt-6 font-bold">Verify</button>
            <a href="" ><p className="text-skin-darkRed underline mt-2">Resend OTP</p></a>
            </>
          ) : (
            <button className="ml-auto mr-auto bg-skin-lightGreen text-skin-darkGreen rounded-lg p-3 mt-6 font-bold" onClick={handleExpansion} >Get OTP</button>
          )}

          </ModalFooter>
        </ModalContent>
      </div>
      </Modal>

    </>

    )
}

export default DonationProofMakingForm
