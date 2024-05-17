import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl">
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        marginBlockStart={"50px"}
        inlineSize={"100%"}
        bg={"white"}
        borderRadius={"10px"}
      >
        <Text
          fontFamily={""}
          fontSize={"25px"}
          fontWeight={"700"}
          textAlign={"center"}
          color={"teal "}
        >
          Chat Hub
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        marginBlockStart={"20px"}
        inlineSize={"100%"}
        bg={"white"}
        borderRadius={"10px"}
      >
        <Tabs variant="soft-rounded">
          <TabList marginBottom={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
