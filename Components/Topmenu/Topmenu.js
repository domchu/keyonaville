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
          <Flex>
            <Flex>
              <FcOvertime />
              <p>Mon - Fri 70:00 - 5:30</p>
            </Flex>
            <Flex>
              <FcCallback />
              <p>+234(0) 703 4278 995</p>
            </Flex>
          </Flex>
          <Flex>
            <Flex>
              <GrLocation />
              <p>
                N0.8 Odinika street, Afromedia Badagry Express Way. Ojo-Lagos
              </p>
            </Flex>
            <Flex>
              <BiEnvelope />
              <p>info@keyonaville.sch.ng</p>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Topmenu;
