import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { ChakraProvider, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const DeleteModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <ChakraProvider>
      <button   onClick={onOpen} className=" w-[100px] text-left font-semibold text-skin-darkRed">Delete</button>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Do you want to delete this product?</h1>
            </ModalBody>

            <ModalFooter>
              <Button
                className="bg-skin-lightBlue text-skin-darkBlue font-bold p-2 rounded-lg mt-5"
                mr={3}
                onClick={onClose}
              >
                No
              </Button>
              <Button
                variant="ghost"
                type="submit"
                className="bg-skin-lightRed font-bold p-2 rounded-lg mt-5"
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
};

export default DeleteModalButton;
