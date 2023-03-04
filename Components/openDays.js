import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Map from "./Map";

const openDays = () => {
  const [getDays, setGetDays] = useState();
  //get the current day from the new date method
  function activateDays() {
    let today = new Date();
    let currentDay = today.getDay();
    setGetDays(currentDay);
  }

  // calling the activateDays method
  useEffect(() => {
    activateDays();
  }, []);

  return (
    <>
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        className="wrapper-contact"
      >
        <Box className="banner-openday" m={{ base: 20, sm: 20, md: 0, lg: 0 }}>
          <ul>
            <li>
              <Flex
                justifyContent="space-around"
                paddingTop="2rem"
                paddingBottom="2rem"
                color="green.300"
                fontWeight="600"
              >
                <span>Open Days</span>
                <span>Open Hours</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Monday</span>
                <span>7am - 4:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 2 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Tuesday</span>
                <span>7am - 4:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 3 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Wednesday</span>
                <span>7am - 4:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 4 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Thursday</span>
                <span>7am - 4:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 5 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Friday</span>
                <span>7am - 4:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 6 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Saturday</span>
                <span>Closed</span>
              </Flex>
            </li>
            <li className={getDays == 0 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Sunday</span>
                <span>Closed</span>
              </Flex>
            </li>
          </ul>
        </Box>
        <Box className="map">
          <Map />
        </Box>
      </Flex>
    </>
  );
};

export default openDays;
