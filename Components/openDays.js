import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

const openDays = () => {
  const [getDays, setGetDays] = useState();

  function activateDays() {
    let today = new Date();
    let currentDay = today.getDay();
    console.log(currentDay);
    setGetDays(currentDay);
  }
  useEffect(() => {
    activateDays();
  }, []);
  return (
    <>
      <Box className="contactus"></Box>
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
            {/* <li className={getDays == 0 ? "active" : "days"}>
            <Flex justifyContent="space-around" paddingBottom="10px">
              <span>Sunday</span>
              <span>closed</span>
            </Flex>
          </li> */}
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Monday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 2 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Tuesday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 3 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Wednesday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 4 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Thursday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 5 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Friday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            {/* <li className={getDays == 6 ? "active" : "days"}>
            <Flex justifyContent="space-around" paddingBottom="10px">
              <span>Saturday</span>
              <span>closed</span>
            </Flex>
          </li> */}
          </ul>
        </Box>
        {/* end of the days and hours */}
        <Box className="banner-location" m={{ base: 20, sm: 20, md: 0, lg: 0 }}>
          <Box className="frame-wrapper"></Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4004587114587!2d3.184714914193238!3d6.470851125569799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86b056d20783%3A0x3cd75bc3da14206d!2sFlorintech%20computer%20college!5e0!3m2!1sen!2sng!4v1675250971122!5m2!1sen!2sng"
            height="400px"
            width="400px"
          ></iframe>
        </Box>
      </Flex>
      {/* </Flex> */}
    </>
  );
};

export default openDays;
