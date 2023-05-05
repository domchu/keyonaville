import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

const WhyKeyona = () => {
  return (
    <>
      <Box>
        <Box className="title">
          <h2>
            <span>/</span>WHY KEYONAVILLE SCHOOL
          </h2>
        </Box>

        <Box className="grid-container">
          <Box className="why-text">
            <h4>
              Quality Learning <span style={{ fontSize: "2rem" }}>&#9758;</span>
            </h4>
            <p>
              {/* At keyonaville school, special care is taken to promote the
              virtues of personal integrity, modesty, sense of responsibility
              and moral uprightness.
              <br /> */}
              A comprehensive curriculum designed to provide quality learning
              expirences that mold our pupils/students into global and upright
              citizens.
              <br />
              Moral education at the school is based in christian principles
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Problem Solvers
              <span style={{ fontSize: "1.7rem" }}>&#9836;</span>
            </h4>
            <p>
              A learning experience that fosters critical thinking, preparing
              our children to solve world/real life problems
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Innovative Teaching
              <span style={{ fontSize: "1.7rem" }}>&#9885;</span>
            </h4>
            <p>
              Creating teaching experiences that encourage creativity and
              innovation in our pupils/students by utilizing massive 21st
              centurey teaching methodology.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Conducive Environment
              <span style={{ fontSize: "1.7rem" }}>&#9788;</span>
            </h4>
            <p>
              A safe and orderly environment that caters for all sorts of
              learners, as well as a conducive environment with a pleasant
              atmosphere that encourages productive learning.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Experienced Teachers
              <span style={{ fontSize: "1.7rem" }}>&#8594;</span>
            </h4>
            <p>
              Highly equipped teachers with vast knowledge of the 21st century
              teaching methodology.
            </p>
          </Box>
          <Box className="why-text">
            <h4>
              Experte Methodology
              <span style={{ fontSize: "1.7rem" }}>&#9883;</span>
            </h4>
            <p>
              A pedagogy that encourages critical thinking, creative thinking
              and problem-solving skills in our pupils/students, resulting in
              logical arguments.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhyKeyona;
