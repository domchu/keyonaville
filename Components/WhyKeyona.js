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
          alignItems="center"
          // textAlign="center"
          GridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          }}
        >
          <Box className="why-text">
            <h4>
              Quality Learning <span style={{ fontSize: "2rem" }}>&#9758;</span>
            </h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Problem Solvers
              <span style={{ fontSize: "1.7rem" }}>&#9836;</span>
            </h4>
            <p>
              A school where our future generations are developed with a
              critical mind set to become problem solvers in our society.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Innovative Teaching
              <span style={{ fontSize: "1.7rem" }}>&#9885;</span>
            </h4>
            <p>
              A school where high innovative teaching and learning is given at
              an affordable tuition
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Conducive Environment
              <span style={{ fontSize: "1.7rem" }}>&#9788;</span>
            </h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Experience Teachers
              <span style={{ fontSize: "1.7rem" }}>&#9770;</span>
            </h4>
            <p>
              A school where high moral and quality learning is built in the
              life of our future generations.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Experte Methodology
              <span style={{ fontSize: "1.7rem" }}>&#9883;</span>
            </h4>
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
