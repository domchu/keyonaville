import React from "react";
import Image from "next/image";
import { Grid, Flex, Box } from "@chakra-ui/react";
import playground from "../public/images/playground.jpeg";
import computer from "../public/images/computerlab.jpeg";
import sickbay from "../public/images/sickbay.jpeg";
import Library from "../public/images/library.jpeg";
import classroom from "../public/images/classroom.jpeg";
import schoolbus from "../public/images/banner1.jpeg";

const Facilities = () => {
  return (
    <>
      <Box>
        <Box className="title">
          <h2>
            <span>/</span>KEYONAVILLE FACILITIES
          </h2>
        </Box>
        <Grid className="fac-overall-container" mt={10} mb={30}>
          <Box className="img-container">
            <Image
              src={playground}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-img"
            />
            <div className="middle">
              <div className="text">Playground</div>
            </div>
          </Box>
          <Box className="fac-image-container">
            <Image
              src={Library}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-images"
            />
            <h4>Library</h4>
          </Box>
          <Box className="fac-image-container">
            <Image
              src={computer}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-images"
            />
            <h4>Computer Lab</h4>
          </Box>
          <Box className="fac-image-container">
            <Image
              src={sickbay}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-images"
            />
            <h4>Sick Bay</h4>
          </Box>
          <Box className="fac-image-container">
            <Image
              src={classroom}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-images"
            />
            <h4>Class Room</h4>
          </Box>
          <Box className="fac-image-container">
            <Image
              src={schoolbus}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-images"
            />
            <h4>school Bus</h4>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default Facilities;
