import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

const WhyKeyona = () => {
  return (
    <>
      <Box>
        <Box>
          <h2>WHY KEYONAVILLE SCHOOL</h2>
        </Box>

        <Grid
          justifyContent="center"
          // alignItems="center"
          // textAlign="center"
          GridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          }}
        >
          <Box className="why-text">
            <h4>Quality Learning</h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box className="why-text">
            <h4>Problem Solvers</h4>
            <p>
              A school where our future generations are developed with a
              critical mind set to become problem solvers in our society.
            </p>
          </Box>
          <Box className="why-text">
            <h4>Innovative Teaching</h4>
            <p>
              A school where high innovative teaching and learning is given at
              an affordable tuition
            </p>
          </Box>
          <Box className="why-text">
            <h4>Conducive Environment</h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box className="why-text">
            <h4>Experience Teachers</h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box className="why-text">
            <h4>Experte Methodology</h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default WhyKeyona;
