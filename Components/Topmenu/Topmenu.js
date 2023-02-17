import { Box, Flex } from "@chakra-ui/react";
import { TfiLocationPin, TfiTimer } from "react-icons/tfi";
import { BiEnvelope } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

const Topmenu = () => {
  return (
    <>
      <Box className="topnav-container">
        <Flex className="topnav-items">
          <Flex className="topnav-wrapper">
            <Flex className="text-wrapper">
              <TfiTimer fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> Mon - Fri 70:00 - 4:30</p>
              </Box>
            </Flex>
            <Flex className="text-wrapper">
              <FiPhoneCall fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> +234 (0) 703 4278 995</p>
              </Box>
            </Flex>
          </Flex>
          <Flex className="topnav-wrapper">
            <Flex className="text-wrapper">
              <TfiLocationPin fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> 8-10 Odinaka Street,Afromedia. Ojo-Lagos</p>
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
