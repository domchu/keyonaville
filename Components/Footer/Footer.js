import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { social } from "../Navbar/Navdata";
// import Brand from "./Brand/Brand";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
                  <Link href="/" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" passHref>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" passHref>
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/Gallery" passHref>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" passHref>
                    FAQ
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <h2>CONTACT</h2>
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
            <h2>SOCIALS MEDIA</h2>
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
<ul>
  <li>
    <Link href="https://facebook.com/">
      {/* <a> */}
      <FaFacebook />
      FACEBOOK
      {/* </a> */}
    </Link>
  </li>
  <li>
    <Link href="https://twitter.com/">
      {/* <a> */}
      <FaTwitter />
      TWITTER
      {/* </a> */}
    </Link>
  </li>
  <li>
    <Link href="https://linkedin.com/">
      {/* <a> */}
      <FaLinkedin />
      LINKEDIN
      {/* </a> */}
    </Link>
  </li>
  <li>
    <Link href="https://whatsapp.com/">
      {/* <a> */}
      <FaWhatsapp />
      WHATSAPP
      {/* </a> */}
    </Link>
  </li>
  <li>
    <Link href="https://instagram.com/">
      {/* <a> */}
      <FaInstagram />
      INSTAGRAM
      {/* </a> */}
    </Link>
  </li>
</ul>;
