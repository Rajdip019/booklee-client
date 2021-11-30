import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
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

const Modals = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <>

      {/* This is the button which willbe shown style this Acoording to that.       */}


      <Button onClick={onOpen}>Open Modal</Button>

 
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <div>
        <ModalContent className="bg-white rounded-lg shadow-lg p-4" maxW="400px" m="auto" minH="100px">
          <ModalHeader className="text-center text-2xl font-semibold">Modal Title</ModalHeader>
          <ModalCloseButton className=" right-4 absolute" />
          <ModalBody className="text-center">
            Hello this is modal Body
          </ModalBody>

          <ModalFooter>
            <Button className="ml-auto mr-auto">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </div>
      </Modal>

    </>

    )
}

export default Modals
