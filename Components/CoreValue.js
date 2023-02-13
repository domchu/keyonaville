import React from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { RiBookLine } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";
import { GiFlowerPot } from "react-icons/gi";
import students from "../public/images/nature8.jpg";

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
                  <li className="core-value-li">Punctuality</li>
                  <li className="core-value-li">Sacrifices</li>
                  <li className="core-value-li">Teamwork</li>
                  <li className="core-value-li">Neatness</li>
                  <li className="core-value-li">Integrity</li>
                  <li className="core-value-li">Possibility</li>
                </Box>
              </Flex>
              <Flex justifyContent="space-around" mt={20} mb={20}>
                <Box>
                  <GiFlowerPot className="core-value-icons" />
                </Box>
                <Box className="core-value">
                  <h3>OUR VISION</h3>
                  <p className="wrap-it">
                    To raise boys and girls of character and excellence in
                    wisdom and humility who shall contribute to their immediate
                    society and nation building.
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
                    To provide all round quality education of international
                    standard to biys and girls with emphasis on character
                    training, vocation and academic excellence
                  </p>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Image
                src={students}
                alt="Students"
                height={600}
                width={500}
                className="students-img"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CoreValue;
