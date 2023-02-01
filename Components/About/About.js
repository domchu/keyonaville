import React from "react";
import { Box, Grid, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import nature16 from "../../public/images/nature16.jpg";
import nature17 from "../../public/images/nature17.jpg";

const About = () => {
  return (
    <>
      <Box className="about-us">
        <Flex className="about-us-text">
          <Box>
            <h2>ABOUT US</h2>
            <div className="underline"></div>
            <p>
              The only thing standing between you and your goal is the bullshit
              story you <br /> keep telling yourself as to why you can’t achieve
              it.
            </p>
          </Box>
          <Box>
            <Flex className="contact-list">
              <li>
                <Link href="/" passHref>
                  HOME
                </Link>
              </li>

              <li>
                <Link href="/contact" passHref>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="tel:+6494461709" passHref>
                  MAKE CALL
                </Link>
              </li>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex>
        <Box>
          <h2>
            WE ARE THE LEADER <br /> IN INDUSTRIAL BUSINESS
          </h2>
          <p>
            Leading companies usually have several advantages, such as pricing
            power, brand recognition and a loyal customer base. It takes time to
            achieve a dominant position in an industry, and maintaining that
            leadership position is an ongoing effort. Small businesses should
            first aspire to lead their respective local markets before planning
            for worldwide industry domination.
          </p>
          <Box>
            <p>MRS. ERICK SMITH</p>
            <h5>FOUNDER AND CEO</h5>
          </Box>
        </Box>
        <Flex>
          <Box>
            <Image src={nature16} alt="nature" height="500px" width="400px" />
            <div>
              <h3>Excavator TXS900H</h3>
              <p>The strongest ever</p>
            </div>
          </Box>
          <Box>
            <Image src={nature17} alt="nature" height="500px" width="400px" />
            <div>
              <h3>Excavator TXS900H</h3>
              <p>The strongest ever</p>
            </div>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
