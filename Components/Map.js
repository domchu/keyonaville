import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
// import OpenDays from "./OpenDays";

const Map = () => {
  const [getDays, setGetDays] = useState();

  function activeDays() {
    let today = new Date();
    let currentDay = today.getDate();
    setGetDays(currentDay);
  }
  useEffect(() => {
    activeDays();
  }, []);
  return (
    <>
      <Flex
        flexDirection={{ base: "column", m: "column", md: "row", lg: "row" }}
        className="wrapper-contact"
      >
        <Box className="banner" m={{ base: 20, sm: 20, md: 0, lg: 0 }}>
          <ul>
            <li>
              <Flex
                justifyContent="space-around"
                paddingTop="2rem"
                paddingBottom="2rem"
                color="green.300"
                fontWeight="600"
              >
                <span>Open Day</span>
                <span>Open Hour</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Monday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Tuesday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Wednesday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Thursday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Friday</span>
                <span>7am - 5:30pm</span>
              </Flex>
            </li>
          </ul>
        </Box>
        <Box className="banner-location" m={{ base: 20, sm: 20, md: 0, lg: 0 }}>
          <Box className="frame-wrapper"></Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.753336234345!2d3.1731800210065506!3d6.4738819333213105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b819c6fba15b1%3A0xacc3dbc2fa9d737a!2sKeyonavilleschool!5e0!3m2!1sen!2sng!4v1675896538770!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        {/* <openDays /> */}
      </Flex>
    </>
  );
};

export default Map;
