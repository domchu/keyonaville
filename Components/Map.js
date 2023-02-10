import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
// import OpenDays from "./OpenDays";

const Map = () => {
  return (
    <>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.753336234345!2d3.1731800210065506!3d6.4738819333213105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b819c6fba15b1%3A0xacc3dbc2fa9d737a!2sKeyonavilleschool!5e0!3m2!1sen!2sng!4v1675896538770!5m2!1sen!2sng"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default Map;
