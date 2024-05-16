import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

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
      >
        <Text>Chat Hub</Text>
      </Box>
    </Container>
  );
};

export default Homepage;
