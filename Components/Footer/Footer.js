import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { links, social } from "../Navbar/Navdata";
// import Brand from "./Brand/Brand";

function Footer() {
  return (
    <Box className="footer">
      <Flex
        justifyContent="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Flex
          className="footer-writeup"
          justifyContent="center"
          flexDirection="column"
        >
          {/* <Brand /> */}
          <h1>Logo</h1>
          <h2>Keyonaville Nursery & Primary School </h2>
        </Flex>
        <Flex
          className="footer-links"
          justifyContent="center"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Box>
            <h2>PAGES</h2>
            <Box className="footer-pages">
              {/* <Box> */}
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link href={url} passHref>
                      {text}
                    </Link>
                  </li>
                );
              })}
              {/* </Box> */}
            </Box>
          </Box>

          <Box>
            <h2>CONTACT</h2>
            <Box className="footer-tools">
              <div>
                <FcSmartphoneTablet className="contact" />
                <p>+234 8064960303</p>
              </div>
              <div>
                <BsEnvelope className="contact" />
                <p>info@keyonaville.sch.ng</p>
              </div>
            </Box>
          </Box>

          <Box>
            <h2>FIND US</h2>
            <Box className="footer-socials">
              <ul>
                {social.map((socialIcon) => {
                  const { id, url, icon, iconName } = socialIcon;
                  return (
                    <li key={id}>
                      <Link href={url} passHref>
                        {icon}
                        {iconName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;

