import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { FcOvertime, FcCallback } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { BiEnvelope } from "react-icons/bi";

const Topmenu = () => {
  return (
    <>
      <Box className="topnav-container">
        <Flex className="topnav-items">
          <Flex className="topnav-wrapper">
            <Flex className="text-wrapper">
              <FcOvertime fontSize={20} color="#d3d3d3" marginRight="1rem" />
              <Box className="text-content">
                <p> Mon - Fri 70:00 - 5:30</p>
              </Box>
            </Flex>
            <Flex className="text-wrapper">
              <FcCallback fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> +234 (0) 703 4278 995</p>
              </Box>
            </Flex>
          </Flex>
          <Flex className="topnav-wrapper">
            <Flex className="text-wrapper">
              <GrLocation fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> No.8 Odinaka Street,Afromedia. Ojo-Lagos</p>
              </Box>
            </Flex>
            <Flex className="text-wrapper">
              <BiEnvelope fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> info@keyonaville.sch.ng</p>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Topmenu;
