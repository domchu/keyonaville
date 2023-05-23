import { Box, Flex } from "@chakra-ui/react";
import { TfiLocationPin, TfiTimer } from "react-icons/tfi";
import { BiEnvelope } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const Topmenu = () => {
  return (
    <>
      <Box className="topnav-container">
        <Flex className="topnav-items">
          <Flex className="topnav-wrapper">
            <Flex className="text-wrapper">
              <TfiTimer fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> Mon - Fri 70:00AM - 4:30PM</p>
              </Box>
            </Flex>
            <Flex className="text-wrapper">
              <FiPhoneCall fontSize={20} color="#d3d3d3" />
              <Box className="text-content">
                <p> +234 (0) 802 3507 229</p>
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
                <Link
                  href="mailto:keyonavilleschools.com.ng/webmail"
                  style={{ color: "#cccccc" }}
                >
                  info@keyonavilleschools.com.ng
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Topmenu;
