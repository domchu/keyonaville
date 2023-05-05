import React from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { RiBookLine } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";
import { GiFlowerPot } from "react-icons/gi";
import pupils from "../public/images/pupils.jpg";

const CoreValue = () => {
  return (
    <>
      <Box>
        <Box className="title">
          <h2>
            <span>/</span>MISSION STATEMENTS
          </h2>
        </Box>
        <Flex className="core-container">
          <Box className="flex-content">
            <Box className="core-text">
              <Flex width="">
                <Box>
                  <RiBookLine className="core-value-icons" />
                </Box>
                <Box className="core-value">
                  <h3>OUR Value</h3>
                  <li className="core-value-li">Capacity Building</li>
                  <li className="core-value-li">Moral Uprightness</li>
                  <li className="core-value-li">Excellence</li>
                  <li className="core-value-li">Teamwork</li>
                  <li className="core-value-li">Creativity</li>
                  <li className="core-value-li">Relevance</li>
                  <li className="core-value-li">Inclusion</li>
                </Box>
              </Flex>
              <Flex justifyContent="space-around" mt={20} mb={20}>
                <Box>
                  <GiFlowerPot className="core-value-icons" />
                </Box>
                <Box className="core-value">
                  <h3>OUR VISION</h3>
                  <p className="wrap-it">
                    To be a distinguished international school where
                    pupils/students are raised to be globally relevant and are
                    life long learners.
                  </p>
                </Box>
              </Flex>
              <Flex justifyContent="space-around">
                <Box>
                  <TfiPencil className="core-value-icons" />
                </Box>
                <Box className="core-value">
                  <h3>OUR MISSION</h3>
                  <p>
                    Keyonavillie school is dedicated to providing a safe and
                    warm environment that stimultes creativity and problem
                    solving skills that unleash the genius in the child.
                  </p>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Image
                src={pupils}
                alt="Students"
                height={600}
                width={500}
                className="students-img"
                loading="lazy"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CoreValue;
