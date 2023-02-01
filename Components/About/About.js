import React from "react";
import { Box, Grid, Flex } from "@chakra-ui/react";
import Link from "next/link";

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
            <Flex>
              <li>
                <Link href="/" passHref>
                  HOME
                </Link>
              </li>

              <li>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="tel:+6494461709" passHref>
                  Make a Call
                </Link>
              </li>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default About;
