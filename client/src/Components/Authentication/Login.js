import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <VStack spacing={"5px"}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default Login;
