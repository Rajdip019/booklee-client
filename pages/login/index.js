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
import { Checkbox } from "@chakra-ui/react";

const login = () => {
  return (
    <>


      <Document />
      
      <h1 className="hidden lg:block" style={{textAlign:"right",paddingRight:"50px",marginTop:"10px"}}>Don’t have an account? <span className="text-skin-darkGreen font-medium">Get Started</span></h1>
        <div className="" style={{marginTop:"6vh"}}>
          <div className="">
            <div>
              <div className="mx-auto">
                <img src="/Logo.png" className="mx-auto w-[250px]"></img>
              </div>
              <div className="w-10/12 md:w-9/12 lg:max-w-[39vw] mx-auto">
                <div>

                  <h1 className="font-medium text-lg">Login:</h1>
                  <h3>Enter your details below</h3>
                </div>
              </div>
            </div>
            <div className="my-5">
              <AuthOptions />
            </div>

            <div className="w-10/12 md:w-9/12 lg:max-w-[39vw] mx-auto">
              <hr className="w-full my-10"></hr>
              <form>
                <div>
                  <div className="my-5">
                    <h3>Email</h3>
                    <ChakraProvider>
                      <Input placeholder="john@gmail.com" />
                    </ChakraProvider>
                  </div>
                  <div className="my-5">
                    <ChakraProvider>
                      <h3>Password</h3>
                      <PasswordInput placeholder="At least 8 symbols..." />
                    </ChakraProvider>
                  </div>
                  <div className="my-10">
                    <div className="flex justify-between">
                      <ChakraProvider>
                        <Checkbox color="green" colorScheme="green">
                          Remember me
                        </Checkbox>
                      </ChakraProvider>
                      <h3 className="text-skin-darkGreen underline">
                        Forgot password?
                      </h3>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="text-center w-full bg-skin-lightGreen text-skin-darkGreen hover:bg-skin-hoverGreen font-bold p-3 rounded-lg shadow-lg"
                    >
                      Login
                    </button>
                    <h1 className="block lg:hidden text-center mt-5" >Don’t have an account? <span className="text-skin-darkGreen font-medium">Get Started</span></h1>
                  </div>
                </div>
              </form>
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
