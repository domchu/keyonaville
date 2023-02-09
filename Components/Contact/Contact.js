import React from "react";
import Map from "../Map";
import { Box, Grid, Flex } from "@chakra-ui/react";
import {
  SlLocationPin,
  SlEarphones,
  SlEnvolope,
  SlSettings,
} from "react-icons/sl";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

// import openDays from "./../openDays";

const Contact = () => {
  return (
    <>
      <Box>
        <Box className="contact-container">
          <div className="contact-text">
            <h3>CONTACT US</h3>
            <h1>We are here because of you.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aspernatur voluptatem commodi quis. Dolorem nulla officiis quae
              ullam? Mollitia cumque odio, laborum in molestias itaque sed
              deserunt illum accusantium blanditiis dolore adipisci perferendis
              atque quia eum reiciendis hic quidem perspiciatis.
            </p>
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
      <Box className="contact-form">
        <div className="contact-text">
          <h3>WE'LL BE IN TOUCH SOON!</h3>
          <h1>Get in touch with us</h1>
        </div>
        <form action="" method="post">
          <Box className="form">
            <Box>
              <label htmlFor="">
                <input type="text" name="First Name" placeholder="First Name" />
              </label>
            </Box>
            <Box>
              <label htmlFor="">
                <input type="text" name="First Name" placeholder="Last Name" />
              </label>
            </Box>
            <Box>
              <label htmlFor="">
                <input
                  type="text"
                  name="First Name"
                  placeholder="Mobile Number"
                />
              </label>
            </Box>
            <Box>
              <label htmlFor="">
                <input
                  type="text"
                  name="First Name"
                  placeholder="Email Address"
                />
              </label>
            </Box>
          </Box>
          <Box>
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              className="textarea"
              placeholder="Message"
            ></textarea>
          </Box>
          <Box className="summit__btn__container">
            <button type="submit" className="summit__btn">
              SEND MESSAGE
            </button>
          </Box>
        </form>
        {/* find us on social media */}
      </Box>
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
      <Flex>
        <Map />
        {/* <openDays/> */}
      </Flex>
    </>
  );
};

export default Contact;
