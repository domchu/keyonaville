import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { links, social } from "../Navbar/Navdata";
import Logo from "../Brand/Logo";

function Footer() {
  return (
    <>
      <Box className="footer">
        <Flex className="footer__items">
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
            <Box className="footeritems">
              <h2>PAGES</h2>
              <Box className="footer-pages">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <Link href={url} passhref="true" legacyBehavior>
                        <a> {text}</a>
                      </Link>
                    </li>
                  );
                })}
              </Box>
            </Box>
            <Box className="footeritems">
              <h2>CONTACT</h2>
              <Box className="footer-tools">
                <div>
                  <FcSmartphoneTablet className="contact" />
                  <p>+234(0) 8064960303</p>
                </div>
                <div>
                  <BsEnvelope className="contact" />
                  <p>info@keyonaville.sch.ng</p>
                </div>
              </Box>
            </Box>
            <Box className="footeritems">
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
        <Box pt={40} textAlign="center" fontSize={20}>
          <p>
            &copy; 2023 Keyonaville school. All rights reserved | Powered by
          </p>
        </Box>
      </Box>
    </>
  );
}

export default Footer;

