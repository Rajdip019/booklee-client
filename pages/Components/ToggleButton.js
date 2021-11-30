import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider } from "@chakra-ui/react";
const ToggleButton = () => {
  return (
    <div>
        <ChakraProvider>
      <Tabs variant="soft-rounded" colorScheme="blue" size="lg" orientation="horizontal">
        <TabList className="bg-blue-50 w-[300px] rounded-3xl shadow-lg">
          <Tab className="w-[160px]">Educational</Tab>
          <Tab className="w-[150px] "> Others</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </ChakraProvider>
    </div>
  );
};

export default ToggleButton;
