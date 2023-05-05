import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { social } from "../Navbar/Navdata";
import Logo from "../Brand/Logo";
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;
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
          </Flex>
          <Flex className="footer-links" justifyContent="center">
            <Box className="footeritems">
              <h2>PAGES</h2>
              <Box className="footer-pages">
                <li>
                  <Link
                    href="/"
                    className={currentRoute == "/" ? "active" : ""}
                    passhref="true"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={currentRoute == "/about" ? "active" : ""}
                    passhref="true"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={currentRoute == "/gallery" ? "active" : ""}
                    passhref="true"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={currentRoute == "/contact" ? "active" : ""}
                    passhref="true"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={currentRoute == "/faq" ? "active" : ""}
                    passhref="true"
                  >
                    Faq
                  </Link>
                </li>
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
                        <Link href={url} passhref="true" traget="_blank">
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
        {/* the copy right texts, the designer and company links */}
        <Box pt={40} textAlign="center" fontSize={20} className="copy-right">
          <p>
            &copy; 2023 Keyonaville school. All rights reserved | Designed and
            developed by
            <Link href="/" target="_blank" className="designer">
              Ochu Dominic
            </Link>
            Powered by
            <Link href="/" target="_blank" className="designer">
              jaflah.com
            </Link>
          </p>
        </Box>
      </Box>
    </>
  );
}

export default Footer;

