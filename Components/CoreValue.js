import React from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { SlNotebook } from "react-icons/sl";
import { TfiPencil } from "react-icons/tfi";
import { GiFlowerPot } from "react-icons/gi";
import students from "../public/images/nature20.jpg";

const CoreValue = () => {
  return (
    <>
      <Flex
        justifyContent="space-around"
        background="lightgray"
        alignItems="center"
        textAlign="left"
        marginBottom="5rem"
        marginTop="5rem"
        width="100%"
        padding="5rem 5rem"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box>
          <Flex width="500px">
            <Box>
              <SlNotebook className="core-value-icons" />
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
          <Flex justifyContent="space-around" width="500px" mt={20} mb={20}>
            <Box>
              <GiFlowerPot className="core-value-icons" />
            </Box>
            <Box className="core-value">
              <h3>OUR VISION</h3>
              <p>
                To raise boys and girls of character and excellence in wisdom
                and humility who shall contribute to their immediate society and
                nation building.
              </p>
            </Box>
          </Flex>
          <Flex justifyContent="space-around" width="500px">
            <Box>
              <TfiPencil className="core-value-icons" />
            </Box>
            <Box className="core-value">
              <h3>OUR MISSION</h3>
              <p>
                To provide all round quality education of international standard
                to biys and girls with emphasis on character training, vocation
                and academic excellence
              </p>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Image src={students} alt="Students" height={600} width={500} />
        </Box>
      </Flex>
    </>
  );
};

export default CoreValue;
