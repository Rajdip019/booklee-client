import React from "react";
import AuthOptions from "../Components/AuthOptions";
import Document from "../document";
import {
  Input,
  InputRightElement,
  InputGroup,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

const login = () => {
  return (
    <>


      <Document />
      
        <div className="" style={{marginTop:"6vh"}}>
          <div className="">
            <div>
              <div className="mx-auto ">
                <img src="/Logo.png" className="mx-auto w-[250px]"></img>
              </div>
              <div className="w-10/12 md:w-9/12 lg:max-w-[39vw] mx-auto">
                <div className="text-center">

                  <h3 className="text-md mt-10 mb-5">Login with</h3>
                </div>

                <AuthOptions/>

              </div>
            </div>
            <div className="my-5">
            <h1 className="text-center mt-5">Don’t have an account? <span className="text-skin-darkGreen font-medium">Get Started</span></h1>
           
            </div>

          </div>
        </div>

    </>
  );
};

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default login;
