import React from "react";
import {
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { ChakraProvider} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const SoldModalbutton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <ChakraProvider>
      <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold">
      <span  onClick={onOpen} className="text-skin-darkBlue">Sold</span>
      </MenuItem>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sold</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Is this Product Sold?</h1>
            </ModalBody>

            <ModalFooter>
              <button
                className="bg-skin-lightBlue text-skin-darkBlue font-bold p-2 mx-2 rounded-lg mt-5"
                mr={3}
                onClick={onClose}
              >
                No
              </button>
              <button
                type="submit"
                className="bg-skin-lightGreen text-skin-darkGreen font-bold mx-4 p-2 rounded-lg mt-5"
              >
                Yes
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
};

export default SoldModalbutton;
