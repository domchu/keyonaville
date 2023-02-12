import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const WhyKeyona = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        flexDirection={{
          base: "1fr",
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
        }}
      >
        <Box>
          <h2>Quality Learning</h2>
          <p>
            A school where high moral and quality learning is built in the life
            of our future generations.
          </p>
        </Box>
      </Flex>
    </>
  );
};

export default WhyKeyona;
