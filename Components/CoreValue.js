import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SlNotebook } from "react-icons/sl";

const CoreValue = () => {
  return (
    <>
      <Flex>
        <Box>
          <Flex justifyContent="space-around" width="300px">
            <Box>
              <SlNotebook />
            </Box>
            <Box>
              <h2>OUR Value</h2>
              <ul type="bullet">
                <li>Capacity Building</li>
                <li>Punctuality</li>
                <li>Sacrifices</li>
                <li>Teamwork</li>
                <li>Neatness</li>
                <li>Integrity</li>
                <li>Possibility</li>
              </ul>
            </Box>
          </Flex>
          <Flex justifyContent="space-around" width="300px">
            <Box>
              <SlNotebook />
            </Box>
            <Box>
              <h2>OUR VISION</h2>
              <p>
                To raise boys and girls of character and excellence in wisdom
                and humility who shall contribute to their immediate society and
                nation building.
              </p>
            </Box>
          </Flex>
          <Flex justifyContent="space-around" width="300px">
            <Box>
              <SlNotebook />
            </Box>
            <Box>
              <h2>OUR MISSION</h2>
              <p>
                To provide all round quality education of international standard
                to biys and girls with emphasis on character training, vocation
                and academic excellence
              </p>
            </Box>
          </Flex>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};

export default CoreValue;
