import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
// import Brand from "./Brand/Brand";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <Box className="footer">
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="center"
      >
        <Flex
          className="footer-writeup"
          justifyContent="center"
          flexDirection="column"
        >
          {/* <Brand /> */}
          <h1>Logo</h1>
          <h2>Copyright © Florintech Computer College </h2>
        </Flex>
        <Flex
          className="footer-links"
          justifyContent="center"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Box>
            <h2>PAGES</h2>
            <Box className="footer-pages">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/facilities">Facilities</Link>
                </li>
                <li>
                  <Link href="/Gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <h2>TOOLS</h2>
            <Box className="footer-tools">
              <ul>
                <li>
                  <Link href="/">VERIFY CERTIFICATE</Link>
                </li>
                <li>
                  <Link href="/">ONLINE REGISTERATION</Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <h2>SOCIALS</h2>
            <Box className="footer-socials">
              <ul>
                <li>
                  <Link href="https://facebook.com/florintechcomputercollege">
                    {/* <a> */}
                    <FiFacebook />
                    FACEBOOK
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/florintechcc">
                    {/* <a> */}
                    <FiTwitter />
                    TWITTER
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com/florintechcc">
                    {/* <a> */}
                    <FiLinkedin />
                    LINKEDIN
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    {/* <a> */}
                    <FaWhatsapp />
                    WHATSAPP
                    {/* </a> */}
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
