import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { links, social } from "../Navbar/Navdata";
import Logo from "../Brand/Logo";

function Footer() {
  return (
    <Box className="footer">
      <Flex justifyContent="center">
        <Flex
          className="footer-writeup"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          alignItems="center"
        >
          <Logo />
          <h2>Keyonaville Nursery & Primary School </h2>
        </Flex>
        <Flex className="footer-links" justifyContent="center">
          <Box>
            <h2>PAGES</h2>
            <Box className="footer-pages">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link href={url} passhref="true">
                      {text}
                    </Link>
                  </li>
                );
              })}
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
                      <Link href={url} passhref="true">
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

