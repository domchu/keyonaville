import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import {
  SlLocationPin,
  SlEarphones,
  SlEnvolope,
  SlSettings,
} from "react-icons/sl";

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
            <SlEarphones />
            <h4>Let’s talk</h4>
            <p>Phone: 1-800-222-000 </p>
            <p>Fax: 1-800-222-002</p>
          </Box>
          <Box>
            <SlEnvolope />
            <h4>Email address</h4>
            <p>info@yourdomain.com</p>
            <p>hr@yourdomain.com</p>
          </Box>
          <Box>
            <SlSettings />
            <h4>Customer service</h4>
            <p>Lorem ipsum is simply</p>
            <p>dummy the printing</p>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
