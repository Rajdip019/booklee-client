import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";


const ToggleButtonDonate = () => {
  return (
    <div>
        <ChakraProvider>
      <Tabs variant="soft-rounded" colorScheme="green" size="lg" orientation="horizontal">
        <TabList className="bg-blue-50 w-[300px] rounded-3xl shadow-lg">
          <Link href="/userprofile/donate">
          <Tab className="w-[160px]">Educational</Tab>
          </Link>
          <Link href="/userprofile/sell">
          <Tab className="w-[150px] "> Others</Tab>
          </Link>
        </TabList>
      </Tabs>
      </ChakraProvider>
    </div>
  );
};

export default ToggleButtonDonate;
