import React from "react";
import { Box, Grid, Flex } from "@chakra-ui/react";
import {
  SlLocationPin,
  SlEarphones,
  SlEnvolope,
  SlSettings,
} from "react-icons/sl";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Form from "../Form";

const Contact = () => {
  return (
    <>
      <Box>
        <Box className="contact-container">
          <div className="contact-text">
            <div className="title">
              <h2>
                <span>/</span> CONTACT US
              </h2>
            </div>
            <h4>We are here because of you.</h4>
          </div>
        </Box>
        <Grid
          className="contact-links"
          templateColumns="repeat(4, 1fr)"
          gap={6}
          placeItems="center"
        >
          <Box>
            <SlLocationPin fontSize={45} className="contact-icon" />
            <h4>keyonaville school</h4>
            <p>No_17 chukwuma street </p>
            <p>Afromedia Lagos state, Nigeria</p>
          </Box>
          <Box>
            <SlEarphones fontSize={45} className="contact-icon" />
            <h4>Let’s talk on Phone</h4>
            <p>Phone: 1-800-222-000 </p>
            <p>Fax: 1-800-222-002</p>
          </Box>
          <Box>
            <SlEnvolope fontSize={45} className="contact-icon" />
            <h4>Email address(s)</h4>
            <p>info@yourdomain.com</p>
            <p>hr@yourdomain.com</p>
          </Box>
          <Box>
            <SlSettings fontSize={45} className="contact-icon" />
            <h4>Customer service</h4>
            <p>Lorem ipsum is simply</p>
            <p>dummy the printing</p>
          </Box>
        </Grid>
      </Box>
      {/* form  */}
      <Form />
      {/* find us on social media */}
      <div className="title">
        <h2>
          <span>/</span> #FOLLOW US ON SOCIAL MEDIA
        </h2>
      </div>
      <Flex className="social-text">
        <Box>
          <h2>Connect with us on social media</h2>
        </Box>
        <div className="line"></div>
        <Box>
          <ul className="social-icons social__icons__small">
            <li>
              <Link href="https://www.facebook.com/">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.whatsapp.com/">
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </Box>
      </Flex>
      <Flex></Flex>
    </>
  );
};

export default Contact;
