import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SlNotebook } from "react-icons/sl";

const CoreValue = () => {
  return (
    <>
      <Flex>
        <Box>
          <Flex justifyContent="space-around" width="300px">
            <Box>
              <SlNotebook />
            </Box>
            <Box>
              <h2>OUR Value</h2>
              <ul type="bullet">
                <li>Capacity Building</li>
                <li>Punctuality</li>
                <li>Sacrifices</li>
                <li>Teamwork</li>
                <li>Neatness</li>
                <li>Integrity</li>
                <li>Possibility</li>
              </ul>
            </Box>
          </Flex>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};

export default CoreValue;
