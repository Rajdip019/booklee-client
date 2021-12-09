import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ChevronDownIcon,
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

const DonatedModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <ChakraProvider>
      <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold">
      <span  onClick={onOpen} className="text-skin-darkGreen">Donated</span>
      </MenuItem>       


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Donated</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Have you donated this book?</h1>
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
                className="bg-skin-lightGreen text-skin-darkGreen font-bold p-2 mx-2 rounded-lg mt-5"
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

export default DonatedModalButton;
