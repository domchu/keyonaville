import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const WhyKeyona = () => {
  return (
    <>
      <Box>
        <Box>
          <h2>WHY KEYONAVILLE SCHOOL</h2>
        </Box>

        <Flex
          justifyContent="center"
          alignItems="center"
          // textAlign="center"
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
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box>
            <h2>Problem Solvers</h2>
            <p>
              A school where our future generations are developed with a
              critical mind set to become problem solvers in our society.
            </p>
          </Box>
          <Box>
            <h2>Innovative Teaching</h2>
            <p>
              A school where high innovative teaching and learning is given at
              an affordable tuition
            </p>
          </Box>
          <Box>
            <h2>Conducive Environment</h2>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box>
            <h2>Experience Teachers</h2>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box>
            <h2>Experte Methodology</h2>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default WhyKeyona;
