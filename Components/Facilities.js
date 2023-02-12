import React from "react";
import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import playground from "../public/images/nature7.jpg";
import computer from "../public/images/nature1.jpg";
import sickbay from "../public/images/nature6.jpg";
import Library from "../public/images/nature8.jpg";
import classroom from "../public/images/nature3.jpg";

const Facilities = () => {
  return (
    <>
      <Box>
        <Box className="title">
          <h2>
            <span>/</span>KEYONAVILLE FACILITIES
          </h2>
        </Box>
        <Flex className="fac-overall-container" mt={30} mb={30} width="100%">
          <Box className="fac-image-container">
            <Image
              src={playground}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-images"
            />
            <h4>Playground</h4>
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
        </Flex>
      </Box>
    </>
  );
};
export default Facilities;
