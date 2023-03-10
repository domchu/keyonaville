import React from "react";
import Image from "next/image";
import { Grid, Box } from "@chakra-ui/react";
import playground from "../public/images/f1.jpeg";
import computer from "../public/images/complab.jpeg";
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
              <div className="faci-text">Playground</div>
            </div>
          </Box>
          <Box className="img-container">
            <Image
              src={Library}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-img"
            />
            <Box className="middle">
              <Box className="faci-text">Library</Box>
            </Box>
          </Box>
          <Box className="img-container">
            <Image
              src={computer}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-img"
            />
            <div className="middle">
              <div className="faci-text">Computer Lab</div>
            </div>
          </Box>
          <Box className="img-container">
            <Image
              src={sickbay}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-img"
            />
            <div className="middle">
              <div className="faci-text">Sick Bay</div>
            </div>
          </Box>
          <Box className="img-container">
            <Image
              src={classroom}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-img"
            />
            <div className="middle">
              <div className="faci-text">Class Room</div>
            </div>
          </Box>
          <Box className="img-container">
            <Image
              src={schoolbus}
              alt="Playground"
              height="200px"
              width="250px"
              className="fac-img"
            />
            <div className="middle">
              <div className="faci-text">School Bus</div>
            </div>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default Facilities;
